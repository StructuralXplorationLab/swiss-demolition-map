(()=>{
'use strict';
const $=id=>document.getElementById(id), tr=window.DemoI18n.tr;
const tiers=['top01','top05','top1','top5','top10'];
const labels=['Top 0.1%','Top 0.5%','Top 1%','Top 5%','Top 10%'];
const colors=['#780013','#d62136','#fa574e','#ff9778','#ffd2bc'];
const fmt=n=>Number(n||0).toLocaleString('en-US');
let meta=null, map=null, layer=null, activeBackground=null, renderSeq=0, timer=null;
const cache=new Map(), cellData=new Map();
const base={street:'https://tile.openstreetmap.org/{z}/{x}/{y}.png',topographic:'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg',satellite:'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{z}/{x}/{y}.jpeg'};
const swissBounds=L.latLngBounds([45.398181,5.140242],[48.230651,11.47757]);
const background={};
function notify(s){const el=$('notification');el.textContent=s;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),5500);}
function progress(s){const el=$('mapHint');el.textContent=s;el.classList.remove('hidden');}
function setBase(kind){if(activeBackground && map.hasLayer(activeBackground))map.removeLayer(activeBackground);if(kind!=='street'&&!map.hasLayer(background.street))background.street.addTo(map);if(kind==='street'){
for(const name of ['topographic','satellite'])if(map.hasLayer(background[name]))map.removeLayer(background[name]);}
activeBackground=background[kind]||background.street;
if(!map.hasLayer(activeBackground))activeBackground.addTo(map);
background.street.bringToBack();
}
function setupMap(){map=L.map('map',{preferCanvas:true,maxZoom:21,zoomControl:true}).setView([46.85,8.23],8);
const common={tileSize:256,noWrap:true,keepBuffer:2,updateWhenIdle:true};
background.street=L.tileLayer(base.street,{...common,maxNativeZoom:19,maxZoom:21,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'});
for(const name of ['topographic','satellite'])background[name]=L.tileLayer(base[name],{...common,bounds:swissBounds,maxNativeZoom:name==='satellite'?19:18,maxZoom:21,attribution:'&copy; swisstopo'});
setBase('street');$('basemapSelect').addEventListener('change',e=>setBase(e.target.value));
layer=L.layerGroup().addTo(map);map.on('moveend zoomend',()=>{clearTimeout(timer);timer=setTimeout(render,220)});
$('fitAll').onclick=fitAll;$('reloadMap').onclick=()=>{cache.clear();render()};
$('openSidebar').onclick=()=>$('sidebar').classList.toggle('open');
if(window.ResizeObserver)new ResizeObserver(()=>map.invalidateSize({pan:false})).observe($('map'));
}
function fitAll(){if(meta?.bounds){const b=meta.bounds;map.fitBounds([[b[1],b[0]],[b[3],b[2]]],{padding:[25,25],maxZoom:15});}else map.setView([46.85,8.23],8);}
function legend(){const parent=$('legendList');parent.innerHTML='';tiers.forEach((tier,i)=>{const row=document.createElement('label');row.className='legend-row';
const cb=document.createElement('input');cb.type='checkbox';cb.value=tier;cb.className='tier-checkbox';cb.checked=i<3;cb.addEventListener('change',render);
const sw=document.createElement('span');sw.className='swatch';sw.style.background=colors[i];
const title=document.createElement('span');title.className='legend-name';title.textContent=labels[i];
const number=document.createElement('span');number.className='legend-count';number.textContent=meta?fmt(meta.counts[i])+' '+tr('buildings'):'';
row.append(cb,sw,title,number);parent.append(row);});}
function cellsInBounds(b){const size=meta.cell_size;const w=Math.max(-180,b.getWest()),e=Math.min(180,b.getEast()),s=Math.max(-90,b.getSouth()),n=Math.min(90,b.getNorth());const keys=[];
const ix0=Math.floor(w/size),ix1=Math.floor(e/size),iy0=Math.floor(s/size),iy1=Math.floor(n/size);
for(let x=ix0;x<=ix1;x++)for(let y=iy0;y<=iy1;y++){let key=x+'_'+y;if(meta.cells[key])keys.push(key);}return keys;}
async function getJson(path){if(!cache.has(path)){const pending=fetch(path).then(r=>{if(!r.ok)throw Error('Cannot load '+path+' ('+r.status+')');return r.json()}).catch(e=>{cache.delete(path);throw e});cache.set(path,pending);}return cache.get(path);}
const within=(p,b)=>p[0]>=b.getWest()&&p[0]<=b.getEast()&&p[1]>=b.getSouth()&&p[1]<=b.getNorth();
async function render(){if(!meta||!map)return;const request=++renderSeq, b=map.getBounds(),z=map.getZoom();const chosen=new Set([...document.querySelectorAll('.tier-checkbox:checked')].map(el=>tiers.indexOf(el.value)));
if(z<9){for(const i of [3,4])chosen.delete(i);}
if(!chosen.size){layer.clearLayers();$('visibleCount').textContent='0';progress('');return;}
try{let lists;
if(z<9){lists=[await getJson('./data/national.json')];}
else {const keys=cellsInBounds(b);lists=await Promise.all(keys.map(k=>getJson('./data/cells/'+k+'.json')));}
if(request!==renderSeq)return;
let records=[];for(const recordsInFile of lists)for(const p of recordsInFile)if(chosen.has(p[3])&&within(p,b))records.push(p);
records.sort((a,b)=>b[2]-a[2]);const max=z<11?6500:10000;const truncated=records.length>max;
records=records.slice(0,max);
layer.clearLayers();const drawn=[];
for(const p of records){const i=p[3];const circle=L.circleMarker([p[1],p[0]],{radius:i===0?6.5:i===1?5.6:4.7,color:'#fff',weight:1.65,opacity:1,fillColor:colors[i],fillOpacity:.98,interactive:true});
// Public original did not provide a click popup. Hover emphasis is preserved.
circle.on('mouseover',()=>circle.setStyle({weight:2.5,fillOpacity:1}));circle.on('mouseout',()=>circle.setStyle({weight:1.65,fillOpacity:.98}));drawn.push(circle);}
for(const c of drawn)layer.addLayer(c);
$('visibleCount').textContent=fmt(records.length);
const hint=truncated?`${tr('Only the highest-risk')} ${fmt(records.length)} ${tr('buildings are shown. Zoom in to see more.')}`: z<9?'National view: showing only the highest-risk 1%. Zoom in to see more buildings.': `${tr('Showing')} ${fmt(records.length)} ${tr('buildings. Use the filters to explore the risk distribution.')}`;
progress(hint+' '+(meta.demo?'DEMO: synthetic test data, not real forecasts.':''));
}catch(e){if(request!==renderSeq)return;console.error(e);notify('Static building data failed to load: '+e.message);}
}
async function start(){setupMap();legend();try{meta=await getJson('./data/manifest.json');if(meta.demo)$('staticStatus').textContent='DEMO ONLY · Synthetic data, NOT actual demolition predictions';$('datasetLabel').textContent=meta.name;legend();fitAll();await render();
$('publicProgressPanel').classList.remove('show');
}catch(e){console.error(e);$('staticStatus').textContent='Static dataset missing. Run convert_csv.py with the real prediction CSV before publishing.';progress('No static dataset found. Run the CSV converter before publishing. '+e.message);}
document.addEventListener('demolition-language-change',()=>{legend();render()});}
start();
})();

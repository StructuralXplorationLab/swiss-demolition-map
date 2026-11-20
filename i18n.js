// Lightweight local UI translations; paper title, journal title, DOIs and dataset values stay unchanged.
(function(){
'use strict';
const STRINGS = {
  "Swiss Building Demolition Risk Map": {
    "de": "Schweizer Karte des Gebäudeabbruchrisikos",
    "fr": "Carte suisse du risque de démolition des bâtiments"
  },
  "Is Your Building at Risk of Demolition by 2030?": {
    "de": "Ist Ihr Gebäude bis 2030 von einem Abbruch bedroht?",
    "fr": "Votre bâtiment risque-t-il d’être démoli d’ici 2030 ?"
  },
  "Details": {
    "de": "Details",
    "fr": "Détails"
  },
  "01 / BUILDING DATA": {
    "de": "01 / GEBÄUDEDATEN",
    "fr": "01 / DONNÉES DES BÂTIMENTS"
  },
  "Upload risk CSV or GeoPackage": {
    "de": "Risiko-CSV oder GeoPackage hochladen",
    "fr": "Importer un CSV de risques ou un GeoPackage"
  },
  "Risk scores and building attributes · .csv / .gpkg": {
    "de": "Risikowerte und Gebäudemerkmale · .csv / .gpkg",
    "fr": "Scores de risque et attributs des bâtiments · .csv / .gpkg"
  },
  "Or open an existing dataset": {
    "de": "Oder einen bestehenden Datensatz öffnen",
    "fr": "Ou ouvrir un jeu de données existant"
  },
  "No saved datasets": {
    "de": "Keine gespeicherten Datensätze",
    "fr": "Aucun jeu de données enregistré"
  },
  "Open": {
    "de": "Öffnen",
    "fr": "Ouvrir"
  },
  "Demolition risk field": {
    "de": "Feld für Abbruchrisiko",
    "fr": "Champ du risque de démolition"
  },
  "Upload a file first": {
    "de": "Zuerst eine Datei hochladen",
    "fr": "Importer d’abord un fichier"
  },
  "Building ID field": {
    "de": "Gebäude-ID-Feld",
    "fr": "Champ identifiant du bâtiment"
  },
  "Automatic row ID": {
    "de": "Automatische Zeilen-ID",
    "fr": "Identifiant de ligne automatique"
  },
  "GeoPackage layer": {
    "de": "GeoPackage-Ebene",
    "fr": "Couche GeoPackage"
  },
  "02 / CSV GEOMETRY": {
    "de": "02 / CSV-GEOMETRIE",
    "fr": "02 / GÉOMÉTRIE CSV"
  },
  "If your CSV contains WKT, select the geometry field. Otherwise, choose X/Y coordinates to display building points.": {
    "de": "Wenn Ihre CSV-Datei WKT enthält, wählen Sie das Geometriefeld. Andernfalls wählen Sie X-/Y-Koordinaten, um Gebäudepunkte anzuzeigen.",
    "fr": "Si votre CSV contient du WKT, sélectionnez le champ de géométrie. Sinon, choisissez les coordonnées X/Y pour afficher les points des bâtiments."
  },
  "WKT geometry (preferred)": {
    "de": "WKT-Geometrie (bevorzugt)",
    "fr": "Géométrie WKT (recommandée)"
  },
  "No WKT": {
    "de": "Kein WKT",
    "fr": "Aucun WKT"
  },
  "X / Longitude": {
    "de": "X / Längengrad",
    "fr": "X / Longitude"
  },
  "Y / Latitude": {
    "de": "Y / Breitengrad",
    "fr": "Y / Latitude"
  },
  "Not used": {
    "de": "Nicht verwendet",
    "fr": "Non utilisé"
  },
  "CSV coordinate reference system": {
    "de": "CSV-Koordinatenreferenzsystem",
    "fr": "Système de coordonnées du CSV"
  },
  "Risk score scale": {
    "de": "Skala des Risikowerts",
    "fr": "Échelle du score de risque"
  },
  "Auto-detect (0–1 / 0–100)": {
    "de": "Automatisch erkennen (0–1 / 0–100)",
    "fr": "Détection automatique (0–1 / 0–100)"
  },
  "Raw values (usually 0–1)": {
    "de": "Rohwerte (meist 0–1)",
    "fr": "Valeurs brutes (généralement 0–1)"
  },
  "Percentage (0–100 → 0–1)": {
    "de": "Prozent (0–100 → 0–1)",
    "fr": "Pourcentage (0–100 → 0–1)"
  },
  "Import and display GIS data": {
    "de": "GIS-Daten importieren und anzeigen",
    "fr": "Importer et afficher les données SIG"
  },
  "Importing": {
    "de": "Import läuft",
    "fr": "Importation en cours"
  },
  "Preparing…": {
    "de": "Vorbereitung…",
    "fr": "Préparation…"
  },
  "01 / BASEMAP SELECTION": {
    "de": "01 / AUSWAHL DER HINTERGRUNDKARTE",
    "fr": "01 / CHOIX DU FOND DE CARTE"
  },
  "Map background": {
    "de": "Kartenhintergrund",
    "fr": "Fond de carte"
  },
  "Street map": {
    "de": "Strassenkarte",
    "fr": "Plan des rues"
  },
  "Swisstopo topographic map": {
    "de": "Topografische Karte von swisstopo",
    "fr": "Carte topographique swisstopo"
  },
  "SWISSIMAGE aerial imagery": {
    "de": "SWISSIMAGE-Luftbilder",
    "fr": "Photographies aériennes SWISSIMAGE"
  },
  "02 / DEMOLITION RISK LEVELS": {
    "de": "02 / ABBRUCHRISIKOSTUFEN",
    "fr": "02 / NIVEAUX DE RISQUE DE DÉMOLITION"
  },
  "Top 1% means the 1% of buildings with the highest predicted risk scores nationwide.": {
    "de": "Die obersten 1 % bezeichnen die 1 % der Gebäude mit den höchsten prognostizierten Risikowerten in der Schweiz.",
    "fr": "Le « top 1 % » désigne les 1 % de bâtiments présentant les scores de risque prédit les plus élevés à l’échelle suisse."
  },
  "03 / ABOUT THE DATA": {
    "de": "03 / ÜBER DIE DATEN",
    "fr": "03 / À PROPOS DES DONNÉES"
  },
  "Which buildings may be demolished by 2030?": {
    "de": "Welche Gebäude könnten bis 2030 abgebrochen werden?",
    "fr": "Quels bâtiments pourraient être démolis d’ici 2030 ?"
  },
  "This interactive map shows buildings across Switzerland ranked by their predicted demolition risk between 2027 and 2030.": {
    "de": "Diese interaktive Karte zeigt Gebäude in der ganzen Schweiz, geordnet nach ihrem prognostizierten Abbruchrisiko für den Zeitraum 2027 bis 2030.",
    "fr": "Cette carte interactive présente les bâtiments en Suisse classés selon leur risque de démolition prédit pour la période 2027–2030."
  },
  "Buildings are grouped into the top 0.1%, 0.5%, 1%, 5%, and 10% of predicted risk nationwide. Darker red indicates a higher relative risk.": {
    "de": "Die Gebäude werden landesweit nach ihrem prognostizierten Risiko in die obersten 0,1 %, 0,5 %, 1 %, 5 % und 10 % eingeteilt. Dunkleres Rot zeigt ein höheres relatives Risiko an.",
    "fr": "Les bâtiments sont regroupés dans les tranches supérieures de 0,1 %, 0,5 %, 1 %, 5 % et 10 % du risque prédit à l’échelle nationale. Un rouge plus foncé indique un risque relatif plus élevé."
  },
  "Demolition risk is estimated using a machine learning model trained on historical Swiss building data from 2012 to 2025. The model considers various features from publicly available data, including construction year, building type, number of floors, location, accessibility, and socioeconomic indicators. However, the model cannot account for all factors that may influence actual demolition decisions.": {
    "de": "Das Abbruchrisiko wird mit einem maschinellen Lernmodell geschätzt, das anhand historischer Schweizer Gebäudedaten von 2012 bis 2025 trainiert wurde. Das Modell berücksichtigt verschiedene Merkmale aus öffentlich zugänglichen Daten, darunter Baujahr, Gebäudetyp, Anzahl der Geschosse, Standort, Erreichbarkeit und sozioökonomische Indikatoren. Das Modell kann jedoch nicht alle Faktoren berücksichtigen, die tatsächliche Abbruchentscheidungen beeinflussen können.",
    "fr": "Le risque de démolition est estimé à l’aide d’un modèle d’apprentissage automatique entraîné sur des données historiques des bâtiments suisses de 2012 à 2025. Le modèle prend en compte diverses caractéristiques issues de données accessibles au public, notamment l’année de construction, le type de bâtiment, le nombre d’étages, la localisation, l’accessibilité et des indicateurs socioéconomiques. Toutefois, il ne peut pas prendre en compte tous les facteurs susceptibles d’influencer les décisions réelles de démolition."
  },
  "We believe this map can support building preservation, urban planning, and the identification of reusable building materials. This map is provided for research and informational purposes only. Its predictions should not be interpreted as confirmed demolition plans. The authors and their affiliated institutions assume no liability for decisions or actions taken in reliance on these predictions.": {
    "de": "Wir sind überzeugt, dass diese Karte den Erhalt von Gebäuden, die Stadtplanung und die Identifizierung wiederverwendbarer Baumaterialien unterstützen kann. Diese Karte dient ausschliesslich Forschungs- und Informationszwecken. Ihre Vorhersagen dürfen nicht als bestätigte Abbruchpläne verstanden werden. Die Autorinnen und Autoren sowie die ihnen angehörenden Institutionen übernehmen keine Haftung für Entscheidungen oder Handlungen, die im Vertrauen auf diese Vorhersagen getroffen beziehungsweise vorgenommen werden.",
    "fr": "Nous pensons que cette carte peut contribuer à la préservation des bâtiments, à la planification urbaine et à l’identification de matériaux de construction réutilisables. Cette carte est fournie uniquement à des fins de recherche et d’information. Ses prédictions ne doivent pas être interprétées comme des projets de démolition confirmés. Les auteurs et leurs institutions de rattachement déclinent toute responsabilité quant aux décisions ou aux actes fondés sur ces prédictions."
  },
  "In the published study using historical Swiss building data up to 2024, 85.0%, 45.5%, and 29.6% of buildings ranked in the top 0.1%, 0.5%, and 1% for demolition risk, respectively, were subsequently demolished within four years. These historical results are provided for reference, and predictive performance can differ for 2027–2030.": {
    "de": "In der veröffentlichten Studie auf Basis historischer Schweizer Gebäudedaten bis 2024 wurden 85,0 %, 45,5 % beziehungsweise 29,6 % der Gebäude mit den höchsten 0,1 %, 0,5 % und 1 % der prognostizierten Abbruchrisiken innerhalb der folgenden vier Jahre tatsächlich abgebrochen. Diese historischen Ergebnisse dienen als Referenz; die Vorhersagegüte kann für 2027–2030 abweichen.",
    "fr": "Dans l’étude publiée, fondée sur les données historiques des bâtiments suisses jusqu’en 2024, 85,0 %, 45,5 % et 29,6 % des bâtiments figurant respectivement parmi les 0,1 %, 0,5 % et 1 % présentant les risques de démolition prédits les plus élevés ont ensuite été démolis dans un délai de quatre ans. Ces résultats historiques sont fournis à titre de référence ; les performances prédictives peuvent différer pour 2027–2030."
  },
  "04 / RELATED RESEARCH": {
    "de": "04 / ZUGEHÖRIGE FORSCHUNG",
    "fr": "04 / RECHERCHES ASSOCIÉES"
  },
  "Research publication": {
    "de": "Wissenschaftliche Veröffentlichung",
    "fr": "Publication scientifique"
  },
  "Dataset": {
    "de": "Datensatz",
    "fr": "Jeu de données"
  },
  "View dataset on Zenodo": {
    "de": "Datensatz auf Zenodo ansehen",
    "fr": "Consulter le jeu de données sur Zenodo"
  },
  "The test performance of the model used for the 2027–2030 predictions, evaluated on an independent 20% holdout of buildings, is available in the dataset.": {
    "de": "Die Testleistung des Modells für die Vorhersagen 2027–2030 wurde anhand eines unabhängigen Testsatzes von 20 % der Gebäude bewertet und ist im Datensatz dokumentiert.",
    "fr": "Les performances en test du modèle utilisé pour les prédictions 2027–2030, évaluées sur un échantillon indépendant représentant 20 % des bâtiments, sont disponibles dans le jeu de données."
  },
  "Map sources and credits": {
    "de": "Kartenquellen und Urheberangaben",
    "fr": "Sources cartographiques et crédits"
  },
  "Street map: ©": {
    "de": "Strassenkarte : ©",
    "fr": "Plan des rues : ©"
  },
  "Topographic map: ©": {
    "de": "Topografische Karte : ©",
    "fr": "Carte topographique : ©"
  },
  "Aerial imagery: ©": {
    "de": "Luftbilder : ©",
    "fr": "Photographies aériennes : ©"
  },
  "(Swiss national maps).": {
    "de": "(Schweizer Landeskarten).",
    "fr": "(cartes nationales suisses)."
  },
  "Buildings in view": {
    "de": "Gebäude im Kartenausschnitt",
    "fr": "Bâtiments visibles"
  },
  "Loaded dataset": {
    "de": "Geladener Datensatz",
    "fr": "Jeu de données chargé"
  },
  "Preparing dataset…": {
    "de": "Datensatz wird vorbereitet…",
    "fr": "Préparation du jeu de données…"
  },
  "Building data": {
    "de": "Gebäudedaten",
    "fr": "Données des bâtiments"
  },
  "Checking saved datasets and local CSV…": {
    "de": "Gespeicherte Datensätze und lokale CSV-Datei werden geprüft…",
    "fr": "Vérification des jeux de données enregistrés et du CSV local…"
  },
  "Preparing the Swiss building risk map. First-time setup may take several minutes…": {
    "de": "Die Schweizer Abbruchrisikokarte wird vorbereitet. Die erste Einrichtung kann mehrere Minuten dauern…",
    "fr": "Préparation de la carte suisse des risques de démolition. La première initialisation peut prendre plusieurs minutes…"
  },
  "Open data panel": {
    "de": "Datenbereich öffnen",
    "fr": "Ouvrir le panneau des données"
  },
  "EPFL website": {
    "de": "EPFL-Website",
    "fr": "Site web de l’EPFL"
  },
  "Zoom to dataset extent": {
    "de": "Auf gesamten Datensatz zoomen",
    "fr": "Zoomer sur l’ensemble du jeu de données"
  },
  "Refresh map": {
    "de": "Karte aktualisieren",
    "fr": "Actualiser la carte"
  },
  "Select field": {
    "de": "Feld auswählen",
    "fr": "Sélectionner un champ"
  },
  "Leaflet could not load. Please check your internet connection.": {
    "de": "Leaflet konnte nicht geladen werden. Überprüfen Sie Ihre Internetverbindung.",
    "fr": "Leaflet n’a pas pu être chargé. Vérifiez votre connexion Internet."
  },
  "Import failed": {
    "de": "Import fehlgeschlagen",
    "fr": "Échec de l’importation"
  },
  "Dataset ready": {
    "de": "Datensatz bereit",
    "fr": "Jeu de données prêt"
  },
  "Importing building data": {
    "de": "Gebäudedaten werden importiert",
    "fr": "Importation des données des bâtiments"
  },
  "Error": {
    "de": "Fehler",
    "fr": "Erreur"
  },
  "Import completed": {
    "de": "Import abgeschlossen",
    "fr": "Importation terminée"
  },
  "Building spatial index": {
    "de": "Räumlicher Gebäudeindex",
    "fr": "Index spatial des bâtiments"
  },
  "Uploading data and preparing the spatial index…": {
    "de": "Daten werden hochgeladen und der räumliche Index vorbereitet…",
    "fr": "Téléversement des données et préparation de l’index spatial…"
  },
  "Map ready. Building data loaded successfully.": {
    "de": "Karte bereit. Gebäudedaten erfolgreich geladen.",
    "fr": "Carte prête. Données des bâtiments chargées avec succès."
  },
  "Loading building attributes…": {
    "de": "Gebäudemerkmale werden geladen…",
    "fr": "Chargement des attributs du bâtiment…"
  },
  "Predicted demolition risk score": {
    "de": "Prognostizierter Abbruchrisikowert",
    "fr": "Score de risque de démolition prédit"
  },
  "Copy all attributes (JSON)": {
    "de": "Alle Attribute kopieren (JSON)",
    "fr": "Copier tous les attributs (JSON)"
  },
  "Building attributes copied.": {
    "de": "Gebäudeattribute kopiert.",
    "fr": "Attributs du bâtiment copiés."
  },
  "Clipboard access is not permitted by your browser.": {
    "de": "Der Browser erlaubt keinen Zugriff auf die Zwischenablage.",
    "fr": "Le navigateur n’autorise pas l’accès au presse-papiers."
  },
  "Load a dataset first.": {
    "de": "Laden Sie zuerst einen Datensatz.",
    "fr": "Chargez d’abord un jeu de données."
  },
  "Enter a building EGID.": {
    "de": "Geben Sie eine Gebäude-EGID ein.",
    "fr": "Saisissez l’EGID d’un bâtiment."
  },
  "Building data is temporarily unavailable. Please try again later.": {
    "de": "Gebäudedaten sind vorübergehend nicht verfügbar. Bitte versuchen Sie es später erneut.",
    "fr": "Les données des bâtiments sont temporairement indisponibles. Veuillez réessayer plus tard."
  },
  "No usable CSV or saved database was found.": {
    "de": "Keine nutzbare CSV-Datei oder gespeicherte Datenbank gefunden.",
    "fr": "Aucun CSV exploitable ni aucune base de données enregistrée trouvés."
  },
  "Looking for saved database or server-side CSV…": {
    "de": "Gespeicherte Datenbank oder CSV auf dem Server wird gesucht…",
    "fr": "Recherche d’une base de données enregistrée ou d’un CSV sur le serveur…"
  },
  "Opening saved building database…": {
    "de": "Gespeicherte Gebäudedatenbank wird geöffnet…",
    "fr": "Ouverture de la base de données des bâtiments enregistrée…"
  },
  "CSV found. Preparing the building spatial database…": {
    "de": "CSV gefunden. Räumliche Gebäudedatenbank wird vorbereitet…",
    "fr": "CSV trouvé. Préparation de la base de données spatiale des bâtiments…"
  },
  "Importing…": {
    "de": "Import läuft…",
    "fr": "Importation en cours…"
  },
  "Click a building on the map to inspect its risk score and attributes.": {
    "de": "Klicken Sie auf ein Gebäude, um Risikowert und Attribute anzuzeigen.",
    "fr": "Cliquez sur un bâtiment pour consulter son score de risque et ses attributs."
  },
  "Imported": {
    "de": "Importiert",
    "fr": "Importés"
  },
  "buildings": {
    "de": "Gebäude",
    "fr": "bâtiments"
  },
  "buildings;": {
    "de": "Gebäude;",
    "fr": "bâtiments ;"
  },
  "scored.": {
    "de": "mit Risikowert.",
    "fr": "avec un score."
  },
  "Loaded": {
    "de": "Geladen",
    "fr": "Chargés"
  },
  "buildings, including": {
    "de": "Gebäude, darunter",
    "fr": "bâtiments, dont"
  },
  "risk scores.": {
    "de": "Risikowerte.",
    "fr": "scores de risque."
  },
  "Showing": {
    "de": "Anzeige von",
    "fr": "Affichage de"
  },
  "buildings. Use the filters to explore the risk distribution.": {
    "de": "Gebäuden. Nutzen Sie die Filter, um die Risikoverteilung zu erkunden.",
    "fr": "bâtiments. Utilisez les filtres pour explorer la répartition des risques."
  },
  "Only the highest-risk": {
    "de": "Nur die",
    "fr": "Seuls les"
  },
  "buildings are shown. Zoom in to see more.": {
    "de": "Gebäude mit dem höchsten Risiko werden angezeigt. Zoomen Sie hinein, um mehr zu sehen.",
    "fr": "bâtiments présentant les risques les plus élevés sont affichés. Zoomez pour en voir davantage."
  },
  "This CSV contains points rather than building footprints.": {
    "de": "Diese CSV enthält Punkte statt Gebäudegrundrisse.",
    "fr": "Ce CSV contient des points plutôt que des emprises de bâtiments."
  },
  "Map request failed:": {
    "de": "Kartenanfrage fehlgeschlagen :",
    "fr": "Échec de la requête cartographique :"
  },
  "Loading failed:": {
    "de": "Laden fehlgeschlagen :",
    "fr": "Échec du chargement :"
  },
  "Search failed:": {
    "de": "Suche fehlgeschlagen :",
    "fr": "Échec de la recherche :"
  },
  "No building found for ID:": {
    "de": "Kein Gebäude für diese ID gefunden :",
    "fr": "Aucun bâtiment trouvé pour cet identifiant :"
  },
  "Found": {
    "de": "Gefunden :",
    "fr": "Correspondances :"
  },
  "matches; showing the first.": {
    "de": "Treffer; der erste wird angezeigt.",
    "fr": "résultats ; affichage du premier."
  },
  "Checking existing datasets failed:": {
    "de": "Prüfung vorhandener Datensätze fehlgeschlagen :",
    "fr": "Échec de la vérification des jeux de données existants :"
  },
  "; trying CSV auto-import…": {
    "de": "; automatischer CSV-Import wird versucht…",
    "fr": "; tentative d’importation automatique du CSV…"
  },
  "Upload failed:": {
    "de": "Hochladen fehlgeschlagen :",
    "fr": "Échec du téléversement :"
  },
  "Uploading and inspecting:": {
    "de": "Hochladen und Prüfen :",
    "fr": "Téléversement et inspection :"
  },
  "Select risk field": {
    "de": "Risikofeld auswählen",
    "fr": "Sélectionner le champ de risque"
  },
  "Select an existing dataset": {
    "de": "Vorhandenen Datensatz auswählen",
    "fr": "Sélectionner un jeu de données existant"
  },
  "Show": {
    "de": "Anzeigen",
    "fr": "Afficher"
  }
};
let language='en';
try { const saved=localStorage.getItem('demolition-map-language'); if(['en','de','fr'].includes(saved))language=saved; } catch (_) {}
const originals=new WeakMap();
const translatedAttributes=new WeakMap();
function tr(text){return STRINGS[text]?.[language] || text;}
function translateDOM(){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){
    const parent=node.parentElement;
    if(!parent || parent.closest('script,style,.research-citation,.language-switch'))continue;
    if(!originals.has(node)){
      const src=node.nodeValue;
      if(!Object.prototype.hasOwnProperty.call(STRINGS,src.trim()))continue;
      originals.set(node,src);
    }
    const original=originals.get(node);
    node.nodeValue=original.replace(original.trim(),tr(original.trim()));
  }
  for(const el of document.querySelectorAll('[title],[aria-label]')){
    if(el.closest('.research-citation,.language-switch'))continue;
    if(!translatedAttributes.has(el))translatedAttributes.set(el,{});
    const values=translatedAttributes.get(el);
    for(const attr of ['title','aria-label']){
      if(!el.hasAttribute(attr))continue;
      if(!(attr in values))values[attr]=el.getAttribute(attr);
      el.setAttribute(attr,tr(values[attr]));
    }
  }
  document.documentElement.lang=language;
  document.title=tr('Swiss Building Demolition Risk Map');
  document.querySelectorAll('.language-switch button[data-lang]').forEach(btn=>{
    const on=btn.dataset.lang===language;
    btn.classList.toggle('active',on);
    btn.setAttribute('aria-pressed',String(on));
  });
}
function applyLanguage(value){
  if(!['en','de','fr'].includes(value))return;
  language=value;
  try{localStorage.setItem('demolition-map-language',language);}catch(_){}
  translateDOM();
  document.dispatchEvent(new CustomEvent('demolition-language-change',{detail:{language}}));
}
window.DemoI18n={tr,get language(){return language;},applyLanguage,translateDOM};
document.querySelectorAll('.language-switch button[data-lang]').forEach(btn=>btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang)));
translateDOM();
})();

var map = L.map('map').setView([32, -6], 4.75);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function getColor(d) {
 return  (d < 45001 ) | d == '15000-45000' ? '#b2d8d8' :
         (d < 75001) | d == '45000-75000' ? '#66b2b2' :
         (d < 120001) | d == '75000-120000' ? '#008080' :
                             '#FFEDA0';
}


function style(feature) {
 return {
     weight: 2,
     opacity: 1,
     color: 'white',
     dashArray: '3',
     fillOpacity: 0.7,
     fillColor: getColor(feature.properties.PIBparHABI)
 };
}

var geojson = L.geoJson(region, {
 style: style,
}).addTo(map);
//This section is for the Legend
var legend = L.control({position: 'bottomleft'});
legend.onAdd = function (map) {

var div = L.DomUtil.create('div', 'info legend');
labels = ['<strong>PIB par habitant (DH)</strong>'],
categories = ['15000-45000','45000-75000','75000-120000','Other'];

for (var i = 0; i < categories.length; i++) {

     div.innerHTML += 
     labels.push(
         '<i class="circle" style="background:' + getColor(categories[i]) + '"></i> ' +
     (categories[i] ? categories[i] : '+'));

 }
 div.innerHTML = labels.join('<br>');
return div;
};
legend.addTo(map);

// this section is for an interactive map
function highlightFeature(e) {
var layer = e.target;

layer.setStyle({
 weight: 5,
 color: '#666',
 dashArray: '',
 fillOpacity: 0.7
});

if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
 layer.bringToFront();
}
info.update(layer.feature.properties);
}
function resetHighlight(e) {
 geojson.resetStyle(e.target);
 info.update();
}
function zoomToFeature(e) {
map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, region) {
 region.on({
     mouseover: highlightFeature,
     mouseout: resetHighlight,
     click: zoomToFeature
 });
}

geojson = L.geoJson(region, {
 style: style,
 onEachFeature: onEachFeature
}).addTo(map);
// this section is to show info on each feature hovered by the mous
var info = L.control();

info.onAdd = function (map) {
 this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
 this.update();
 return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
this._div.innerHTML = '<h4>PIB par habitant (DH)</h4>' +  (props ?
 '<b>' + props.Nom_Provin + '</b><br />' + props.PIBparHABI + 'DHs'
 : 'Hover over a state');
};
info.addTo(map);
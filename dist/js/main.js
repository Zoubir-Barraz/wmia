/* 
 * Main
 */

//(function () {
    //var attribut = getParameterByName('attribut');
    //var function_choice = getParameterByName('index');

    //document.getElementById('titre').textContent = titre;

    //var currentfunction = feature.find(function (r) {
        //return r.name === functions(function_choice)
    //})

    var map = L.map('map').setView([34, -4], 6);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11'
    }).addTo(map);

	var geojson = L.geoJson(region, {
		style: style,
	}).addTo(map);


    //var currentBounds = geojson.getBounds()
    //map.fitBounds(currentBounds);
//})();
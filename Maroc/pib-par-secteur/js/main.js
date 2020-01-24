$( document ).ready(function() {
    var map = L.map('map').setView([32, -6], 4.75);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11'
    }).addTo(map);
    
    url = "/Maroc/pib-par-secteur/centroideregion.json"
    $.getJSON(url, function(data) {
        geojsonLayer = L.geoJson(data, {
            pointToLayer: function (feature, latlng) {
                var options = {
                    data: {
                        'PIB_sec_primaire': feature.properties.Primaire,
                        'PIB_sec_secondaire': feature.properties.Secondaire,
                        'PIB_sec_Tertiaire': feature.properties.Tertiaire
                    },
                    chartOptions: {
                        'PIB_sec_primaire': {
                            fillColor: '#ffe39f',
                            minValue: 0,
                            maxValue: 100,
                            maxHeight: 100,
                            displayText: function (value) {
                                return value + "%";
                            }
                        },
                        'PIB_sec_secondaire': {
                            fillColor: '#d30000',
                            minValue: 0,
                            maxValue: 100,
                            maxHeight: 100,
                            displayText: function (value) {
                                return value + "%";
                            }
                        },
                        'PIB_sec_Tertiaire': {
                            fillColor: '#004c97',
                            minValue: 0,
                            maxValue: 100,
                            maxHeight: 100,
                            displayText: function (value) {
                                return value + "%";
                            }
                        }
                    },
                    weight: 1,
                    color: '#666',
                    opacity: 1
                }
                //var barChartMarker = new L.BarChartMarker(latlng, options);
                //var barChartMarker = new L.RadialBarChartMarker(latlng, options);
                //var barChartMarker = new L.StackedRegularPolygonMarker(latlng, options);
                var barChartMarker = new L.PieChartMarker(latlng, options);    
                //var barChartMarker = new L.CoxcombChartMarker(latlng, options);
                //var barChartMarker = new L.RadialMeterMarker(latlng, options);
                return barChartMarker;
            }
        });
        geojsonLayer.addTo(map);
    });
    var regionlayer = L.geoJson(region).addTo(map);
});





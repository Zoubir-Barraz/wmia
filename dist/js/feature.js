/* 
 * Utility
 */

function getColor(d) {
    return (d < 10847.0 & d > 2695.0) ? '#800026' :
        (d < 27979.0 & 10848.0 < d) ? '#BD0026' :
            (d < 38976.0 & 27980.0 < d) ? '#E31A1C' :
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
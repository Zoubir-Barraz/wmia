/* 
 * Utility
 */
var attribut = getParameterByName('attribut');
var function_choice = getParameterByName('index');

var function_name = functions(function_choice)       
var functions = [

function getColor1(d) {
    return  (d <= 20447 & d >= 16204 ) | d == '16204-20447' ? '#800026' :
            (d <= 27381 & 20448 < d ) | d == '20448-27381' ? '#BD0026' :
            (d <= 42869 & 27382 <= d) | d == '27382-42869' ? '#E31A1C' :
                                '#FFEDA0';
},
function getColor2(d) {
    return  (d <= 4.9 & d >= 1.6 ) | d == "1.6-4.9" ? '#800026' :
            (d <= 9.4 & 5 <= d ) | d == "5-9.4"  ? '#BD0026' :
            (d <= 14.6 & 9.5 <= d) | d == "9.5-14.6"  ? '#E31A1C' :
                                '#FFEDA0';
},
function getColor3(d) {
    return  d < 2.7 | d == "1.7-2.6" ? '#800026' :
            d < 6.7 | d == "2.7-6.6" ? '#BD0026' :
            d < 12.4 | d == "6.7-12.4" ? '#E31A1C' :
                                '#FFEDA0';
},
function getColor4(d) {
    return  d < 0.464 | d == "0.541-0.463"  ? '#800026' :
            d < 0.602 | d == "0.464-0.601" ? '#BD0026' :
            d < 0.664 | d == "0.602-0.664" ? '#E31A1C' :
                                '#FFEDA0';
},
function getColor5(d) {
    return  d < 2 | d == "1.2-1.9"  ? '#800026' :
            d < 3.1 | d == "2-3"  ? '#BD0026' :
            d < 6 | d == "3.1-5" ? '#E31A1C' :
                                '#FFEDA0';
},
function getColor6(d) {
    return  d < 22 | d == "0-21" ? '#800026' :
            d < 44 | d == "22-43" ? '#BD0026' :
                                '#FFEDA0';
},
function getColor7(d) {
    return  (d < 26.6 | d == "0-26.5")  ? '#800026' :
            (d < 51.1 | d == "26.6-51")  ? '#BD0026' :
            (d < 69 | d == "51.1-68") ? '#E31A1C' :
                                '#FFEDA0';
}
]

        

function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: function_name(feature.properties.attribut)
    };
}
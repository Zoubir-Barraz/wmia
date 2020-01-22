function getParameterByName(name) {
    url = window.location.href;

    name = name.replace(/[\[\]]/g, '\\$&');

    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) return null;

    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

(function () {
    var titre = getParameterByName('titre');
    var region = getParameterByName('region');

    document.getElementById('page-titre').textContent  = titre;
})();
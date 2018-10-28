// var upb;
function initialize() {
    var image = document.getElementById('image');
    var propertiPeta = {
        center: new google.maps.LatLng(-0.026487, 109.338362),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);

    // membuat Marker
    var upb = new google.maps.Marker({
        position: new google.maps.LatLng(-0.0044568, 109.3020912),
        map: peta
    });
    upb.addListener('click', function () {
        document.getElementById("ket").innerHTML = text_upb;
        image.src = "assets/img/2.png";
    });
    var wd = new google.maps.Marker({
        position: new google.maps.LatLng(-0.0283751, 109.3342667),
        map: peta
    });
    wd.addListener('click', function () {
        document.getElementById("ket").innerHTML = "Kampus WD";
        image.src = "assets/img/4.png";
    });

    var stmik = new google.maps.Marker({
        position: new google.maps.LatLng(-0.0260116, 109.3305435),
        map: peta
    });
    stmik.addListener('click', function () {
        document.getElementById("ket").innerHTML = text_stmik;
        image.src = "assets/img/5.png";
    });

    var untan = new google.maps.Marker({
        position: new google.maps.LatLng(-0.0599076, 109.345622),
        map: peta
    });
    untan.addListener('click', function () {
        document.getElementById("ket").innerHTML = text_untan;
        image.src = "assets/img/1.png";
    });

    var iain = new google.maps.Marker({
        position: new google.maps.LatLng(-0.0388796, 109.3405644),
        map: peta
    });
    iain.addListener('click', function () {
        document.getElementById("ket").innerHTML = text_iain;
        image.src = "assets/img/6.png";
    });

    var polnep = new google.maps.Marker({
        position: new google.maps.LatLng(-0.053851, 109.3468206),
        map: peta
    });
    polnep.addListener('click', function () {
        document.getElementById("ket").innerHTML = text_polnep;
        image.src = "assets/img/3.png";
    });
}
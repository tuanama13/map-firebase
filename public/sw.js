const NAMACACHE = 'mws-v2';
const filesToCache = [
    '.',
    'index.html',
    // 'fetxh1.html',
    'peta_gorengan.html',
    'peta_kampus.html',
    'sort.html',
    'task1.html',
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png',
    'assets/img/4.png',
    'assets/img/5.png',
    'assets/img/6.png',
    'assets/img/exit.png',
    'assets/img/img2.png',
    'assets/img/img3.png',
    'assets/img/bg_cover.jpeg',
    'assets/img/header1.jpeg',
    'assets/css/index.css',
    'assets/css/modal.css',
    'assets/css/style.css',
    'p1/add2numbers.html',
    'assets/js/fungsi.js',
    'assets/js/map_google.js',
    // 'assets/js/peta.js',
    'assets/js/readnote.js',
    'assets/js/string_gorengan.js',
    'assets/js/string.js',
    'p1/js/add2numbers.js'
];
self.addEventListener('install', event => {
    // console.log('Persiapan Cache');
    event.waitUntil(
        caches.open(NAMACACHE)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});
// var request = new XMLHttpRequest();
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(ada_response => {
            if (ada_response) {
                return ada_response;
            }
            // tidak ada response, ambil ke jaringan
            else {
                return fetch(event.request)
            }

        })
        .catch(error => {
            return new Response("Waduh " + error);
        })
    );
});
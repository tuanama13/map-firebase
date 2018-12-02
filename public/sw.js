const NAMACACHE = 'mws-v1';
const filesToCache = [
    '.',
    'index.html',
    '404.html',
    'css/mygrid.css',
    'p1/add2numbers.html',
    'p1/js/add2numbers.js'
];
self.addEventListener('install', event => {
    console.log('Persiapan Cache');
    event.waitUntil(
        caches.open(NAMACACHE)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});
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
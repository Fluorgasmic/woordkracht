/* Service worker : permet d'utiliser Woordkracht sans connexion.
   Stratégie « réseau d'abord » : quand il y a internet, on prend toujours
   la dernière version (donc les nouveaux mots de contenu.js) ;
   sinon, on utilise la copie gardée en mémoire. */
const CACHE = 'woordkracht-v2';
const FILES = [
  './', './index.html', './contenu.js', './manifest.json', './icone-180.png', './icone-512.png',
  './fonts/lexend-latin-400-normal.woff2', './fonts/lexend-latin-600-normal.woff2',
  './fonts/opendyslexic-latin-400-normal.woff2', './fonts/opendyslexic-latin-700-normal.woff2',
  './fonts/bangers-latin-400-normal.woff2'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request, {cache: 'no-cache'}).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});

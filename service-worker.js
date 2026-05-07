/* ======================================================
   SUNU Training Center — Service Worker
   Cache les pages vitrine pour usage hors ligne
   ====================================================== */

const CACHE_NAME = 'sunu-vitrine-v1';

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/a-propos.html',
  '/services.html',
  '/formations.html',
  '/etudiants.html',
  '/partenaires.html',
  '/contact.html',
  '/app.html',
  '/vitrine/css/style.css',
  '/vitrine/js/vitrine.js',
  '/images/logo-sunu.png',
  '/manifest.json'
];

// Installation : mise en cache des ressources statiques
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('[SW] Certains fichiers non mis en cache:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activation : nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch : stratégie Cache-First pour les assets, Network-First pour les pages HTML
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorer les requêtes non-GET et hors domaine
  if (request.method !== 'GET' || !url.origin.includes(self.location.origin)) return;

  // CDN (fonts, icons) — Network-First
  if (url.hostname.includes('googleapis') || url.hostname.includes('cloudflare') || url.hostname.includes('gstatic')) {
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
    return;
  }

  // Pages HTML — Network-First (contenu frais), Cache en fallback
  if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request) || caches.match('/index.html'))
    );
    return;
  }

  // Assets (CSS, JS, images) — Cache-First
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      });
    })
  );
});

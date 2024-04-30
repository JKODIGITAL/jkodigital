const cacheName = 'jkodigital-v1';
const staticAssets = [
  '/',
  '/index.html',
  '/styles.css',
  '/logo.png',
  '/css/all.min.css',
  '/dist/bootstrap.min.css'
  // Outros arquivos estáticos
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', e => {
  e.respondWith(cacharOuRede(e.request));
});

async function cacharOuRede(request) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  return cachedResponse || fetch(request);
}

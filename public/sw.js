const CACHE_NAME = 'fluency-chunks-v5';

const PRECACHE_URLS = [
  '/',
  '/chunks',
  '/dense-structure',
  '/tense-chunks',
  '/tense-matrix',
  '/audit-chunks',
  '/fluency-guide',
  '/methodology',
  '/learn-chunks',
  '/longreads',
  '/longreads/native-brain',
  '/longreads/memory-consolidation',
  '/longreads/chunk-architecture',
  '/tests/diagnostic_audit_report.html',
  '/tests/diagnostic_test.html',
  '/manifest.webmanifest',
  '/manifest.json',
  '/apple-touch-icon.png',
  '/favicon.ico',
  '/img/favicon.svg',
  '/img/icon-192.png',
  '/img/icon-512.png',
  '/img/apple-touch-icon-longread.png',
  '/img/apple-touch-icon-chunks.png',
  '/img/apple-touch-icon-dense-structure.png',
  '/img/apple-touch-icon-learn-chanks.png',
  '/img/apple-touch-icon-methodology.png',
  '/img/apple-touch-icon-tense-chunks.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Pre-cache core SSG routes and icons concurrently
      await Promise.allSettled(
        PRECACHE_URLS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[SW] Could not pre-cache:', url, err);
          })
        )
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }

  // Never intercept cross-origin requests (e.g. fonts, CDN)
  if (url.origin !== self.location.origin) {
    return;
  }

  // Skip Next.js internals, dev / HMR endpoints, and API routes
  if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/api/')) {
    return;
  }

  // Navigation requests (HTML pages): Stale-While-Revalidate
  // Delivers instant 0ms load if cached, while quietly updating cache from network.
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const networkFetch = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return networkResponse;
          })
          .catch(async () => {
            // If offline and request not directly cached, try fallback to cached root
            if (!cachedResponse) {
              const fallback = await caches.match('/');
              if (fallback) return fallback;
            }
            return cachedResponse;
          });

        // Instant response from cache if available!
        if (cachedResponse) {
          return cachedResponse;
        }

        // If not in cache yet, wait for network
        return networkFetch;
      })
    );
    return;
  }

  // Static assets (CSS, JS, images, icons, fonts): Cache-first
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Revalidate in background without blocking
        fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
          })
          .catch(() => {});
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return networkResponse;
      });
    })
  );
});

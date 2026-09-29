const CACHE_NAME = 'fluency-chunks-v2';

const STATIC_ASSETS = [
  '/',
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

// Helper to fetch with timeout to prevent Safari mobile from hanging
function fetchWithTimeout(request, ms = 2500) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('[SW] Fetch timed out'));
    }, ms);

    fetch(request)
      .then((response) => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache assets individually so failure of one does not break the entire install
      for (const asset of STATIC_ASSETS) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn('[SW] Could not pre-cache asset:', asset, err);
        }
      }
    })
  );
  self.skipWaiting();
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
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Parse URL to check origin
  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }

  // CRITICAL: Do NOT intercept cross-origin requests (e.g. Google Fonts, Google CDN, external analytics).
  // Intercepting cross-origin requests in Safari causes severe hangs when CDN is throttled.
  if (url.origin !== self.location.origin) {
    return;
  }

  // Skip internal Next.js HMR or dev endpoints
  if (url.pathname.startsWith('/_next/webpack-hmr') || url.pathname.startsWith('/api/')) {
    return;
  }

  // HTML Navigation requests: Fast Network-first with 2.5s timeout, falling back to cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetchWithTimeout(request, 2500)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
          const rootCached = await caches.match('/');
          if (rootCached) {
            return rootCached;
          }
          return fetch(request);
        })
    );
    return;
  }

  // Static same-origin assets: Cache-first with background revalidation
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Revalidate in background without blocking response
        fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse));
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

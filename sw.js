// Minimal service worker. This loader page immediately redirects into the
// live Apps Script dashboard, so there's nothing meaningful to cache here —
// this SW exists purely to satisfy Chrome's installability requirement
// (manifest + registered service worker with a fetch handler).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass everything straight through to the network — no offline caching,
  // since the point is always showing the live dashboard, not a stale copy.
  event.respondWith(fetch(event.request));
});

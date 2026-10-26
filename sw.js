// Zero-Cache Service Worker (सिर्फ PWA Install के लिए, कोई डेटा ब्लॉक या कैश नहीं करेगा)
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
        .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    // सीधा इंटरनेट/सर्वर से डेटा लाओ, फोन के कैश में कुछ मत रोको
    return;
});

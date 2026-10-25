self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});
self.addEventListener('fetch', (e) => {
  // सामान्य फेच अनुरोध जो वेबसाइट को ऑनलाइन और सुचारू रूप से चलाएगा
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

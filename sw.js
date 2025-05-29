const staticCacheName = 'site-static-v1';
const assets = [
	'/',
	"/manifest.json",
	"/pwa.js",
	'/script.js',
	'/style.css'
];

// install event
self.addEventListener('install', evt => {
	console.log('service worker installed');
});

// activate event
self.addEventListener('activate', evt => {
	evt.waitUntil(
		caches.keys().then(keys => {
			return Promise.all(keys.map(key => caches.delete(key)));
		})
	);
});

// fetch event
self.addEventListener('fetch', evt => {
	evt.respondWith(
		fetch(evt.request).then(networkRes => {
			// aggiorna anche la cache in background se vuoi
			return caches.open(staticCacheName).then(cache => {
				cache.put(evt.request, networkRes.clone());
				return networkRes;
			});
		}).catch(() => {
			// se fallisce la fetch (offline), usa la cache
			return caches.match(evt.request);
		})
	);
});

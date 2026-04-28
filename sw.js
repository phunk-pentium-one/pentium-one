const CACHE_NAME = "soto-it-v2";
const assets = [
  "./",
  "index.html",
  "css/style.css",
  "js/script.js",
  "img/soto.png",
];

// Tahap Install: Menyimpan file ke memori HP/Laptop
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    }),
  );
});

// Tahap Fetch: Mengambil data dari memori kalau internet mati
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

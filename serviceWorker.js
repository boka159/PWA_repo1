var myCacheName = "myPWACache";

const addResourcesToCache = async (resources) => {
    const cache = await caches.open(myCacheName);
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
        "/",
        "/index.html",
        "/CSS/style.css",
        "/app.js",
        "/media/icons/icon-32.png",
        "/media/icons/icon-512.png",
      ])
    );
  });
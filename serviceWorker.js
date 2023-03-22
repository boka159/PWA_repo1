var myCacheName = "myPWACache";

const addResourcesToCache = async (resources) => {
    const cache = await caches.open(myCacheName);
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
      console.log("Installing...");
    event.waitUntil(
      addResourcesToCache([
        "/",
        "/index.html",
        "/CSS/style.css",
        "/JS/app.js",
        "/media/icons/icon-32.png",
        "/media/icons/icon-512.png",
      ])
    );
  });
// Custodi 451 — service worker NETWORK-FIRST
// Prende sempre la versione aggiornata se online; la cache è solo fallback offline.
var CACHE = 'custodi451-v15';
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}));
});
self.addEventListener('fetch', function(e){
  if(e.request.method!=='GET')return;
  var u=new URL(e.request.url);
  if(u.origin!==location.origin) return; // non intercettare Supabase/CDN
  e.respondWith(
    fetch(e.request).then(function(resp){
      var cp=resp.clone(); caches.open(CACHE).then(function(c){c.put(e.request,cp)});
      return resp;
    }).catch(function(){ return caches.match(e.request); })
  );
});

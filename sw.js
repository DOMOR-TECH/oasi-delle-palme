// Custodi 451 — service worker NETWORK-FIRST
// Prende sempre la versione aggiornata se online; la cache è solo fallback offline.
var CACHE = 'custodi451-v111';
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

// ---- WEB PUSH ----
self.addEventListener('push', function(e){
  var d={}; try{ d=e.data.json(); }catch(_){ d={ title:'Custodi 451', body: e.data?e.data.text():'' }; }
  e.waitUntil(self.registration.showNotification(d.title||'Custodi 451', {
    body: d.body||'', icon:'apple-touch-icon.png', badge:'apple-touch-icon.png',
    data:{ url: d.url||'/' }, vibrate:[80,40,80]
  }));
});
self.addEventListener('notificationclick', function(e){
  e.notification.close();
  var url=(e.notification.data&&e.notification.data.url)||'/';
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(cl){
    for(var i=0;i<cl.length;i++){ if(cl[i].url.indexOf(self.location.origin)===0) return cl[i].focus(); }
    return self.clients.openWindow(url);
  }));
});

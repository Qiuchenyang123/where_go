// serviceWork编程中，不能访问DOM，不能访问诸如window的对象
// self——代表这个serviceWork的全局作用域对象
// 生命周期一共有三个时间，分别是：install、activate、fetch
self.addEventListener('install', event => {
    console.log('install', event);
    event.waitUntil(self.skipWaiting())
});
self.addEventListener('activated', event => {
    console.log('activated', event);
    event.waitUntil(self.clients.claim())
});
self.addEventListener('fetch', event => {
    console.log('fetch', event)
});
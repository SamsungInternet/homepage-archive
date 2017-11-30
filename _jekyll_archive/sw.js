/* global toolbox, importScripts, self */
/* jshint browser:true */
'use strict';

importScripts('/scripts/sw-toolbox.js');

toolbox.options.networkTimeoutSeconds = 3;

toolbox.precache([
	'/fonts/SamsungOne/SamsungOne-400.woff',
	'/fonts/SamsungOne/SamsungOne-700.woff',
	'/images/sdevhublogod.svg',
]);

toolbox.router.get(/https:\/\/cdn.polyfill.io\/.*/ig, toolbox.fastest);
toolbox.router.get(/https:\/\/cdn-images-1.medium.com\/.*/ig, toolbox.cacheFirst);
toolbox.router.get(/https:\/\/feed-service.ada.is\/.*/ig, toolbox.fastest);
toolbox.router.get(/https:\/\/img.gs\/.*/ig, toolbox.cacheFirst);
toolbox.router.get('/fonts', toolbox.cacheFirst);
toolbox.router.get('/images', toolbox.cacheFirst);
toolbox.router.get('/style', toolbox.fastest);
toolbox.router.get('/scripts', toolbox.fastest);
toolbox.router.default = toolbox.networkFirst;

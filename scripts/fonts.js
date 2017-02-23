'use strict';
/* eslint no-var: 0 */

// Fancy Type Faces
window.WebFontConfig = {
	custom: {
		families: ['Samsung One:n4,n7'],
		urls: ['/fonts/SamsungOne/fonts.css']
	}
};

(function(d) {
	var wf = d.createElement('script');
	var s = d.scripts[0];
	wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
	s.parentNode.insertBefore(wf, s);
} (document));
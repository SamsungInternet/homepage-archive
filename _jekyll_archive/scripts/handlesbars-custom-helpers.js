/* global Handlebars */
/* eslint no-var: 0*/
'use strict';

// DOMParser polyfill
(function(DOMParser) {

	var
	  proto = DOMParser.prototype
	, nativeParse = proto.parseFromString
	;

	// Firefox/Opera/IE throw errors on unsupported types
	try {
		// WebKit returns null on unsupported types
		if ((new DOMParser()).parseFromString("", "text/html")) {
			// text/html parsing is natively supported
			return;
		}
	} catch (ex) {}

	proto.parseFromString = function(markup, type) {
		if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
			var
			  doc = document.implementation.createHTMLDocument("")
			;
	      		if (markup.toLowerCase().indexOf('<!doctype') > -1) {
        			doc.documentElement.innerHTML = markup;
      			}
      			else {
        			doc.body.innerHTML = markup;
      			}
			return doc;
		} else {
			return nativeParse.apply(this, arguments);
		}
	};
} (DOMParser));

var parser = new DOMParser();

Handlebars.registerHelper('eq', function (val, val2, options) {
	if(val.trim() === val2.trim()){
		return options.fn(this);
	}
});

Handlebars.registerHelper('noteq', function(val, val2, options) {
	if(val.trim() !== val2.trim()){
		return options.fn(this);
	}
});

var div = document.createElement('div');
Handlebars.registerHelper('excerpt', function(val, options) {
	var doc = parser.parseFromString('<div>' + options.fn(this) + '</div>', 'text/html');
	var div = doc.querySelector('div');
	var clean = div.textContent;
	var output = clean.split(' ').slice(0, val ? Number(val) : Infinity).join(' ');
	if (output.length < clean.length) output = output + '&hellip;';
	return output;
});

Handlebars.registerHelper('grabimage', function (prefix, options) {
	if (!options) {
		options = prefix;
		prefix = '';
	}
	var doc = parser.parseFromString('<div>' + options.fn(this) + '</div>', 'text/html');
	var img = doc.querySelector('img[src]');
	var result = img ? '<img src="' + prefix + img.src + '" class="feed-item_image" />' : '';
	return result;
});

Handlebars.registerHelper('strip-medium-suffix', function(val, options) {
	return val.replace('Continue reading on Samsung Internet Developers »', '');
});

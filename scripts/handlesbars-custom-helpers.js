/* global Handlebars */
'use strict';

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
	div.innerHTML = options.fn(this);
	var clean = div.textContent;
	div.innerHTML = '';
	var output = clean.split(' ').slice(0, val ? Number(val) : Infinity).join(' ');
	if (output.length < clean.length) output = output + '&hellip;';
	return output;
});

Handlebars.registerHelper('grabimage', function(options) {
	div.innerHTML = options.fn(this);
	var img = div.querySelector('img');
	var result = img ? '<img src="' + img.src + '" />' : '';
	div.innerHTML = '';
	return result;
});

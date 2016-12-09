/* global Promise, Handlebars */
/* eslint no-var:0 */
'use strict';

function addScript(url) {
	return new Promise(function (resolve, reject) {
		var script = document.createElement('script');
		script.setAttribute('src', url);
		document.head.appendChild(script);
		script.onload = resolve;
		script.onerror = reject;
	});
}

function isOk(response) {
	if (!response.ok) {
		return Promise.resolve(response)
			.then(getBody)
			.then(parseHTML)
			.then(function (range) {
				var message = range.querySelector('#message');
				throw Error(message.textContent || ('Bad response: ' + response.statusText + ' (' + response.status + ')'));
			});
	}
	return response;
}

function getJSON(response) {
	return response.json();
}

function getBody(response) {
	return response.body();
}

function parseHTML(string) {
	return document.createRange().createContextualFragment(string);
}

var currentScript = document.currentScript || (function () {
	var scripts = document.getElementsByTagName( 'script' );
	return scripts[ scripts.length - 1 ];
} ());

document.addEventListener('DOMContentLoaded', function () {

	// Load the template and the contents
	var self = this;
	console.log(this.src);
	Promise.all([
		fetch(self.src).then(isOk).then(getJSON),
		!(Handlebars.templates && Handlebars.templates[self.template]) ? addScript('scripts/compiled-templates/' + self.template + '.js') : Promise.resolve()
	])
	.then(function (data) {
		self.parentNode.innerHTML = Handlebars.templates[self.template]({ items: data[0].reverse() });
	})
	.catch(function (e) {
		console.log(e);
	});
}.bind({
	src: currentScript.getAttribute('data-src'),
	parentNode: currentScript.parentNode,
	template: currentScript.getAttribute('data-template')
}));
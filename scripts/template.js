var currentScript = document.currentScript || (function () {
	var scripts = document.getElementsByTagName( 'script' );
	return  scripts[ scripts.length - 1 ];
} ());

var template = currentScript.getAttribute('data-template');
var src = currentScript.getAttribute('data-src');
var parentNode = currentScript.parentNode;

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
			.then(parse)
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

document.addEventListener("DOMContentLoaded", function(event) {

	// Load the template and the contents
	Promise.all([
		fetch(src).then(isOk).then(getJSON),
		!(Handlebars.templates && Handlebars.templates[template]) ? addScript('scripts/compiled-templates/' + template + '.js') : Promise.resolve()
	])
	.then(function (data) {
		parentNode.innerHTML = Handlebars.templates[template]({ items: data[0].reverse() });
	})
	.catch(function (e) {
		console.log(e);
	});
});
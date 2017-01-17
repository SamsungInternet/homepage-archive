/* eslint no-var:0 */

'use strict';

var label = document.getElementById('hamburger-toggle-label');
var ul = document.querySelector('#hamburger-toggle-label + ul');
label.addEventListener('keydown', function (e) {

	// Trigger the click event from the keyboard
	var code = e.which;
	// 13 = Return, 32 = Space
	if ((code === 13) || (code === 32)) {
		this.click();
	}
});

document.body.addEventListener('focus', function (e) {
	if (
		e.target !== label &&
		e.target.parentElement !== ul &&
		label.matches('#hamburger-toggle:checked + #hamburger-toggle-label')) {
		label.click();
	}
}, true);

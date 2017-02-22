/* eslint no-var:0 */
'use strict';

var menu = null;

document.addEventListener('DOMContentLoaded', function() {
    menu = document.getElementById('burger-menu');
});

function openMenu() {
    menu.classList.add('burger-menu_open');
    menu.classList.remove('burger-menu_close');
}

function closeMenu() {
    menu.classList.add('burger-menu_close');
    menu.classList.remove('burger-menu_open');
}

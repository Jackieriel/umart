"use strict";

const drop_down_parent = document.querySelectorAll('.drop-down-parent');
const drop_down = document.querySelectorAll('.drop-down');
const burger_menu = document.querySelector('.burger-menu .burger-menu-area');
const main_nav = document.querySelector('.main-nav');
const search_box = document.querySelector('.search-box');
const search_autocomplete = document.querySelector('.search-autocomplete');

drop_down_parent.forEach((drop) => drop.addEventListener('click', toggle_dropdown));

burger_menu.addEventListener('click', toggle_menu);

search_box.addEventListener('focus', show_autocomplete_box);
search_box.addEventListener('blur', remove_autocomplete_box);


let dropdownStatus = false;
function toggle_dropdown (e) {
    e.preventDefault();
    if (dropdownStatus === false) {
        drop_down.forEach((drop) => drop.style.transform = 'translateY(0)');
        drop_down.forEach((drop) => drop.style.opacity = '1');
        drop_down.forEach((drop) => drop.style.visibility = 'visible');
        drop_down_parent.forEach((drop) => drop.style.backgroundColor = '#d8d822');
        drop_down_parent.forEach((drop) => drop.style.color = 'black');
        dropdownStatus = true;
    } else {
        drop_down.forEach((drop) => drop.style.transform = 'translateY(-10px)');
        drop_down.forEach((drop) => drop.style.opacity = '0');
        drop_down.forEach((drop) => drop.style.visibility = 'hidden');
        drop_down_parent.forEach((drop) => drop.style.backgroundColor = 'transparent');
        drop_down_parent.forEach((drop) => drop.style.color = 'white');
        dropdownStatus = false;
    }
}

let menuStatus = false;
function toggle_menu (e) {
    e.preventDefault();
    if (menuStatus === false) {
        main_nav.style.transform = 'translateX(0)';
        burger_menu.classList.add('close');
        menuStatus = true;
    } else {
        main_nav.style.transform = 'translateX(1000px)';
        burger_menu.classList.remove('close');
        menuStatus = false;
    }
}

function show_autocomplete_box (e) {
    e.preventDefault();

    search_autocomplete.style.transform = 'translateY(0)';
    search_autocomplete.style.opacity = '1';
    search_autocomplete.style.visibility = 'visible';
}

function remove_autocomplete_box (e) {
    e.preventDefault();

    search_autocomplete.style.transform = 'translateY(-10px)';
    search_autocomplete.style.opacity = '0';
    search_autocomplete.style.visibility = 'hidden';
}
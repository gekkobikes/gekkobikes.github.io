// Disable focus outlining for mouse users
var bodyElem = document.querySelector('body');
window.onmousedown = function () {
  bodyElem.classList.add('mouse-user');
};
window.onkeyup = function (e) {
  e = e || window.event;
  if (e.keyCode === 9)
    bodyElem.classList.remove('mouse-user');
};

// Main menu
var btnMenu = document.getElementById('btn_menu');
var menu = document.getElementById('menu');
var menuIsOpen = false;
btnMenu.onclick = function() {
  if (!menuIsOpen) {
    menu.classList.add('open');
    btnMenu.classList.add('active');
    menuIsOpen = true;
  } else {
    menu.classList.remove('open');
    btnMenu.classList.remove('active');
    menuIsOpen = false;
  }
};
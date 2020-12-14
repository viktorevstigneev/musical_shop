"use strict";
 
const body = document.querySelector('.body');
let buttonTop = document.querySelector('.Upper');

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    
    buttonTop.style.bottom = "-70px";
  } else {
    buttonTop.style.bottom = "0";
  }
  prevScrollpos = currentScrollPos;
}
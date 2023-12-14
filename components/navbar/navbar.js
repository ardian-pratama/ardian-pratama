const navbarButton = document.querySelector(".navbar-button");
const navbarMenu = document.querySelector(".navbar-menu");
const allNavbarMenu = document.querySelectorAll(".navbar-menu ul li");

export function navbar() {
 // menambahkan efek untuk navbar-button dan navbar-menu
 navbarButton.addEventListener("click", function () {
  navbarButton.classList.toggle("navbar-button-enable");
  navbarMenu.classList.toggle("navbar-menu-enable");
  navbarMenu.classList.toggle("navbar-menu-disable");

  if (!navbarButton.classList.contains("navbar-button-enable")) {
   allNavbarMenu.forEach(function (e) {
    e.classList.remove("navbar-click");
   });
  }
 });

 // menambahkan efek untuk link di dalam navbar
 allNavbarMenu.forEach(function (e) {
  e.addEventListener("click", function (event) {
   allNavbarMenu.forEach(function (other) {
    other.classList.remove("navbar-click");
   });
   e.classList.add("navbar-click");
  });
 });

 function navbar() {
  if (!event.target.closest(".navbar-item")) {
   navbarButton.classList.remove("navbar-button-enable");

   if (navbarButton.classList.contains("navbar-button-enable")) {
    navbarMenu.classList.add("navbar-menu-enable");
   } else {
    navbarMenu.classList.remove("navbar-menu-enable");
    navbarMenu.classList.add("navbar-menu-disable");
    allNavbarMenu.forEach(function (e) {
     e.classList.remove("navbar-click");
    });
   }
  }
 }

 // menonaktifkan navbar-button dan navbar-menu pada keadaan tertentu
 document.addEventListener("click", function (event) {
  if (!event.target.closest(".navbar-item")) {
   navbarButton.classList.remove("navbar-button-enable");

   if (navbarButton.classList.contains("navbar-button-enable")) {
    navbarMenu.classList.add("navbar-menu-enable");
   } else {
    navbarMenu.classList.remove("navbar-menu-enable");
    navbarMenu.classList.add("navbar-menu-disable");
    allNavbarMenu.forEach(function (e) {
     e.classList.remove("navbar-click");
    });
   }
  }
 });

 // membuat posisi navbar menjadi fixed sesuai dengan kondisi
 window.onscroll = function () {
  const header = document.querySelector("header");
  const navbar = header.offsetTop;

  if (window.pageYOffset > navbar) {
   header.classList.add("navbar-scroll");
  } else {
   header.classList.remove("navbar-scroll");
  }
 };
}


// mengatur tinggi background svg
let header = document.querySelector("header");
let svg = document.querySelector(".svg");

svg.style.top = header.offsetHeight + "px";

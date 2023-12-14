// tampilkan profil
const buttonTampilkan = document.querySelectorAll(".button-tampil");
const isiProfil = document.querySelector(".isi-profil");
const isiPencapaian = document.querySelector(".isi-pencapaian");

// baca selengkapnya 
const buttonBacaSelengkapnya = document.querySelectorAll(".baca-selengkapnya");
const bacaSelengkapnya = document.querySelector(".teks-card p");

export function button() {
 // tampilkan profil
 buttonTampilkan.forEach(function (e) {
  e.addEventListener("click", function () {
   e.classList.toggle("svg-rotate");
   if (e.classList.contains("tampilkan-profil")) {
    isiProfil.classList.toggle("tampilkan-tampil");
   } else {
    isiPencapaian.classList.toggle("tampilkan-tampil");
   }
  });
 });
 
 // baca bacaSelengkapnya
 buttonBacaSelengkapnya.forEach(function (e) {
  e.addEventListener("click", function(event) {
  event.target.parentElement.classList.toggle("line-clamp");
  if(event.target.parentElement.classList.contains("line-clamp")) {
   e.innerHTML = "Baca selengkapnya";
  } else {
   e.innerHTML = "Tutup";
  }
  });
 });
}

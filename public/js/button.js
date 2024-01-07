export function button() {
 // variabel untuk menampilkan
 const buttonProfil = document.querySelector(".isi-profil button");
 const profil = document.querySelector(".tampil-profil");
 const buttonPencapaian = document.querySelector(".isi-pencapaian button");
 const pencapaian = document.querySelector(".tampil-pencapaian");

 let buttonTeks;
 let buttonSvg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="552.611px" height="552.611px" viewBox="0 0 552.611 552.611" style="enable-background:new 0 0 552.611 552.611;" xml:space="preserve"><g><g><path d="M486.413,221.412L122.347,12.916c-52.938-30.318-95.852-5.44-95.852,55.563v415.652c0,61.004,42.914,85.882,95.852,55.563 l364.066-208.49C539.351,300.887,539.351,251.731,486.413,221.412z" /></g></g>
  </svg>`;

 // function untuk menampilkan
 function Tampil(button, tampil) {
  button.addEventListener("click", () => {
   button.classList.toggle("button-aktif");
   const buttonAktif = button.classList.contains("button-aktif");
   if (buttonAktif) {
    tampil.classList.remove("display-none");
    const prevHeight = tampil.offsetHeight;
    buttonTeks = "Tutup";
    tampil.style.height = "0";
    tampil.offsetHeight;
    tampil.style.height = `${prevHeight}px`;
   } else {
    buttonTeks = "Lihat";
    tampil.style.height = "0";
   }
   setTimeout(() => {
    if (!buttonAktif) {
     tampil.classList.add("display-none");
     tampil.style.height = "max-content";
    }
    button.innerHTML = `${buttonTeks}${buttonSvg}`;
   }, 1000);
  });
 }

 // jalankan constructor function
 new Tampil(buttonProfil, profil);
 new Tampil(buttonPencapaian, pencapaian);

 function TampilBahasa(namaBahasa) {
  const button = document.querySelector(`.${namaBahasa}`);
  const close = document.querySelector(`.close-${namaBahasa}`);
  const tampil = document.querySelector(".tampil-bahasa-pemrograman");
  let bahasa = document.querySelector(
   `.tampil-bahasa-pemrograman .${namaBahasa}`
  );

  button.addEventListener("click", () => {
   const bahasaAktif = bahasa.classList.contains("display-none");
   if (bahasaAktif) {
    bahasa.classList.remove("display-none");
    const prevHeight = bahasa.scrollHeight;
    bahasa.style.height = "0";
    bahasa.offsetHeight;
    bahasa.style.height = `${prevHeight}px`;

    Array.from(tampil.children).forEach(child => {
     if (child !== bahasa) {
      child.style.order = parseInt(child.style.order) + 1;
     }
    });
    bahasa.style.order = "1";
   } else {
    bahasa.style.height = "0";
   }
   setTimeout(() => {
    if (!bahasaAktif) {
     bahasa.classList.add("display-none");
     bahasa.style.height = "max-content";
    }
    button.classList.toggle("bahasa-pemrograman-aktif");
   }, 1000);
  });
  close.addEventListener("click", () => {
   bahasa.style.height = "0";
   setTimeout(() => {
    bahasa.classList.add("display-none");
    button.classList.toggle("bahasa-pemrograman-aktif");
   }, 1000);
  });
 }

 // Jalankan constructor function
 new TampilBahasa("html");
 new TampilBahasa("css");
 new TampilBahasa("javascript");

 // function untuk baca selengkapnya
 function Baca(namaKelas) {
  const button = document.querySelector(`.button-${namaKelas}`);
  const teks = document.querySelector(`.teks-card .${namaKelas}`);

  button.addEventListener("click", () => {
   console.log("click");
   const kelas = teks.classList.contains("line-clamp");
   if (kelas) {
    button.innerHTML = "Tutup";
   } else {
    button.innerHTML = "Baca selengkapnya";
   }
   teks.classList.toggle("line-clamp");
  });
 }

 // Jalankan constructor function
 new Baca("portfolio-website");
 new Baca("coming-soon");
}

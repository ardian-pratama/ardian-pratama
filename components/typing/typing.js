const brand = document.querySelector(".brand");
const gelar = document.querySelector(".gelar");
const teksGelar = ["pelajar", "pemula web developer"];
const teksBrand = "selamat datang";
let isiTeks;

let user = localStorage.getItem("id");
let nama = localStorage.getItem("nama");

if (nama && nama.length > 0) {
  isiTeks = [`hai ${nama}`, `${teksBrand} kembali . . .`];
  console.log(isiTeks);
} else if (user) {
  isiTeks = [`${teksBrand} kembali . . .`];
} else {
  isiTeks = [`${teksBrand} . . .`];
}

// Fungsi konstruktor Type
export function typing() {
 function Type(tempat, array, index) {
  tempat.textContent = "";
  let i = index;
  let j = 0;
  function type() {
   if (j < array[i].length) {
    tempat.textContent += array[i].charAt(j);
    j++;
    setTimeout(type, 100);
   } else {
    setTimeout(() => {
     j = 0;
     tempat.textContent = "";
     indexArray();
    }, 3000);
   }
  }
  function indexArray() {
   if (i < array.length - 1) {
    i += 1;
   } else {
    i = 0;
   }
   type();
  }
  type();
 }

 new Type(brand, isiTeks, 0);
 new Type(gelar, teksGelar, 0);
}

export function typing() {
 // navbar teks brand
 const brand = document.querySelector(".teks-brand p");
 const teksBrand = "selamat datang";
 let isiTeksBrand;
 const status = document.querySelector(".status span");
 const teksStatus = ["pelajar", "pemula web developer"];

 let id = localStorage.getItem("id");
 let nama = localStorage.getItem("nama");

 if (nama && nama.length > 0) {
  isiTeksBrand = [`hai ${nama}`, `${teksBrand} kembali . . .`];
 } else if (id) {
  isiTeksBrand = [`${teksBrand} kembali . . .`];
 } else {
  isiTeksBrand = [`${teksBrand} . . .`];
 }

 // constructor function
 // type normal
 function Type(tempat, array, index, speed, interval) {
  tempat.textContent = "";
  let i = index;
  let j = 0;
  // jalankan type
  function type() {
   if (j < array[i].length) {
    tempat.textContent += array[i].charAt(j);
    j++;
    setTimeout(type, speed);
   } else {
    setTimeout(() => {
     j = 0;
     tempat.textContent = "";
     indexArray();
    }, interval);
   }
  }
  // menambah jumlah indek untuk array
  function indexArray() {
   if (i < array.length - 1) {
    i++;
   } else {
    i = 0;
   }
   type();
  }
  type();
 }

 // type reverse
 function TypeReverse(tempat, array, index) {
  tempat.textContent = "";
  let i = index;
  let j = 0;
  // jalankan type
  function type() {
   if (j < array[i].length) {
    tempat.textContent += array[i].charAt(j);
    j++;
    setTimeout(type, 100);
   } else if (j === array[i].length) {
    setTimeout(() => {
     backspace();
    }, 2000);
   }
  }
  // menghapus karakter satu per satu (backspace)
  function backspace() {
   if (j >= 0) {
    tempat.textContent = tempat.textContent.slice(0, -1);
    j--;
    setTimeout(backspace, 100);
   } else {
    indexArray();
   }
  }
  // menambah jumlah indek untuk array
  function indexArray() {
   if (i < array.length - 1) {
    i++;
   } else {
    i = 0;
   }
   type();
  }
  type();
 }

 // jalankan constructor function type normal
 new Type(brand, isiTeksBrand, 0, 100, 3000);
 // jalankan constructor function type reverse
 new TypeReverse(status, teksStatus, 0);
}

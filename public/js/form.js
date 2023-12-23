import { typing } from "./typing.js";
export function form() {
 function form() {
  const inputs = document.querySelectorAll(".form-item .input");
  const form = document.querySelector(".hubungi-saya-form");
  const valid = Array.from(inputs).map(() => false);

  // lakukan validasi
  inputs.forEach((input, index) => {
   input.addEventListener("input", event => {
    const value = event.target.value.trim();
    if (!event.target.validity.valid || value === "") {
     event.target.parentElement.classList.add("invalid");
     valid[index] = true;
    } else {
     event.target.parentElement.classList.remove("invalid");
     valid[index] = false;
    }
   });
  });

  // jika input invalid batalkan submit
  form.addEventListener("submit", e => {
   e.preventDefault();
   const nama = document.querySelector("#nama");
   const email = document.querySelector("#email");
   const pesan = document.querySelector("#pesan");

   if (!valid.some(valid => valid)) {
    localStorage.setItem("nama", nama.value);
    localStorage.setItem("email", email.value);

    let namaInput = nama.value;
    let emailInput = email.value;
    let pesanInput = pesan.value;
    let nomor = "6288279252600";
    let url =
     "https://wa.me/" +
     nomor +
     "?text=Nama lengkap%20%3A%20" +
     "%0A" +
     "%20%20" +
     encodeURIComponent(`*${namaInput}*`) +
     "%0AAlamat email%20%3A%20" +
     "%0A" +
     "%20%20" +
     encodeURIComponent(`*${emailInput}*`) +
     "%0APesan saya%20%3A%20" +
     "%0A" +
     "%20%20" +
     encodeURIComponent(`*${pesanInput}*`);

    document.querySelector(".progres").classList.remove("display-none");
    setTimeout(() => {
     document.querySelector(".progres").classList.add("display-none");
     window.location.href = url;
    }, 5000);
   }
  });
 }
 form();

 // menambahkan rows textarea
 function tambahUkuran() {
  const textarea = document.querySelector(".form-item textarea");
  textarea.addEventListener("input", () => {
   let jumlahRow = pesan.value.split("\n").length;
   if (jumlahRow > 1) {
    textarea.rows = jumlahRow;
   } else {
    textarea.rows = jumlahRow;
   }
  });
 }
 tambahUkuran();
}

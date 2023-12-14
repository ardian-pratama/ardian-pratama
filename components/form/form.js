const form = document.querySelector(".hubungi-saya");
const nama = document.querySelector("#nama");
const email = document.querySelector("#email");
const pesan = document.querySelector("#pesan");

export function formSubmit() {
 form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isiNama = nama.value;
  localStorage.setItem("nama", isiNama);
  let isiEmail = email.value;
  localStorage.setItem("email", isiEmail);
  let isiPesan = pesan.value;
  let nomor = "6288279252600";

  let url =
   "https://wa.me/" +
   nomor +
   "?text=Nama lengkap%20%3A%20" + "%0A" + "%20%20" +
   encodeURIComponent("*" + isiNama + "*") +
   "%0AAlamat email%20%3A%20" + "%0A" + "%20%20" +
   encodeURIComponent("*" + isiEmail + "*") +
   "%0APesan saya%20%3A%20" + "%0A" + "%20%20" +
   encodeURIComponent("_" + isiPesan + "_");

  window.location.href = url;
 });
 
 pesan.addEventListener("input", function() {
  let jumlahBaris = pesan.value.split("\n").length;
  console.log(jumlahBaris);
  if(jumlahBaris > 1) {
   pesan.rows = jumlahBaris;
  } else {
   pesan.rows = jumlahBaris;
  }
 });
}

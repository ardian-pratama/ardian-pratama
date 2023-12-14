const hari = document.querySelector(".hari");
const jam = document.querySelector(".jam");
const menit = document.querySelector(".menit");
const detik = document.querySelector(".detik");
const usia = document.querySelector(".usia");

export function countdown() {
 // function hitung mundur pembuatan website
 function countdownWaktuPembuatanWebsite() {
  let waktuSekarang = new Date();
  let waktuTarget = new Date(2023, 11, 11, 0, 0, 0);

  let selisihWaktu = waktuSekarang - waktuTarget;

  let selisihDetik = Math.floor(selisihWaktu / 1000);
  let selisihMenit = Math.floor(selisihDetik / 60);
  let selisihJam = Math.floor(selisihMenit / 60);
  let selisihHari = Math.floor(selisihJam / 24);

  selisihDetik %= 60;
  selisihMenit %= 60;
  selisihJam %= 24;

  hari.innerHTML = selisihHari;
  jam.innerHTML = selisihJam;
  menit.innerHTML = selisihMenit;
  detik.innerHTML = selisihDetik;
 }
 setInterval(countdownWaktuPembuatanWebsite, 1000);

 // function hitung usia
 function hitungUsia() {
  // Waktu sekarang
  let waktuSekarang = new Date();

  // Waktu target (contoh: 11 Desember 2023)
  let waktuTarget = new Date(2005, 4, 8);

  // Menghitung selisih waktu dalam milidetik
  let selisihWaktu = waktuSekarang - waktuTarget;

  // Menghitung usia dalam tahun, hari, jam, menit, dan detik
  let selisihTahun = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24 * 365.25));
  let selisihBulan = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24 * 30.44));
  let selisihHari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
  let selisihJam = Math.floor(
   (selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let selisihMenit = Math.floor(
   (selisihWaktu % (1000 * 60 * 60)) / (1000 * 60)
  );
  let selisihDetik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

  // Mendapatkan sisa bagi untuk bulan, hari, jam, menit, dan detik
  selisihBulan %= 12;
  selisihHari = Math.floor((selisihHari %= 30.44));
  selisihJam %= 24;
  selisihMenit %= 60;
  selisihDetik %= 60;

  usia.innerHTML = `${selisihTahun} tahun, ${selisihBulan} bulan, ${selisihHari}
  hari, ${selisihJam} jam, ${selisihMenit} menit, ${selisihDetik} detik`;
 }
 setInterval(hitungUsia, 1000);
}

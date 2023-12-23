export function countdown() {
 const variabel = urutan => ({
  tahun: document.querySelector(`.tahun-${urutan}`),
  bulan: document.querySelector(`.bulan-${urutan}`),
  hari: document.querySelector(`.hari-${urutan}`),
  jam: document.querySelector(`.jam-${urutan}`),
  menit: document.querySelector(`.menit-${urutan}`),
  detik: document.querySelector(`.detik-${urutan}`)
 });

 const waktuWebsite = new Date(2023, 11, 11, 0, 0, 0);
 const waktuSaya = new Date(2005, 4, 8, 0, 0, 0);

 const Countdown = (waktu, variabel) => {
  const selisihWaktu = new Date() - waktu;

  const units = {
   tahun: Math.floor(selisihWaktu / (1000 * 60 * 60 * 24 * 365.25)),
   bulan: Math.floor(selisihWaktu / (1000 * 60 * 60 * 24 * 30.44)) % 12,
   hari: Math.floor((selisihWaktu / (1000 * 60 * 60 * 24)) % 30.44),
   jam: Math.floor(selisihWaktu / (1000 * 60 * 60)) % 24,
   menit: Math.floor(selisihWaktu / (1000 * 60)) % 60,
   detik: Math.floor(selisihWaktu / 1000) % 60
  };

  for (const unit in variabel) {
   if (variabel[unit]) variabel[unit].innerHTML = units[unit].toLocaleString();
  }
 };

 // jalankan function sesuai waktu yang kita inginkan
 setInterval(() => {
  Countdown(waktuWebsite, variabel("satu"));
  Countdown(waktuSaya, variabel("dua"));
 }, 1000);
}

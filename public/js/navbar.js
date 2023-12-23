export function navbar() {
 // navbar
 const hamburgerMenu = document.querySelector(".hamburger-menu");
 const navbarMenu = document.querySelector(".navbar-menu");
 const navbarItems = document.querySelectorAll(".navbar-menu ul li");

 // tema
 const temaButton = document.querySelector(".tema-tampil");
 const temaButtonTeks = document.querySelector(".tema-tampil p");
 const temaMenu = document.querySelector(".tema-menu");
 const temaMenuItems = document.querySelectorAll(".tema-menu ul li");
 const terangSvg = document.querySelector(".opening-svg .terang-svg");
 const gelapSvg = document.querySelector(".opening-svg .gelap-svg");

 const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
 let tema;

 // ambil data user dari local storage
 const user = localStorage.getItem("tema");

 if (user) {
  temaButton.classList.add(`${user}`);
  temaButtonTeks.innerHTML = `Mode ${user}`;
  document.body.classList.add(`${user}`);
 } else {
  // atur tema awal ke system
  tema = darkMode.matches ? "gelap" : "terang";
  temaButton.classList.add(`${tema}`);
  temaButtonTeks.innerHTML = `Mode ${tema}`;
  localStorage.setItem("tema", tema);
  document.body.classList.add(`${tema}`);
 }
 temaMenuItems.forEach(() => {
  const menuTerang = document.querySelector(".menu-terang");
  const menuGelap = document.querySelector(".menu-gelap");

  menuTerang.classList.remove("tema-menu-aktif");
  menuGelap.classList.remove("tema-menu-aktif");
  terangSvg.classList.add("display-none");
  gelapSvg.classList.add("display-none");
  if (tema == "terang" || user == "terang") {
   menuTerang.classList.add("tema-menu-aktif");
   terangSvg.classList.remove("display-none");
  } else {
   menuGelap.classList.add("tema-menu-aktif");
   gelapSvg.classList.remove("display-none");
  }
 });

 // menambahkan class untuk hamburger menu dan navbar menu saat di klik
 hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hamburger-menu-aktif");
  navbarMenu.classList.toggle("navbar-menu-aktif");
  navbarItems.forEach(e => {
   e.classList.remove("navbar-menu-click");
  });
  if (!temaMenu.classList.contains("display-none")) {
   temaMenu.classList.add("display-none");
  }
 });

 // menambahkan class ketika navbar items di klik
 navbarItems.forEach(function (e) {
  e.addEventListener("click", () => {
   navbarItems.forEach(function (event) {
    if (event.classList.contains("navbar-menu-click")) {
     event.classList.remove("navbar-menu-click");
    }
   });
   e.classList.add("navbar-menu-click");
  });
 });

 // menambahkan tema
 temaButton.addEventListener("click", () => {
  temaButton.classList.toggle("tema-tampil-aktif");
  temaMenuItems.forEach(e => {
   e.addEventListener("click", event => {
    document.body.className = "";
    terangSvg.classList.add("display-none");
    gelapSvg.classList.add("display-none");
    if (event.target.closest(".menu-terang")) {
     temaButton.classList.remove("gelap");
     tema = "terang";
     terangSvg.classList.remove("display-none");
    } else {
     temaButton.classList.remove("terang");
     tema = "gelap";
     gelapSvg.classList.remove("display-none");
    }
    temaMenuItems.forEach(event => {
     if (event.classList.contains("tema-menu-aktif")) {
      event.classList.remove("tema-menu-aktif");
     }
    });
    e.classList.add("tema-menu-aktif");
    temaButton.classList.add(`${tema}`);
    temaButtonTeks.innerHTML = `Mode ${tema}`;

    document.body.classList.add(`${tema}`);
    localStorage.setItem("tema", tema);
   });
  });
  navbarItems.forEach(e => {
   e.addEventListener("click", event => {
    if (
     !event.target.closest(".tema-tampil") &&
     !event.target.closest(".tema-menu")
    ) {
     temaMenu.classList.add("display-none");
     temaButton.classList.remove("tema-tampil-aktif");
    }
   });
  });
  temaMenu.classList.toggle("display-none");
 });

 // menghilangkan semua class di atas ketika document di klik
 document.addEventListener("click", e => {
  if (!e.target.closest(".navbar-item")) {
   hamburgerMenu.classList.remove("hamburger-menu-aktif");
   navbarMenu.classList.remove("navbar-menu-aktif");
   navbarItems.forEach(e => {
    e.classList.remove("navbar-menu-click");
    if (!temaMenu.classList.contains("display-none")) {
     temaMenu.classList.add("display-none");
    }
   });
   temaButton.classList.remove("tema-tampil-aktif");
  }
 });

 // menambahkan fungsi saat scroll
 window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const navbar = header.offsetTop;

  const teksBrand = document.querySelector(".teks-brand");
  const logoBrand = document.querySelector(".logo-brand");

  if (window.pageYOffset > navbar) {
   header.classList.add("window-scroll");
   teksBrand.classList.add("display-none");
   logoBrand.classList.remove("display-none");
  } else {
   header.classList.remove("window-scroll");
   teksBrand.classList.remove("display-none");
   logoBrand.classList.add("display-none");
  }
 });
}

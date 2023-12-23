import { button } from "./button.js";
import { countdown } from "./countdown.js";
import { form } from "./form.js";
import { navbar } from "./navbar.js";
import { typing } from "./typing.js";

window.addEventListener("load", () => {
 // jalankan semua kode js setelah HTML selesai di muat
 countdown();
 navbar();
 button();
 form();
 typing();
 // menampilkan website
 document.querySelector("header").classList.remove("display-none");
 document.querySelector("main").classList.remove("display-none");
 document.querySelector("footer").classList.remove("display-none");
 document.querySelector(".loading-page").classList.add("display-none");
});

const userKeys = Object.keys(localStorage);
// memberikan id kepada user
if (!userKeys.includes("id") && window.performance.navigation.type === 1) {
 const idUser = function () {
  let id = "";
  for (let i = 0; i < 10; i++) {
   const randomDigit = String(Math.floor(Math.random() * 10));
   id += randomDigit;
  }
  return id;
 };
 const id = idUser();
 localStorage.setItem("id", id);
} else {
 console.log(
  `Nama: ${localStorage.getItem("nama")} \nId: ${localStorage.getItem(
   "id"
  )} \nEmail: ${localStorage.getItem("email")}`
 );
}

import { button } from "../components/buttons/buttons.js";
import { countdown } from "../components/countdown/countdown.js";
import { mode } from "../components/darkmode/darkmode.js";
import { formSubmit } from "../components/form/form.js";
import { navbar } from "../components/navbar/navbar.js";
import { typing } from "../components/typing/typing.js";

window.addEventListener("load", function () {
 document.body.style.visibility = "visible";
 button();
 countdown();
 mode();
 formSubmit();
 navbar();
 typing();
});

const userKeys = Object.keys(localStorage);

if (!localStorage.getItem("id")) {
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
 console.log(id);
} else {
 console.log(`Nama: ${localStorage.getItem("nama")} \nId: ${localStorage.getItem("id")} \nEmail: ${localStorage.getItem("email")}`);
}

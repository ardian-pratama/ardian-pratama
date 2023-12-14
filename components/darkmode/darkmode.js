export function mode() {
 // function applyTheme(theme) {
//   console.log(`Tema diubah menjadi: ${theme}`);
//   
//   document.body.classList.remove("dark-theme", "light-theme");
//   document.body.classList.add(`${theme}-theme`);
//  }
// 
//  function updateLocalStorageTheme(theme) {
//   localStorage.setItem("theme", theme);
//  }
// 
//  function checkAndApplyStoredTheme() {
//   const storedTheme = localStorage.getItem("theme");
// 
//   if (storedTheme) {
//    applyTheme(storedTheme);
//   }
//  }
// 
//  window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addListener(handleColorSchemeChange);
// 
//  function handleColorSchemeChange(e) {
//   const newTheme = e.matches ? "dark" : "light";
//   updateLocalStorageTheme(newTheme);
//   applyTheme(newTheme);
//  }
// 
//  checkAndApplyStoredTheme();
// 
//  const changeThemeButton = document.querySelector(".tampilkan-profil");
// 
//  if (changeThemeButton) {
//   changeThemeButton.addEventListener("click", handleChangeThemeButtonClick);
//  }
// 
//  function handleChangeThemeButtonClick() {
//   const newTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
//   updateLocalStorageTheme(newTheme);
//   applyTheme(newTheme);
//  }
}

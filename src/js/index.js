const changeThemeBtn = document.getElementById("change-theme");
const body = document.querySelector("body");
const changeImageTheme = document.querySelector(".img-btn");

changeThemeBtn.addEventListener("click", () => {
  const darkModeOn = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (darkModeOn) {
    changeImageTheme.setAttribute("src", "./src/img/sun.png");
  } else {
    changeImageTheme.setAttribute("src", "./src/img/moon.png");
  }
});

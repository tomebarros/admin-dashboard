// dark mode
const themeToggleBtn = document.querySelector("#theme");
const theme = localStorage.getItem("theme");

if (theme) {
  document.body.classList.add(theme);
  themeToggleBtn.classList.remove("fa-moon");
  themeToggleBtn.classList.add("fa-sun");
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    themeToggleBtn.classList.remove("fa-moon");
    themeToggleBtn.classList.add("fa-sun");
  } else {
    localStorage.removeItem("theme");
    themeToggleBtn.classList.remove("fa-sun");
    themeToggleBtn.classList.add("fa-moon");
  }
});

// detail Profile
const dropDown = document.querySelector("#dropdown");
const profile = document.querySelector(".detail-profile");
dropDown.addEventListener("click", function () {
  profile.classList.toggle("active");
  dropDown.classList.toggle("fa-rotate-180");
});

// navbar
const toggle = document.querySelector("#toggleNavbar");
const navbar = document.querySelector(".navbar");
toggle.addEventListener("click", function () {
  navbar.classList.toggle("show");
});

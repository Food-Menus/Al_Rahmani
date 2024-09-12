const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

fetch('Data_Home_Page.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('moving_line').textContent = data.moving_line;
    document.getElementById('about').textContent = data.about;
    document.getElementById('address1').textContent = data.address1;
    document.getElementById('address2').textContent = data.address2;
    document.getElementById('address3').textContent = data.address3;
    document.getElementById('address4').textContent = data.address4;
    document.getElementById('address5').textContent = data.address5;
    document.getElementById('address6').textContent = data.address6;
    document.getElementById('address7').textContent = data.address7;
    document.getElementById('mobile_phone_1').textContent = data.mobile_phone_1;
    document.getElementById('mobile_phone_2').textContent = data.mobile_phone_2;
    document.getElementById('mobile_phone_3').textContent = data.mobile_phone_3;
    document.getElementById('mobile_phone_4').textContent = data.mobile_phone_4;
  });


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});











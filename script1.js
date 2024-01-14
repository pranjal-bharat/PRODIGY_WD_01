

var nav = document.querySelector("nav");

var sticky = nav.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }
window.onscroll = function () {
  stickyNavbar();
  };

 

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const navLogo = document.querySelector(".nav__logo");
  const navLinks = document.querySelectorAll(".nav__links .link");
  const navBtn = document.querySelector(".btn");

 
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {     
      nav.classList.add("sticky");
      navLogo.style.color = "#333";
      navLinks.forEach(link => (link.style.color = "#333"));
      navBtn.style.marginLeft = "20px";
    } 
    else {
      nav.classList.remove("sticky");
      navLogo.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-dark');
      navLinks.forEach(link => (link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-dark')));
      navBtn.style.marginLeft = "0";
    }
  });

 
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", function () {
       
      link.style.backgroundColor = " rgb(245, 245, 245)";
      link.style.color = "#fff";
    });

    link.addEventListener("mouseleave", function () {
      link.style.backgroundColor = "transparent";
      link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-dark');
    });
  });
});



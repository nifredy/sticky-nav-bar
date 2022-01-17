const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

const burger = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const menuHover = document.querySelectorAll(".hov");
const container = document.querySelector(".container");
const navLink = document.querySelectorAll(".link");
const visLinks = document.querySelectorAll(".vis-links");
const mouseCursor = document.querySelector(".cursor");


// ================ CURSOR ===============//

window.addEventListener("mousemove", cursor);
function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

visLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

menuHover.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

navLink.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});



// ================ NAVBAR RIGHT TEXT EFFECTS ===============//

burger.addEventListener("click", () => {
    tl.to(".link", { y: "0%", duration: 0.5, delay: 0.8 });
  });
  
  close.addEventListener("click", () => {
    tl.to(".link", { y: "100%", duration: 0.5 });
  });
  
  navLink.forEach((n) =>
    n.addEventListener("click", () => {
      tl.to(".link", { y: "100%", duration: 0.5 });
    })
  );
  
  function linkAction() {
    const container = document.querySelector(".container");
    container.classList.remove("active");
  }
  
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  // ================ NAVBAR VISIBLE ===============//
  
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY);
  });
  
  var menu = document.getElementById("menu");
  function closemenu() {
    menu.style.left = "100%";
  }
  function openmenu() {
    menu.style.left = "0px";
  }
  
  burger.addEventListener("click", () => {
    container.classList.add("active");
  });
  close.addEventListener("click", () => {
    container.classList.remove("active");
  });
  
  // ========== REVEAL TEXT EFFECT ==========//
  window.addEventListener("scroll", reveal);
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
  
      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("rev");
      } else {
        reveals[i].classList.remove("rev");
      }
    }
  }
  // ================ COLOR CHANGE ON HOVER ===============//

$(document).ready(function () {
    $("ul li").on({
      mouseenter: function () {
        var color = $(this).attr("data-color");
        $("nav").css("background", color);
      },
      mouseleave: function () {
        $("nav").css("background", "#2a3c42");
      },
    });
  });
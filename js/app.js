const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

const burger = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const menuHover = document.querySelectorAll(".hov");
const container = document.querySelector(".container");
const navLink = document.querySelectorAll(".link");
const visLinks = document.querySelectorAll(".vis-links");
const mouseCursor = document.querySelector(".cursor");
const bg = document.getElementById("home");
const title = document.getElementById("title");
const sub = document.getElementById("sub");
const og = document.getElementById("bg-og");

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

// // ================ scroll smoothly EFFECTS ===============//

// const body = document.body,
// scrollWrap = document.getElementsByClassName("container")[0],
// height = scrollWrap.getBoundingClientRect().height - 1,
// speed = 0.04;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;

//   var scroll = "translateY(-" + offset + "px) translateZ(0)";
//   scrollWrap.style.transform = scroll;

//   callScroll = requestAnimationFrame(smoothScroll);
// }

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

// ================ SCROLL TEXT EFFECT ===============//

window.addEventListener("scroll", function () {
  const text = document.getElementById("silogan");
  var value = window.scrollY;
  bg.style.top = value * 0.4 + "px";
});

// ================ SCROLL UP ===============//

// function scrollUp() {
//   const scrollUp = document.getElementById("scroll-up");

//   if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
//   else scrollUp.classList.remove("show-scroll");
// }
// window.addEventListener("scroll", scrollUp);

const text = document.querySelector(".text");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style = "transform:rotate(${i * 18}deg)">${char}</span>`
  )
  .join("");

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

$(function () {
  "use strict";
  var view = $(window).height();
  $(".part")
    .height(view)
    .scrollie({
      scrolloffset: -50,
      scrollingInView: function (elem) {
        var bgColor = elem.data("background");
        $("body").css("background-color", bgColor);
      },
    });
});

// // ================ POSTS-IMAGE-MOBILE ===============//

// let sliderWrap = document.querySelector(".slider-wrap");
// let slider = document.querySelector(".slider");
// let clonesWidth;
// let sliderWidth;
// let clones = [];
// let disableScroll = false;
// let scrollPos;

// let items = [...document.querySelectorAll(".slider-item")];
// let images = [...document.querySelectorAll(".img-div")];

// items.forEach((item) => {
//   let clone = item.cloneNode(true);
//   clone.classList.add("clone");
//   slider.appendChild(clone);
//   clones.push(clone);
// });

// function getCloneWidth() {
//   let width = 0;
//   clones.forEach((clone) => {
//     width += clone.offsetWidth;
//   });

//   return width;
// }

// function getScrollPos() {
//   return window.scrollY;
// }

// function scrollUpdate() {
//   if (window.innerWidth > 760) {
//     sliderWrap.style.overflow = 'hidden'
//     scrollPos = getScrollPos();
//     if (clonesWidth + scrollPos >= sliderWidth) {
//       window.scrollTo({ top: 1 });
//     } else if (scrollPos <= 0) {
//       window.scrollTo({ top: sliderWidth - clonesWidth - 1 });
//     }

//     slider.style.transform = `translateX(${-window.scrollY}px)`;

//     requestAnimationFrame(scrollUpdate);
//   }else{
//     sliderWrap.style.overflow = 'scroll'
//   }
// }

// window.addEventListener('resize', onLoad)

// function onLoad() {
//   document.body.style.height = `${sliderWidth}px`;
//   window.scrollTo({ top: 1 });
//   scrollUpdate();
// }

// function calculateDimensions() {
//   sliderWidth = slider.getBoundingClientRect().width;
//   clonesWidth = getCloneWidth();
// }

// onLoad();

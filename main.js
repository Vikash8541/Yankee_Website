// Initi AOS
AOS.init({
  duration: 1000,
  easing: "ease-in-out-back"
});

// jQuery counterUp
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 1000
});

// Progress Bar Line
(function ($) {
  "use strict";  
  
  // Skills
  $('.prog-section-part').waypoint(function () {
      $('.prg-max .prg-bar').each(function () {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
  }, {offset: '80%'});
  
})(jQuery);

// Multi page nav active
let currentlocation = window.location.pathname;
let nav = document.querySelectorAll("#nav-list .link-nav");
nav.forEach(link => {
  if (link.href.includes(`${currentlocation}`)) {
    link.classList.add("active");
  }
})

// Header Scroll Effect
let navheader = document.querySelector("header");
window.addEventListener("scroll", () => {
  let pos = window.scrollY > 100;
  navheader.classList.toggle("sticky", pos);
});

// Toggle Effect
const header = document.getElementById("header");
const toggle = document.getElementById("toggle");
const navloc = document.getElementById("nav-list");
const contact = document.getElementById("contact-info");

document.addEventListener("click",function(e){
    if(e.target.id !=="header" && e.target.id !=="toggle" && e.target.class !=="nav-list"){
        toggle.classList.remove("active");
        navloc.classList.remove("active");
        contact.classList.remove("active");
        header.classList.remove("active");
      }
    });
    
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      navloc.classList.toggle("active");
      contact.classList.toggle("active");
      header.classList.toggle("active");
})

// Scroll to Top Button
let scrolltop = document.getElementById("scroll-up-btn");
window.addEventListener("scroll",function(){
  scrolltop.classList.toggle("active", window.scrollY > 500);
});

// Subdrop DownMenu

// let dropdown = document.querySelector(".down-arrow");
// let subdrop = document.querySelector(".home-drop-down");
// dropdown.addEventListener("click",()=>{
//   dropdown.classList.toggle("view");
//   subdrop.classList.toggle("view");
// })


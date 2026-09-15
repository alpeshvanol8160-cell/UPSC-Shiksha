// ================================
// UPSC SHIKSHA - DAY 1
// ================================


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

  navMenu.classList.toggle("active");

});


// CLOSE MENU AFTER CLICK

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

  link.addEventListener("click", function() {

    navMenu.classList.remove("active");

  });

});


// FREE TEST BUTTON

const testBtn = document.getElementById("testBtn");

testBtn.addEventListener("click", function() {

  alert(
    "🚀 Free Test System Coming Soon!\n\n" +
    "Day 2-3 में हम real UPSC MCQ test system बनाएँगे."
  );

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  alert(
    "✅ Thank you!\n\n" +
    "Your message has been received."
  );

  contactForm.reset();

});


// BACK TO TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

  if (window.scrollY > 400) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});


topBtn.addEventListener("click", function() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// SIMPLE SCROLL REVEAL

const cards = document.querySelectorAll(
  ".feature-card, .subject-card, .stat-card, .test-box"
);

const observer = new IntersectionObserver(
  function(entries) {

    entries.forEach(function(entry) {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.15
  }
);


cards.forEach(function(card) {

  card.style.opacity = "0";
  card.style.transform = "translateY(25px)";
  card.style.transition = "0.6s ease";

  observer.observe(card);

});

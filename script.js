// =====================================
// UPSC SHIKSHA - COMMON SCRIPT
// =====================================


// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

  });


  // CLOSE MENU AFTER CLICK

  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

      navMenu.classList.remove("active");

    });

  });

}


// ================================
// FREE TEST BUTTON
// ================================

const testBtn = document.getElementById("testBtn");

if (testBtn) {

  testBtn.addEventListener("click", function() {

    alert(
      "🚀 Free Test System Coming Soon!\n\n" +
      "हम जल्द ही Real UPSC MCQ Test System बनाएँगे."
    );

  });

}


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
      "✅ Thank you!\n\n" +
      "Your message has been received."
    );

    contactForm.reset();

  });

}


// ================================
// BACK TO TOP
// ================================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

  // Initially hidden

  topBtn.style.display = "none";


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

}


// ================================
// SIMPLE SCROLL REVEAL
// ================================

const cards = document.querySelectorAll(
  ".feature-card, .subject-card, .stat-card, .test-box"
);

if (cards.length > 0 && "IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    function(entries) {

      entries.forEach(function(entry) {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          observer.unobserve(entry.target);

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

}


// ================================
// UPSC SYLLABUS TABS
// ================================

const syllabusTabs =
  document.querySelectorAll(".syllabus-tab");

const syllabusContents =
  document.querySelectorAll(".syllabus-content");


if (syllabusTabs.length > 0) {

  syllabusTabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

      const target =
        tab.getAttribute("data-tab");


      // Remove active from all tabs

      syllabusTabs.forEach(function(item) {

        item.classList.remove("active");

      });


      // Hide all syllabus sections

      syllabusContents.forEach(function(content) {

        content.classList.remove("active");

      });


      // Activate clicked tab

      tab.classList.add("active");


      // Show selected section

      const selectedContent =
        document.getElementById(target);


      if (selectedContent) {

        selectedContent.classList.add("active");

      }

    });

  });

}


// ================================
// END
// ================================

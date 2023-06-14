//-------------PRELOADER
const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

console.log(window.innerWidth);
window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
});
//-------------DROPDOWN MENU

const navIcon = document.getElementById("navIcon");
const dropdown = document.getElementById("dropdown");
const navLink = document.getElementById("navLink");

function openDropdown() {
  navIcon.classList.toggle("open");
  dropdown.classList.toggle("open");
  dropdownMenu = true;
}

function closeDropdown() {
  navIcon.classList.remove("open");
  dropdown.classList.remove("open");
  dropdownMenu = false;
}

navIcon.addEventListener("click", function () {
  openDropdown();
});

dropdown.addEventListener("click", closeDropdown);

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 90) {
    closeDropdown();
  }
});

//---------------SERVICES ANIMATION

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 50;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 0;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// PARALLAX

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 0 && window.innerWidth > 768) {
    document.getElementById("scrollTarget").style.transform =
      "translateX(" + (scrolled - 500) * 0.8 + "px)";
  } else {
    document.getElementById("scrollTarget").style.transform = "translateX(0px)";
  }
});

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 3290) {
    document.getElementById("services").style.backgroundSize =
      100 + (scrolled - 3290) * 0.5 + "%";
  }
});

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 200) {
    document.getElementById("scrollTarget3").style.transform =
      "translateY(0px)";
    document.getElementById("scrollTarget5").style.transform =
      "translateY(0px)";
  } else {
    document.getElementById("scrollTarget3").style.transform =
      "translateX(" + (scrolled - 200) * -1 + "px)";
    document.getElementById("scrollTarget5").style.transform =
      "translateX(" + (scrolled - 200) * -1 + "px)";
  }
});

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 3900) {
    document.getElementById("services2").style.transform =
      "translateX(" + (scrolled - 3900) * 1.5 + "px)";
  } else {
    document.getElementById("services2").style.transform = "translateX(0px)";
  }
});

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 4000) {
    document.getElementById("clients-text").style.transform = "translateY(0px)";
  } else {
    document.getElementById("clients-text").style.transform =
      "translateY(" + (scrolled - 4000) * -1 + "px)";
  }
});
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 4330 && window.innerWidth > 768) {
    document.getElementById("client-logos").style.transform = "translateY(0px)";
  } else if (window.innerWidth > 768) {
    document.getElementById("client-logos").style.transform =
      "translateY(" + (scrolled - 4330) * -1 + "px)";
  }
});

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  console.log(scrolled)
  if (scrolled > 4200 && window.innerWidth < 768) {
    document.getElementById("client-logos").style.transform = "translateY(0px)";
  } else if (window.innerWidth < 768) {
    document.getElementById("client-logos").style.transform =
      "translateY(" + (scrolled - 4200) * -1 + "px)";
  }
});
// ABOUT SECTION SUBTITLE 2 PARALLAX

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 0 && scrolled < 1900) {
    document.getElementById("we-create").classList.remove("subtitles1");
    document.getElementById("we-create").classList.add("subtitles-selected");
    document.getElementById("about2El").innerHTML =
      "<b>We develop high end content for our most exclusive clients, turning brands into digital storytellers.</b>";
  } else {
    document.getElementById("we-create").classList.remove("subtitles-selected");
    document.getElementById("we-create").classList.add("subtitles1");
  }
});

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 1900 && scrolled < 2500) {
    document.getElementById("we-manage").classList.remove("subtitles2");
    document.getElementById("we-manage").classList.add("subtitles-selected");
    document.getElementById("about2El").innerHTML =
      "<b>Representing top digital talent with far-reaching online audiences.</b>";
  } else {
    document.getElementById("we-manage").classList.remove("subtitles-selected");
    document.getElementById("we-manage").classList.add("subtitles2");
  }
});

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 2500) {
    document.getElementById("we-empower").classList.remove("subtitles3");
    document.getElementById("we-empower").classList.add("subtitles-selected");
    document.getElementById("about2El").innerHTML =
      "<b>Where creative strategy meets experience-driven production.</b>";
  } else {
    document
      .getElementById("we-empower")
      .classList.remove("subtitles-selected");
    document.getElementById("we-empower").classList.add("subtitles3");
  }
});

// NUMBER COUNTERS

function animateNumber(callback, from, to, duration) {
  let start = null,
    animate = (timestamp) => {
      start = start || timestamp;
      let progress = Math.min((timestamp - start) / duration, 1);
      callback(progress * (to - from) + from);
      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };
  window.requestAnimationFrame(animate);
}

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled <= 3161) {
    counter();
    counter2();
    counter3();
    counter4();
  } else {
    return;
  }
});
function counter() {
  animateNumber(
    (value) => {
      document.getElementById("numberEl").textContent = Math.floor(value) + "%";
    },
    0,
    92,
    1000
  );
}

function counter2() {
  animateNumber(
    (value) => {
      document.getElementById("numberEl2").textContent =
        Math.floor(value) + "X";
    },
    0,
    11,
    1000
  );
}
function counter3() {
  animateNumber(
    (value) => {
      document.getElementById("numberEl3").textContent =
        Math.floor(value) + "M";
    },
    0,
    255,
    1000
  );
}
function counter4() {
  animateNumber(
    (value) => {
      document.getElementById("numberEl4").textContent =
        Math.floor(value) + "%";
    },
    0,
    94,
    1000
  );
}

//----------------GALLERY-------------//
const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

//carrusel.addEventListener("mouseover", () => {
//  stop();
//});

//carrusel.addEventListener("mouseout", () => {
// start();
//});

start();

//----------------LINKS SCROLL-------------//
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

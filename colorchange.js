window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 4130 && window.innerWidth > 768) {
    document.getElementById("clients").style.backgroundColor = "#f4364c";
    document.getElementById("services-section2").style.backgroundColor =
      "#f4364c";
  } else if (window.innerWidth > 768) {
    document.getElementById("clients").style.backgroundColor = "black";
    document.getElementById("services-section2").style.backgroundColor =
      "black";
  }
});

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  if (scrolled > 4040 && window.innerWidth < 768) {
    document.getElementById("clients").style.backgroundColor = "#f4364c";
    document.getElementById("services-section2").style.backgroundColor =
      "#f4364c";
  } else if (window.innerWidth < 768) {
    document.getElementById("clients").style.backgroundColor = "black";
    document.getElementById("services-section2").style.backgroundColor =
      "black";
  }
});

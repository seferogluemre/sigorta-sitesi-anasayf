document.getElementById("burgerMenu").addEventListener("click", function () {
  document.body.classList.toggle("open");
  document.getElementById("mobileNav").style.zIndex = 1;
});

document.getElementById("closebtn").addEventListener("click", function () {
  document.body.classList.remove("open");
  document.getElementById("subSidebar").style.width = "30";
  document.getElementById("overlay").style.visibility = "hidden";
  document.getElementById("overlay").style.opacity = "1";
});

document.getElementById("overlay").addEventListener("click", function () {
  document.body.classList.remove("open");
  document.getElementById("subSidebar").style.width = "0";
  document.getElementById("overlay").style.visibility = "hidden";
  document.getElementById("overlay").style.opacity = "0";
});

document
  .getElementById("hizmetlerLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Linkin varsayılan davranışını engeller
    document.getElementById("subSidebar").style.width = "250px";
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = "1";
  });

document.getElementById("subClosebtn").addEventListener("click", function () {
  document.getElementById("subSidebar").style.width = "0";
  document.getElementById("overlay").style.visibility = "hidden";
  document.getElementById("overlay").style.opacity = "0";
});

document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".nav-item.dropdown");
  var dropdownMenu = document.querySelector(".dropdown-menu");
  var timeout;

  dropdown.addEventListener("mouseover", function () {
    clearTimeout(timeout);
    dropdownMenu.style.display = "block";
  });

  dropdown.addEventListener("mouseout", function (e) {
    timeout = setTimeout(function () {
      if (!dropdownMenu.contains(e.relatedTarget)) {
        dropdownMenu.style.display = "none";
      }
    }, 1000); // 2 saniye (2000 milisaniye) gecikme
  });

  dropdownMenu.addEventListener("mouseover", function () {
    clearTimeout(timeout);
    dropdownMenu.style.display = "block";
  });

  dropdownMenu.addEventListener("mouseout", function (e) {
    timeout = setTimeout(function () {
      if (!dropdown.contains(e.relatedTarget)) {
        dropdownMenu.style.display = "none";
      }
    }, 1000); // 2 saniye (2000 milisaniye) gecikme
  });
});

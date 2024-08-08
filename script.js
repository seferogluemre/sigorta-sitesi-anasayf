document.getElementById("burgerMenu").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("show-sidebar");
  document.getElementById("burgerMenu").style.display = "none"; // Hide burger menu
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("show-sidebar");
  document.getElementById("burgerMenu").style.display = "block"; // Show burger menu
});

document
  .getElementById("hizmetlerLink")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("sidebar").classList.remove("show-sidebar");
    document.getElementById("subSidebar").classList.add("show-sub-sidebar");
    document.getElementById("burgerMenu").style.display = "none"; // Hide burger menu
  });

document.getElementById("backBtn").addEventListener("click", function () {
  document.getElementById("subSidebar").classList.remove("show-sub-sidebar");
  document.getElementById("sidebar").classList.add("show-sidebar");
  document.getElementById("burgerMenu").style.display = "none"; // Keep burger menu hidden
});

// Drop menü
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

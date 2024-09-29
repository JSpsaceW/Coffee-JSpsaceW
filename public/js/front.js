document.addEventListener("DOMContentLoaded", () => {
  const viewMoreBtn = document.getElementById("view-more-btn");
  const hiddenItems = document.querySelectorAll(".hidden");

  viewMoreBtn.addEventListener("click", () => {
    hiddenItems.forEach((item) => {
      item.classList.toggle("hidden");
    });

    if (viewMoreBtn.textContent === "Voir tout") {
      viewMoreBtn.textContent = "Voir moins";
    } else {
      viewMoreBtn.textContent = "Voir tout";
    }
  });
});


// Gestion du menu burger
const menuBurger = document.getElementById("menu-burger");
const headerNavLinks = document.querySelector(".header__part-link");
const title = document.querySelector(".header__part-logo-title");

menuBurger.addEventListener("click", () => {
  headerNavLinks.classList.toggle("menu-active");

  if (headerNavLinks.classList.contains("menu-active")) {
    title.classList.add("header__part-logo-title-hidden");
  } else {
    title.classList.remove("header__part-logo-title-hidden");
  }
});


//gestion du carousel
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = Array.from(carousel.querySelectorAll(".carousel__item"));
  let index = 0;
  const totalItems = items.length;

  function showNextItem() {
    items.forEach((item) => {
      item.style.display = "none";
    });

    items[index].style.display = "block";

    index = (index + 1) % totalItems;
  }

  items.forEach((item) => {
    item.style.display = "none";
  });
  items[0].style.display = "block";

  setInterval(showNextItem, 3000);
});

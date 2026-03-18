document.documentElement.classList.add("js-ready");

document.querySelectorAll(".menu-toggle").forEach((button) => {
  const menuId = button.getAttribute("aria-controls");
  const menu = document.getElementById(menuId);

  if (!menu) {
    return;
  }

  const closeMenu = () => {
    menu.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    menu.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
  };

  button.addEventListener("click", () => {
    const isOpen = menu.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 960) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth > 960) {
      return;
    }

    if (!menu.contains(event.target) && !button.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
});

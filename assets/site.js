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

  button.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
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
});

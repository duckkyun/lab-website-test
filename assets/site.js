document.documentElement.classList.add("js-ready");

const createPublicationListItem = (publication) => {
  const item = document.createElement("li");

  const authors = document.createElement("b");
  authors.textContent = publication.authors;
  item.append(authors, " ");

  const titleLink = document.createElement("a");
  titleLink.href = `https://doi.org/${publication.doi}`;
  titleLink.target = "_blank";
  titleLink.rel = "noreferrer";
  titleLink.textContent = publication.title;
  item.append(titleLink, ". ");

  const journal = document.createElement("i");
  journal.textContent = publication.journal;
  item.append(journal, `. ${publication.year}.`);

  return item;
};

const renderPublicationLists = () => {
  const publications = Array.isArray(window.ryuLabPublications) ? window.ryuLabPublications : [];

  if (!publications.length) {
    return;
  }

  document.querySelectorAll("[data-publications-list]").forEach((list) => {
    const limit = Number.parseInt(list.dataset.publicationsLimit ?? "", 10);
    const visiblePublications = Number.isNaN(limit) ? publications : publications.slice(0, limit);

    list.replaceChildren(...visiblePublications.map(createPublicationListItem));
  });
};

renderPublicationLists();

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

(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
      mobileMenuLinks: document.querySelectorAll("[data-mobile-menu-link]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      document.body.classList.toggle('no-scroll')

      refs.openMenuBtn.classList.toggle("burger-visible");
      refs.openMenuBtn.classList.toggle("burger-hidden");
      refs.closeMenuBtn.classList.toggle("close-visible");
      refs.closeMenuBtn.classList.toggle("close-hidden");
    }

    refs.mobileMenuLinks.forEach(link => {
        link.addEventListener("click", () => {
          // Закрийте меню
          refs.menu.classList.add("is-hidden");
          document.body.classList.remove('no-scroll');
          refs.openMenuBtn.classList.add("burger-visible");
          refs.openMenuBtn.classList.remove("burger-hidden");
          refs.closeMenuBtn.classList.add("close-hidden");
          refs.closeMenuBtn.classList.remove("close-visible");
        });
      });
  })();
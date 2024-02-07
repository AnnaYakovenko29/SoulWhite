window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var scrollPosition = window.scrollY;
  
    // Задайте висоту на якій фон має з'явитися
    var threshold = 100;
  
    if (scrollPosition > threshold) {
      header.style.backgroundColor = "var(--theme-color-5)"; /* Колір фону хедера при прокрутці */
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0)"; /* Прозорий фон хедера коли сторінка не прокручена */
    }
  });
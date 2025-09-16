document.addEventListener("DOMContentLoaded", () => {
  const filterRadios = document.querySelectorAll("input[name='category']");
  const items = document.querySelectorAll(".language-item");

  filterRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      const category = radio.value;

      items.forEach(item => {
        if (category === "all") {
          // Todos iluminados
          item.classList.remove("dimmed");
        } else {
          // Solo los de la categoría elegida iluminados
          const isMatch = item.dataset.category === category;
          if (isMatch) {
            item.classList.remove("dimmed");
          } else {
            item.classList.add("dimmed");
          }
        }
      });
    });
  });
});

const buttons = document.querySelectorAll("#tools-tech .filter-buttons button");
const cards = document.querySelectorAll("#tools-tech .skill-card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Quitar clase activa de todos
    buttons.forEach(btn => btn.classList.remove("active"));
    // Activar el botón actual
    button.classList.add("active");

    const category = button.dataset.category;

    // Filtrar tarjetas
    cards.forEach(card => {
      if (category === "all" || card.dataset.category.includes(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

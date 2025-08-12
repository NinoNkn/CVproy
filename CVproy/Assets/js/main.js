document.addEventListener("DOMContentLoaded", () => {
  const languages = [
    // Contenido...
    {
    name: "HTML",
    category: "frontend",
    logo: "assets/images/html.png",
    pdf: "pdfs/html.pdf"
  },
  {
    name: "CSS",
    category: "frontend",
    logo: "assets/images/css.png",
    pdf: "pdfs/css.pdf"
  },
  {
    name: "JavaScript",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    pdf: "pdfs/javascript.pdf"
  },
  {
    name: "Python",
    category: "backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    pdf: "pdfs/python.pdf"
  },
  {
    name: "Node.js",
    category: "backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    pdf: "pdfs/nodejs.pdf"
  }
 ];


  const grid = document.getElementById("languagesGrid");

  function renderLanguages(filter) {
    grid.innerHTML = "";

    languages.forEach(lang => {
      const isActive = filter === "all" || lang.category === filter;

      const card = document.createElement("div");
      card.className = "language-card" + (isActive ? " active" : "");
      card.innerHTML = `
        <img src="${lang.logo}" alt="${lang.name} logo">
        <span>${lang.name}</span>
      `;

      if (isActive) {
        card.addEventListener("click", () => {
          window.open(lang.pdf, "_blank");
        });
      }

      grid.appendChild(card);
    });
  }

  document.querySelectorAll("input[name='category']").forEach(radio => {
    radio.addEventListener("change", e => {
      renderLanguages(e.target.value);
    });
  });

  renderLanguages("all");
});

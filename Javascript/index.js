const cards = document.querySelectorAll(".active");
const grid = document.querySelector(".grid");
const button = document.querySelector(".close");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    //
    //Button Event
    setTimeout(() => {
      button.classList.add("active-close");
    }, 400);
    document.body.classList.add("pointer-event");
    button.classList.add("except-pointer-event");
    document.body.style.overflow = " hidden";
    //
    //
    const titre = document.querySelector(".titre");
    setTimeout(() => {
      titre.classList.add("active-titre");
    }, 400);

    const fard = document.querySelector("h1");
    setTimeout(() => {
      fard.classList.add("active-h1");
    }, 400);

    //
    //Carte séléctionnée
    card.style.transition = "1.1s ease-in-out";
    card.style.transform = "scale(1.1)";
    card.setAttribute("act", "");
    //
    // Contenu séléctionné
    const contenus = document.querySelectorAll(".contenu");
    contenus.forEach((contenu) => {
      if (contenu.id === card.dataset.target) {
        contenu.style.display = "block";

        const paras = contenu.querySelectorAll(".para");
        paras.forEach((para) => {
          setTimeout(() => {
            para.classList.add("active-para");
          }, 400);
        });

        const titres = contenu.querySelectorAll("h2");
        titres.forEach((titre) => {
          setTimeout(() => {
            titre.classList.add("active-h2");
          }, 400);
        });

        const paragraphes = contenu.querySelectorAll("p");
        paragraphes.forEach((paragraphe) => {
          setTimeout(() => {
            paragraphe.classList.add("active-p");
          }, 400);
        });
      } else {
        contenu.style.display = "none";
      }
    });

    //Cartes non séléctionnées
    const otherCards = [...cards].filter((othercard) => othercard !== card);
    otherCards.forEach(() => {
      for (let i = 0; i < otherCards.length; i++) {
        setTimeout(function () {
          otherCards[i].style.transform = "scale(0.8)";
          otherCards[i].style.transition = "0.5s ease-in-out 0.1s";
          otherCards[i].style.zIndex = "-1";
        }, i * 55);
      }
    });

    // Calculez la position et la taille de la carte sélectionnée
    const cardRect = card.getBoundingClientRect();
    const cardParentRect = card.offsetParent.getBoundingClientRect();
    const cardTop = cardRect.top - cardParentRect.top + window.scrollY;
    const cardLeft = cardRect.left - cardParentRect.left + window.scrollX;
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;

    // Calculez la position du centre de la carte
    const cardCenterX = cardLeft + cardWidth / 2;
    const cardCenterY = cardTop + cardHeight / 2;

    // Calculez la position du centre de l'écran
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenCenterX = screenWidth / 2;
    const screenCenterY = screenHeight / 2;

    // Calculez la distance entre la carte et le centre de l'écran
    const deltaX = screenCenterX - cardCenterX;
    const deltaY = screenCenterY - cardCenterY;

    // Ajoutez la classe "zoomed" à la grille et appliquez la transformation de zoom
    grid.style.transition =
      "transform 1.3s ease, transform-origin 0.9s ease-in-out";
    grid.style.transformOrigin = `${cardCenterX}px ${cardCenterY}px`;
    grid.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(3)`;
  });
});

button.addEventListener("click", () => {
  // Remove the "active-close" class from the button
  button.classList.remove("active-close");
  const titre = document.querySelector(".titre");
  titre.classList.remove("active-titre");
  const fard = document.querySelector("h1");
  setTimeout(() => {
    fard.classList.remove("active-h1");
  }, 500);

  // Remove the "except-pointer-event" class from the button and the "pointer-event" class from the body
  button.classList.remove("except-pointer-event");
  setTimeout(() => {
    document.body.classList.remove("pointer-event");
  }, 700);

  // Loop through all the cards and remove the "act" attribute, reset their transform and transition properties
  cards.forEach((card) => {
    card.removeAttribute("act");
    card.style.transform = "scale(1)";
    card.style.transition = "none";
    card.style.zIndex = "auto";
  });

  // Hide all the content sections
  const contenus = document.querySelectorAll(".contenu");
  contenus.forEach((contenu) => {
    contenu.style.display = "none";
  });

  const paras = document.querySelectorAll(".para");
  paras.forEach((para) => {
    para.classList.remove("active-para");
  });

  // Reset the title and paragraph elements' classes to remove the animation
  const titres = document.querySelectorAll(".active-h2");
  titres.forEach((titre) => {
    titre.classList.remove("active-h2");
  });
  const paragraphes = document.querySelectorAll(".active-p");
  paragraphes.forEach((paragraphe) => {
    paragraphe.classList.remove("active-p");
  });

  // Reset the transform and transition properties of all the cards
  cards.forEach((card) => {
    card.style.transform = "scale(1)";
    card.style.transition = "0.7s ease-in-out";
  });

  // Reset the transform and transition properties of the grid
  grid.style.transform = "translate(0, 0) scale(1)";
  grid.style.transformOrigin = "center";
  grid.style.transition = "0.7s ease-in-out";
});

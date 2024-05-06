let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 10000); // Cambia la imagen cada 2 segundos (2000 milisegundos)
}

showSlides();

const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', () => {
    // Aquí puedes agregar la lógica para expandir el search bar
    // cuando se hace clic en el botón.
    
    if (searchInput.style.display == "none"){
      searchInput.style.display = "block"
    }
    else{
      searchInput.style.display = "none"
      searchInput.value = " "
    }
   
  });

const cardData = [
  {
      title: 'Card 1',
      text: 'Contenido de la primera card.',
      link: 'https://www.example.com'
  },
  {
      title: 'Card 2',
      text: 'Contenido de la segunda card.',
      link: 'https://www.example.com'
  },
  {
    title: 'Card 3',
    text: 'Contenido de la segunda card.',
    link: 'https://www.example.com'
}

  // Agrega más objetos de datos aquí
];

// Función para crear una card
function createCard(title, text, link) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const cardContent = `
      <img src="recursos/libro3.jpg" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${text}</p>
          <a href="${link}" class="btn btn-primary">Ir a algún lugar</a>
      </div>
  `;

  cardDiv.innerHTML = cardContent;
  return cardDiv;
}

// Agrega las cards al contenedor
const cardsContainer = document.getElementById('cards-container');
cardData.forEach(card => {
  const newCard = createCard(card.title, card.text, card.link);
  cardsContainer.appendChild(newCard);
});
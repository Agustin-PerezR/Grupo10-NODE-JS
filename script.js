let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'flex';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

prevButton.addEventListener('click', function() {
  console.log("hoola")
  plusSlides(-1);
});

nextButton.addEventListener('click', function() {
  plusSlides(1);
});

showSlides(slideIndex);

// Para iniciar el carrusel automáticamente
function startAutoShow() {
  showSlides(slideIndex += 1);
  setTimeout(startAutoShow, 10000); // Cambia la imagen cada 10 segundos
}

startAutoShow(); // Llama a la función para iniciar el carrusel

const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', () => {
    // Aquí puedes agregar la lógica para expandir el search bar
    // cuando se hace clic en el botón.
    console.log(searchInput.style.display)
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
      title: 'El camino de la Guerrera',
      text: '$15.000',
      link: 'https://www.example.com',
      Portada: 'recursos/portada3.jpg'
  },
  {
      title: 'El color perdido del bosque',
      text: '$9.000',
      link: 'https://www.example.com',
      Portada: 'recursos/portada.jpg'
  },
  {
    title: 'Harry Potter y la piedra filosofal ',
    text: '$20.000',
    link: 'https://www.example.com',
    Portada: 'recursos/portada1.jpg'
}

  // Agrega más objetos de datos aquí
];

// Función para crear una card
function createCard(title, text, link, Portada) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
console.log(title , Portada)
  const cardContent = `
      <img src="${Portada}" class="card-img-top" alt="..." >
      <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${text}</p>
          <a href="${link}" class="btn btn-primary" style="background-color: #000 ; Border-color: #000">Comprar</a>
      </div>
  `;

  cardDiv.innerHTML = cardContent;
  return cardDiv;
}

// Agrega las cards al contenedor
const cardsContainer = document.getElementById('cards-container');
cardData.forEach(card => {
  const newCard = createCard(card.title, card.text, card.link, card.Portada);
  cardsContainer.appendChild(newCard);
});
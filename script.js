const form = document.getElementById('surveyForm');
const rating = document.getElementById('rating');
const ratingValue = document.getElementById('ratingValue');
const result = document.getElementById('result');
const resultText = document.getElementById('resultText');

rating.addEventListener('input', () => {
  ratingValue.textContent = rating.value;
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const nombre = form.nombre.value.trim();
  const edad = form.edad.value;
  const normalmente = form.normalmente.value;
  const plataforma = form.plataforma.value;
  const generos = Array.from(form.genero)
    .filter(input => input.checked)
    .map(input => input.value);
  const juego = form.juego.value.trim();
  const comentarios = form.comentarios.value.trim();
  const puntuacion = rating.value;

  resultText.innerHTML = `
    <strong>${nombre}</strong>, gracias por tu participación.<br>
    Edad: ${edad}<br>
    ¿Qué juegas normalmente?: ${normalmente}<br>
    Plataforma favorita: ${plataforma}<br>
    Géneros preferidos: ${generos.length ? generos.join(', ') : 'No seleccionado'}<br>
    Juego favorito: ${juego}<br>
    Calificación de los videojuegos: ${puntuacion}/10<br>
    Comentarios: ${comentarios ? comentarios : 'Sin comentarios'}
  `;

  result.classList.remove('hidden');
  form.reset();
  ratingValue.textContent = '7';
});

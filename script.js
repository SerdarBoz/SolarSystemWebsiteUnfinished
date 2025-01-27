const planets = document.querySelectorAll('.planet');
const infoBox = document.querySelector('.planet-info');

planets.forEach((planet) => {
  planet.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log(`Clicked on: ${planet.className}`);
    const planetInfo = planet.getAttribute('data-info');
    if (planetInfo) {
      infoBox.textContent = planetInfo;
      infoBox.style.display = 'block';
    }
  });
});

document.body.addEventListener('click', () => {
  infoBox.style.display = 'none';
  planets.forEach(p => p.classList.remove('active'));
});

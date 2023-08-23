const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const cardInner = card.querySelector('.card-inner');
  card.addEventListener('click', () => {
    cardInner.classList.toggle('flipped');
  });
});
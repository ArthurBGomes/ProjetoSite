const cards = document.querySelectorAll('.card');
const selectedText = document.querySelector('.selected p');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    const heroName = card.getAttribute('data-hero');
    selectedText.textContent = `Você escolheu: ${heroName}`;
  });
});

const cards = document.querySelectorAll('.card');
const selectedText = document.querySelector('.selected p');
const confirmBtn = document.getElementById('confirm-btn');
let selectedHero = null;

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedHero = card.getAttribute('data-hero');
    selectedText.textContent = `Você escolheu: ${selectedHero}`;
    confirmBtn.disabled = false;
  });
});

confirmBtn.addEventListener('click', () => {
  if (selectedHero) {
    localStorage.setItem('heroiSelecionado', selectedHero);
    window.location.href = '../Fases/mapa.html';
  }
});


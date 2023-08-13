document.addEventListener("DOMContentLoaded", function() {
  const mysteryButton = document.getElementById('mystery-button');
  const waitText = document.getElementById('wait-text');
  const centeredDiv = document.getElementById('centered-div');
  const moneyButton = document.getElementById('money-button');

  mysteryButton.addEventListener('click', () => {
    mysteryButton.style.display = 'none';
    centeredDiv.style.display = 'none';
    text.classList.remove('hidden');

    // Simulando algum processamento demorado
    setTimeout(() => {
      waitText.style.display = 'none';
      centeredDiv.style.display = 'block';
    }, 2000); // Tempo em milissegundos (2 segundos no exemplo)
  });

  moneyButton.addEventListener('click', () => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    moneyButton.style.left = `${randomX}px`;
    moneyButton.style.top = `${randomY}px`;
  });
});

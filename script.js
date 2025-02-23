const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  let campoA = document.getElementById("campoA").value;
  let campoB = document.getElementById("campoB").value;
  let mensagem = document.getElementById("mensagem");

  // Validar se o número B é maior que o número A
  if (parseFloat(campoB) > parseFloat(campoA)) {
      mensagem.style.color = "#080";
      mensagem.innerHTML = "Formulário válido! Parabéns!";
      explodirConfetes();
  } else {
      mensagem.style.color = "#f00";
      mensagem.innerHTML = "O número B deve ser maior que o número A.";
  }
});

// Efeito de confetes
function explodirConfetes() {
  const particleCount = 1000;
  const spread = 100;
  const colors = ['#ff0', '#f00', '#00f', '#0f0', '#ff00ff'];
  const positions = [
    { angle: null, origin: { x: 0.5, y: 1.15 }, spread: spread, colors: colors },  // Centro inferior
    { angle: 135, origin: { x: 1, y: 1.1 }, spread: spread, colors: colors },      // Canto inferior direito
    { angle: 45, origin: { x: 0, y: 1.1 }, spread: spread, colors: colors }        // Canto inferior esquerdo
  ];

  let count = 0;
  let lastUsedPosition = null;

  let interval = setInterval(() => {
    if (count >= 20) {
      clearInterval(interval); // Para os confetes após 20 disparos (1 minuto)
      return;
    }

    // Posição aleatória
    let randomPosition;
    // Verifica se a posição aleatória é diferente da última utilizada
    do {
      randomPosition = positions[Math.floor(Math.random() * positions.length)];
    } while (randomPosition === lastUsedPosition);

    // Gerar confetes na posição aleatória
    confetti({
      particleCount: particleCount,
      spread: spread,
      startVelocity: Math.floor(Math.random() * 20) + 40,
      angle: randomPosition.angle,
      origin: randomPosition.origin,
      colors: randomPosition.colors
    });

    // Salvar a posição atual como a última utilizada
    lastUsedPosition = randomPosition;

    count++;
  }, 300);
}
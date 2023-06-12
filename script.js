// Gerar um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  // Obter o valor digitado pelo jogador
  const guess = parseInt(document.getElementById('guessInput').value);

  // Verificar se o palpite está correto
  if (guess === randomNumber) {
    showMessage('Parabéns! Você acertou!');
  } else if (guess < randomNumber) {
    showMessage('Tente um número maior.');
  } else {
    showMessage('Tente um número menor.');
  }
}

function showMessage(message) {
  // Exibir uma mensagem na tela
  document.getElementById('message').textContent = message;
}
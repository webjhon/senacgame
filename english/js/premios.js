/* Sobre este arquivo:
    - Este arquivo é responsável pela lógica de premiação do quizz.
    - Cada prêmio é representado por uma imagem.
    - O número de acertos do usuário determinará qual prêmio será exibido.

    Desenvolvido por: João Carlos
*/

function showPrize(score) {
    const prizeContainer = document.createElement('div');
    prizeContainer.classList.add('prize-container');

    const prizeImage = document.createElement('img');
    prizeImage.src = `premio${score}.png`; // A imagem do prêmio será determinada pela pontuação.
    prizeImage.alt = `Prêmio ${score}`;

    prizeContainer.appendChild(prizeImage);
    quizContainer.appendChild(prizeContainer);
}

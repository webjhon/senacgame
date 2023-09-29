/* Sobre este arquivo:
    Funções principais:
    - CreateQuestionElement ()
        Cria.posiciona e adiciona o texto da pergunta.
    - CreateAnserElement ()
        Cria,posiciona e adiciona o texto da resposta
    - nextQuestion ()
        Envia o usuário para a próxima pergunta.
    - showResults ()
        Gerencia e apresenta o conteiner do resultado.
    - countDownTimer ()
        Inicia uma contagem para o inicio do próximo Quizz (enfeite)
    - startQuiz ()
        Adiciona start ao quiz no botão "Vamos começar"
    - restartQuiz()
        Reiniciar o quizz (serve reload do navegador também.)

    Desenvolvido por: João Carlos
*/
const startContainer = document.querySelector('#start-container');
const quizContainer = document.querySelector('#quiz-container');
const countdownContainer = document.querySelector('#countdown-container');
const startButton = document.querySelector('#start-button');
let currentQuestion = 0;
let score = 0;
let finalQuestion = finalQuestions[Math.floor(Math.random() * finalQuestions.length)];
let countdown;

function createQuestionElement(questionText) {
    const questionElement = document.createElement('h2');
    questionElement.innerText = questionText;
    return questionElement;
}

function createAnswerElement(answerText, isCorrect) {
    const answerElement = document.createElement('button');
    answerElement.innerText = answerText;
    answerElement.onclick = function() {
        document.getElementById('confirmationSound').play();
        for (const button of quizContainer.querySelectorAll('button')) {
            button.disabled = true;
        }
        const confirmationElement = document.createElement('button');
        confirmationElement.innerText = 'SIM, TENHO CERTEZA';
        confirmationElement.classList.add('confirmation');
        confirmationElement.onclick = function() {
            if (isCorrect) {
                answerElement.classList.add('correct');
                score++;
            } else {
                answerElement.classList.add('wrong');
            }
            nextQuestion();
        };
        quizContainer.appendChild(confirmationElement);
    };
    return answerElement;
}

function nextQuestion() {
    quizContainer.innerHTML = '';
    if (currentQuestion < quizQuestions.length) {
        const questionData = quizQuestions[currentQuestion++];
        quizContainer.appendChild(createQuestionElement(questionData.question));
        for (const answer of questionData.answers) {
            quizContainer.appendChild(createAnswerElement(answer, answer === questionData.correct));
            quizContainer.appendChild(document.createElement('br'));
        }
    } else if (currentQuestion === quizQuestions.length) {
        finalQuestion = finalQuestions[Math.floor(Math.random() * finalQuestions.length)];
        quizContainer.appendChild(createQuestionElement(finalQuestion.question));
        for (const answer of finalQuestion.answers) {
            quizContainer.appendChild(createAnswerElement(answer, answer === finalQuestion.correct));
            quizContainer.appendChild(document.createElement('br'));
        }
        currentQuestion++;
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.innerHTML = `<div class=""><h2 style="font-size: 2rem;">Você acertou ${score} de 5 questões!</h2><p>${score === 5 ? '<h3 style="font-weight:bold">Parabéns, você ganhou um brinde! Você deveria estudar mais informática, veja seu brinde abaixo!' : '<h3 style="font-weight:bold">Com o SENAC você tem futuro! Que tal estudar conosco, e aprender tudo que precisa? Veja seu brinde abaixo!</h3>'}</p></div>`;
    countdownContainer.innerHTML = 'Preparando o próximo quiz em <span id="countdown">10</span> segundos...';
    showPrize(score);
    countdown = setInterval(countdownTimer, 1000);

    // Se o jogador acertar todas as perguntas, dispara confetes
    if (score >= 3) {
        var duration = 10 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#f78a1f', '#ffffff']
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#f78a1f', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}



function countdownTimer() {
    const countdownSpan = document.querySelector('#countdown');
    let countdownValue = parseInt(countdownSpan.innerText);
    if (countdownValue <= 1) {
        clearInterval(countdown);
        restartQuiz();
    } else {
        countdownSpan.innerText = --countdownValue;
    }
}

function startQuiz() {
    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    nextQuestion();
}

function restartQuiz() {
    window.location.href = "index.html";
}



startButton.onclick = startQuiz;

//restartQuiz();

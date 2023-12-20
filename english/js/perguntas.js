/* Sobre este arquivo:
    - A constante quizQuestion, está relacionada as 4 primeiras perguntas.
    - Dentro dela, você tem a pergunta "question" as alternativas "answers"
    e no final da linha a respota "correct".
    - A constante finalQuestion, é apenas da última pergunta, tem 6 perguntas
    alternativas, com a mesma organização da constante anterior.
    - Os nomes são usados dentro do arquivo funcionamento.js, então se alterar,
    terá que mudar o outro arquivo também.

    Desenvolvido por: João Carlos
*/
const quizQuestions = [
    { question: 'Qual a língua oficial dos estados unidos??', answers: ['Espanhol', '⁠Inglês Americano', '⁠Inglês Britânico', 'Nenhuma das alternativas'], correct: 'Nenhuma das alternativas' },
    { question: 'Quais os acentos existentes no inglês?', answers: ['Agudo', '⁠Crase', '⁠Circunflexo', 'Nenhum'], correct: 'Nenhum' },
    { question: 'O “Verb to Be” pode ser traduzido como quais verbos no português?', answers: ['Ser ou estar', 'Ter ou ler', '⁠Estar ou Tocar', '⁠Ser ou Ter'], correct: 'Ser ou estar' },
    { question: 'Qual das alternativas representam a mesma coisa em Inglês Britânico e Inglês Americano?', answers: ['Autumn / Fall', '⁠Man / Men', '⁠Tooth / Teeth', 'God / Good'], correct: 'Autumn / Fall' }
];

const finalQuestions = [
    { question: 'Qual o feminino das palavras beautiful, small, open e smart?', answers: ['beautifully, smally, smarty', 'beautiful, open, smart', '⁠beautifula, opena, smarta', 'ugly, close, dumb'], correct: 'beautiful, open, smart' },
    { question: 'Quantos países possuem o Inglês como língua oficial?', answers: ['85', '⁠58', '99', '⁠67'], correct: '⁠67' },
    { question: 'Qual a tradução correta da palavra “cachorro”', answers: ['God', 'Doog', 'Dog', 'Dogg'], correct: 'Dog' },
    { question: 'Como se diz “saudade” em inglês', answers: ['Missing', '⁠Health', 'Saudady', '⁠Não há tradução'], correct: 'Não há tradução' },
    { question: 'Qual a melhora hora para começar inglês?', answers: ['20-30', '40-50', '60-70', 'Agora'], correct: 'Agora' },
    { question: 'Qual a melhor escola de inglês?', answers: ['English School', 'LearnIt', 'Red Hey', 'SENAC'], correct: 'SENAC' }
];
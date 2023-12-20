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
    { question: 'O que significa "PC"?', answers: ['Personal Computer', 'Public Computer', 'Private Computer', 'Personal Calculator'], correct: 'Personal Computer' },
    { question: 'O que usamos para digitar em um computador?', answers: ['Mouse', 'Monitor', 'Teclado', 'Impressora'], correct: 'Teclado' },
    { question: 'Em que programa podemos fazer cálculos e criar tabelas?', answers: ['Word', 'Excel', 'PowerPoint', 'Paint'], correct: 'Excel' },
    { question: 'Como chamamos um documento salvo com extensão .docx?', answers: ['Um arquivo Excel', 'Um arquivo Word', 'Um arquivo PowerPoint', 'Um arquivo de imagem'], correct: 'Um arquivo Word' }
];

const finalQuestions = [
    { question: 'O que significa a sigla "WWW"?', answers: ['Wild Wide Web', 'World Wide War', 'World Wide Web', 'Wide Web World'], correct: 'World Wide Web' },
    { question: 'O que é um servidor?', answers: ['Um tipo de computador', 'Um programa de computador', 'Um cabo de rede', 'Um tipo de software'], correct: 'Um tipo de computador' },
    { question: 'O que a CPU faz?', answers: ['Salva informações', 'Exibe informações', 'Processa informações', 'Transmite informações'], correct: 'Processa informações' },
    { question: 'O que é um sistema operacional?', answers: ['Um tipo de hardware', 'Um tipo de rede', 'Um tipo de software', 'Um tipo de servidor'], correct: 'Um tipo de software' },
    { question: 'Qual destes é um sistema operacional?', answers: ['Python', 'Java', 'Windows', 'Chrome'], correct: 'Windows' },
    { question: 'O que significa "upload"?', answers: ['Excluir dados do computador', 'Salvar dados no computador', 'Enviar dados para a internet', 'Receber dados da internet'], correct: 'Enviar dados para a internet' }
];
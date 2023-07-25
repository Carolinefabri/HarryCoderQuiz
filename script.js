let title = document.querySelector('h1');
let instructions = document.querySelector('#instructions');
let notice = document.querySelector('#notice');
let points = 0;
let score = 0;
let gameOverScreen = document.querySelector('#gameOverScreen');
let gameWonScreen = document.querySelector('#gameWonScreen');

// PERGUNTA
let numQuestion = document.querySelector('#numQuestion');
let fragen = document.querySelector('#fragen');

// ALTERNATIVAS
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');

let articleQuestion = document.querySelector('.questions');

let alternatives = document.querySelector('#alternatives');

const q0 = {
    numQuestion: 0,
    fragen: 'What does HTML stand for?',
    alternativaA: 'Hyperlinks and Text Markup Language',
    alternativaB: 'Home Tool Markup Language',
    alternativaC: 'Hyper Text Markup Language',
    correct: 'Hyper Text Markup Language',
  };
  
  const q1 = {
    numQuestion: 1,
    fragen: 'Which attribute is used to specify an alternate text for an image?',
    alternativaA: 'alt',
    alternativaB: 'src',
    alternativaC: 'href',
    correct: 'alt',
  };
  
  const q2 = {
    numQuestion: 2,
    fragen: 'Which CSS property is used to change the background color of an element?',
    alternativaA: 'color',
    alternativaB: 'background-color',
    alternativaC: 'text-color',
    correct: 'background-color',
  };
  
  const q3 = {
    numQuestion: 3,
    fragen: 'What is the result of the following JavaScript code: 4 + "4"?',
    alternativaA: '8',
    alternativaB: '44',
    alternativaC: 'Error',
    correct: '44',
  };
  
  const q4 = {
    numQuestion: 4,
    fragen: 'What does getElementById() do in JavaScript?',
    alternativaA: "Retrieve elements by class name.;",
    alternativaB: "Retrieve an element by its unique ID attribute.;",
    alternativaC: "Retrieve elements by tag name.;",
    correct: 'Retrieve an element by its unique ID attribute.;',
  };
  
  const q5 = {
    numQuestion: 5,
    fragen: 'Which HTML tag is used to define a hyperlink?',
    alternativaA: '<a>',
    alternativaB: '<h1>',
    alternativaC: '<p>',
    correct: '<a>',
  };
  
  // CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
  const questions = [q0, q1, q2, q3, q4, q5];
  
  

let number = document.querySelector('#number');
let total = document.querySelector('#total');

let currentQuestionIndex = 0;
let totalOfQuestions = questions.length - 1;
console.log('Total of questions: ' + totalOfQuestions);

// Função para mostrar a próxima pergunta
function nextQuestion() {
  if (currentQuestionIndex <= totalOfQuestions) {
    numQuestion.textContent = currentQuestionIndex + 1;
    fragen.textContent = questions[currentQuestionIndex].fragen;
    a.textContent = questions[currentQuestionIndex].alternativaA;
    b.textContent = questions[currentQuestionIndex].alternativaB;
    c.textContent = questions[currentQuestionIndex].alternativaC;
    currentQuestionIndex++;
    
    // Remover eventos de clique anteriores
    a.removeEventListener('click', clickA);
    b.removeEventListener('click', clickB);
    c.removeEventListener('click', clickC);
    
    // Adicionar eventos de clique atualizados
    a.addEventListener('click', clickA);
    b.addEventListener('click', clickB);
    c.addEventListener('click', clickC);
  } else {
    console.log('End of the Quiz');
    endOfGame();
  }
}
nextQuestion();


// Função para verificar se a resposta está correta
function checkIfYouGotItRight(questionNumber, answer) {
  let numberOfQuestion = parseInt(questionNumber) - 1; 
  console.log('Question ' + (numberOfQuestion + 1));

  let correct = questions[numberOfQuestion].correct;

  let answerChosen = answer.textContent;
  console.log('Answer: ' + answerChosen);

  if (answerChosen === correct) {
    points += 10;
  } else {
    answerThis.textContent = "Wrong 😢"
  }

  score = points;
  instructions.textContent = 'Points: ' + score;

  blockAlternatives();

  setTimeout(function () {
    // respostaEsta.textContent = '...'
    let next = currentQuestionIndex;

    if (next > totalOfQuestions) {
      console.log('End of the Quiz');
      endOfGame();
    } else {
      nextQuestion();
    }
    unlockAlternatives();
  }, 250);

  // Atualizar o número total de perguntas
  total.textContent = totalOfQuestions + 1;
}

// Função para bloquear as alternativas
function blockAlternatives() {
  a.removeEventListener('click', clickA);
  b.removeEventListener('click', clickB);
  c.removeEventListener('click', clickC);
}

// Função para desbloquear as alternativas
function unlockAlternatives() {
  a.addEventListener('click', clickA);
  b.addEventListener('click', clickB);
  c.addEventListener('click', clickC);
}

// Funções de clique para as alternativas
function clickA() {
  checkIfYouGotItRight(numQuestion.textContent, a);
}

function clickB() {
  checkIfYouGotItRight(numQuestion.textContent, b);
}

function clickC() {
  checkIfYouGotItRight(numQuestion.textContent, c);
}

// Chamada das funções de clique para as alternativas
a.addEventListener('click', clickA);
b.addEventListener('click', clickB);
c.addEventListener('click', clickC);




function endOfGame() {
  if (score >= 50) {
    instructions.textContent = 'You WON! Harry Coder can now be a programmer';
    // Redirecionar para a página "WonPage"
    setTimeout(function() {
      window.location.href = "WonPage.html";
    }, 1500); // Redirecionar após 1 segundo
  } else {
    instructions.style.display = 'none'; // Oculta o elemento de instruções
    gameOverScreen.style.display = 'block'; // Mostra a tela de fim de jogo
    // Redirecionar para a página "gameOver.html"
    setTimeout(function() {
      window.location.href = "gameOver.html";
    }, 1500); // Redirecionar após 1,5 segundos
  }
}

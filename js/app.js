document.addEventListener('DOMContentLoaded', () => {
  // Counting Section
  const numbers = [
    { number: 1, count: 1 },
    { number: 2, count: 2 },
    { number: 3, count: 3 },
    { number: 4, count: 4 },
    { number: 5, count: 5 },
    { number: 6, count: 6 },
    { number: 7, count: 7 },
    { number: 8, count: 8 },
    { number: 9, count: 9 },
    { number: 10, count: 10}
    // Add more numbers as needed
  ];
  
  let currentNumberIndex = 0;

  const numberElement = document.getElementById('number');
  const itemsContainer = document.getElementById('items');
  const nextNumberButton = document.getElementById('next-number');

  function displayNumber() {
    const currentNumber = numbers[currentNumberIndex];
    numberElement.textContent = currentNumber.number;
    itemsContainer.innerHTML = '';

    for (let i = 0; i < currentNumber.count; i++) {
      const item = document.createElement('div');
      item.className = 'item';
      item.textContent = i + 1;
      itemsContainer.appendChild(item);
    }
  }

  nextNumberButton.addEventListener('click', () => {
    currentNumberIndex = (currentNumberIndex + 1) % numbers.length;
    displayNumber();
  });

  displayNumber();

  // Addition Section
  const additionProblems = [
    { problem: '1 + 1', answer: 2, count1: 1, count2: 1 },
    { problem: '2 + 2', answer: 4, count1: 2, count2: 2 },
    // Add more problems as needed
  ];

  let currentProblemIndex = 0;

  const additionProblemElement = document.getElementById('addition-problem');
  const additionItemsContainer = document.getElementById('addition-items');
  const checkAnswerButton = document.getElementById('check-answer');

  function displayAdditionProblem() {
    const currentProblem = additionProblems[currentProblemIndex];
    additionProblemElement.textContent = `${currentProblem.problem} = ?`;
    additionItemsContainer.innerHTML = '';

    const group1 = document.createElement('div');
    group1.className = 'addition-group';
    for (let i = 0; i < currentProblem.count1; i++) {
      const item = document.createElement('div');
      item.className = 'addition-item';
      item.textContent = i + 1;
      group1.appendChild(item);
    }

    const plusSign = document.createElement('div');
    plusSign.textContent = '+';
    plusSign.style.fontSize = '30px';
    plusSign.style.margin = '0 10px';

    const group2 = document.createElement('div');
    group2.className = 'addition-group';
    for (let i = 0; i < currentProblem.count2; i++) {
      const item = document.createElement('div');
      item.className = 'addition-item';
      item.textContent = i + 1;
      group2.appendChild(item);
    }

    additionItemsContainer.appendChild(group1);
    additionItemsContainer.appendChild(plusSign);
    additionItemsContainer.appendChild(group2);
  }

  checkAnswerButton.addEventListener('click', () => {
    const currentProblem = additionProblems[currentProblemIndex];
    const userAnswer = prompt('What is the answer?');

    if (parseInt(userAnswer) === currentProblem.answer) {
      alert('Correct!');
    } else {
      alert('Try again!');
    }

    currentProblemIndex = (currentProblemIndex + 1) % additionProblems.length;
    displayAdditionProblem();
  });

  displayAdditionProblem();
});

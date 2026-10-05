const problems = [
  { id: 1, type: 'Nested', title: 'Prime sum', description: 'Find the sum of prime numbers from 20 to 150.' },
  { id: 2, type: 'Nested', title: 'Average perfect numbers', description: 'Average all perfect numbers between 1 and 1000.' },
  { id: 3, type: 'Nested', title: 'Palindrome range', description: 'Print palindrome numbers from 100 to 500.' },
  { id: 4, type: 'Nested', title: 'Digit sum 10', description: 'Find numbers between 120 and 850 whose digits add up to 10.' },
  { id: 5, type: 'Nested', title: 'Target pair sum = 30', description: 'Find pairs (a, b) where a + b = 30 and a <= b.' },
  { id: 6, type: 'Nested', title: 'Exactly 3 factors', description: 'Print numbers between 10 and 300 with exactly 3 factors.' },
  { id: 7, type: 'Nested', title: 'Prime factors', description: 'Break down numbers from 20 to 50 into prime factors.' },
  { id: 8, type: 'Nested', title: 'Max factors', description: 'Find the number with the maximum number of factors in the range 50 to 150.' },
  { id: 9, type: 'Nested', title: 'Armstrong numbers', description: 'Print Armstrong numbers in the range 100 to 1000.' }
];

const answerMap = {
  1: 'Result: 4163',
  2: 'Result: 2164',
  3: 'Result: 101, 111, 121, ... 494',
  4: 'Result: 127, 136, 145, ...',
  5: 'Result: (1,29), (2,28), ..., (15,15)',
  6: 'Result: 49, 121, 169, 289',
  7: 'Result: prime factors shown step by step',
  8: 'Result: 60 with maximum factors',
  9: 'Result: 153, 370, 371, 407'
};

const grid = document.getElementById('problemGrid');

problems.forEach((problem) => {
  const card = document.createElement('article');
  card.className = 'problem-card';

  const top = document.createElement('div');
  top.className = 'problem-card__top';

  const index = document.createElement('span');
  index.className = 'problem-card__index';
  index.textContent = problem.id;

  const type = document.createElement('span');
  type.className = 'problem-card__type';
  type.textContent = problem.type;

  top.append(index, type);

  const title = document.createElement('h3');
  title.textContent = problem.title;

  const desc = document.createElement('p');
  desc.textContent = problem.description;

  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Show Logic';

  const answer = document.createElement('div');
  answer.className = 'problem-card__answer';
  answer.textContent = answerMap[problem.id] || 'Logic hidden';

  button.addEventListener('click', () => {
    const isVisible = answer.classList.toggle('visible');
    button.textContent = isVisible ? 'Hide Logic' : 'Show Logic';
  });

  card.append(top, title, desc, button, answer);
  grid.appendChild(card);
});
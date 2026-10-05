
function calculateAverage(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return { sum, average: sum / n };
}

function calculateSquares(n) {
  let sum = 0;
  const values = [];
  for (let i = 1; i <= n; i++) {
    const square = i * i;
    values.push(`${i}^2 = ${square}`);
    sum += square;
  }
  return { values, sum };
}

function calculateCubes(n) {
  let sum = 0;
  const values = [];
  for (let i = 1; i <= n; i++) {
    const cube = i * i * i;
    values.push(`${i}^3 = ${cube}`);
    sum += cube;
  }
  return { values, sum };
}

function calculatePowers(base, limit) {
  const values = [];
  let sum = 0;

  for (let i = 1; i <= limit; i++) {
    let result = 1;
    for (let j = 1; j <= i; j++) {
      result *= base;
    }
    values.push(`${base}^${i} = ${result}`);
    sum += result;
  }

  return { values, sum };
}

function calculateFibonacci(n) {
  const values = [];
  let a = 0;
  let b = 1;

  for (let i = 1; i <= n; i++) {
    values.push(a);
    const c = a + b;
    a = b;
    b = c;
  }

  return values;
}

function calculateOnesSeries(n) {
  const values = [];
  let num = 0;

  for (let i = 1; i <= n; i++) {
    num = num * 10 + 1;
    values.push(num);
  }

  return values;
}

function calculateReciprocalSeries(n) {
  const values = [];
  for (let i = 1; i <= n; i++) {
    values.push(i === 1 ? "1" : `1/${i}`);
  }
  return values;
}

function calculatePowerThreeSeries(n) {
  const values = [];
  for (let i = 0; i < n; i++) {
    let value = 1;
    for (let j = 1; j <= i; j++) {
      value *= 3;
    }
    values.push(`3^${i} = ${value}`);
  }
  return values;
}

function calculateArmstrongNumbers(limit) {
  const values = [];

  for (let j = 1; j <= limit; j++) {
    let temp = j;
    let sumDigits = 0;

    while (temp > 0) {
      const digit = temp % 10;
      sumDigits += digit * digit * digit;
      temp = Math.floor(temp / 10);
    }

    if (sumDigits === j) {
      values.push(j);
    }
  }

  return values;
}

document.addEventListener('DOMContentLoaded', function () {
  const averageBtn = document.getElementById('average-btn');
  const squaresBtn = document.getElementById('squares-btn');
  const cubesBtn = document.getElementById('cubes-btn');
  const powersBtn = document.getElementById('powers-btn');
  const fibonacciBtn = document.getElementById('fibonacci-btn');
  const onesSeriesBtn = document.getElementById('ones-series-btn');
  const reciprocalBtn = document.getElementById('reciprocal-btn');
  const powerThreeBtn = document.getElementById('power-three-btn');
  const armstrongBtn = document.getElementById('armstrong-btn');

  averageBtn.addEventListener('click', function () {
    const result = calculateAverage(5);
    document.getElementById('average-result').textContent = `Sum = ${result.sum}, Average = ${result.average}`;
  });

  squaresBtn.addEventListener('click', function () {
    const result = calculateSquares(5);
    document.getElementById('squares-result').textContent = `${result.values.join(', ')} => Sum = ${result.sum}`;
  });

  cubesBtn.addEventListener('click', function () {
    const result = calculateCubes(5);
    document.getElementById('cubes-result').textContent = `${result.values.join(', ')} => Sum = ${result.sum}`;
  });

  powersBtn.addEventListener('click', function () {
    const result = calculatePowers(2, 5);
    document.getElementById('powers-result').textContent = `${result.values.join(', ')} => Sum = ${result.sum}`;
  });

  fibonacciBtn.addEventListener('click', function () {
    const result = calculateFibonacci(10);
    document.getElementById('fibonacci-result').textContent = result.join(', ');
  });

  onesSeriesBtn.addEventListener('click', function () {
    const result = calculateOnesSeries(5);
    document.getElementById('ones-series-result').textContent = result.join(', ');
  });

  reciprocalBtn.addEventListener('click', function () {
    const result = calculateReciprocalSeries(5);
    document.getElementById('reciprocal-result').textContent = result.join(', ');
  });

  powerThreeBtn.addEventListener('click', function () {
    const result = calculatePowerThreeSeries(5);
    document.getElementById('power-three-result').textContent = result.join(', ');
  });

  armstrongBtn.addEventListener('click', function () {
    const result = calculateArmstrongNumbers(500);
    document.getElementById('armstrong-result').textContent = result.join(', ');
  });
});

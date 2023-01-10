#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name?');
const sayHello = () => {
  console.log(`Hello, ${userName}!`);
};
sayHello();

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log('What is the result of the expression?');

const operators = ['+', '-', '*'];

const randomOperation = () => operators[getRandomNumber(0, 2)];

// Вычисление результата
const calculation = (firstNumber, secondNumber, operation) => {
  let result = 0;
  if (operation === '+') {
    result = firstNumber + secondNumber;
  } else
  if (operation === '-') {
    result = firstNumber - secondNumber;
  } else
  if (operation === '*') {
    result = firstNumber * secondNumber;
  }
  return result.toString();
};

const startRound = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operation = randomOperation();
  const correctAnswer = calculation(num1, num2, operation);
  console.log('Question: ', `${num1} ${operation} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName} !`);
  return false;
};

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

startGame();

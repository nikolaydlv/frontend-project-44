#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name?');
const sayHello = () => {
  console.log(`Hello, ${userName}!`);
};
sayHello();

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => {
  if (num % 2 === 0) {
    const result = 'yes';
    return result;
  }
  const result = 'no';
  return result;
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const startRound = () => {
  const randomNumber = getRandomNumber(1, 30);
  console.log('Question: ', randomNumber);
  const answer = readlineSync.question('Your answer: ');
  if (answer === isEven(randomNumber)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber)}'.\nLet's try again, ${userName} !`);
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

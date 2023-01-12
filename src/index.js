#!/usr/bin/env node

import readlineSync from 'readline-sync';

const runLogic = (task, gameConditions) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = gameConditions();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runLogic;

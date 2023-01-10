import gamesLogic from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameStart = () => {
  const task = 'What is the result of the expression?';

  const operators = ['+', '-', '*'];

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

  const randomOperation = () => operators[getRandomNumber(0, 2)];

  const gameConditions = () => {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operation = randomOperation();
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = calculation(num1, num2, operation);
    return [question, correctAnswer];
  };

  return gamesLogic(task, gameConditions);
};

export default gameStart;

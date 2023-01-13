import runLogic from '../index.js';
import getRandomNumber from '../number-generator.js';

const task = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculation = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return (firstNumber + secondNumber).toString();
    case '-':
      return (firstNumber - secondNumber).toString();
    case '*':
      return (firstNumber * secondNumber).toString();
    default:
      throw new Error('wrong operator');
  }
};

const getRoundData = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operation = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculation(num1, num2, operation);
  return [question, correctAnswer];
};

const startBrainCalc = () => {
  runLogic(task, getRoundData);
};

export default startBrainCalc;

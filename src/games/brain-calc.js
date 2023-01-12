import runLogic from '../index.js';
import getRandomNumber from '../number-generator.js';

const startBrainCalc = () => {
  const task = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];

  const calculation = (firstNumber, secondNumber, operation) => {
    let result = 0;
    switch (operation) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      default:
        result = firstNumber * secondNumber;
    }
    return result.toString();
  };

  const getRoundData = () => {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operation = operators[getRandomNumber(0, 2)];
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = calculation(num1, num2, operation);
    return [question, correctAnswer];
  };
  return runLogic(task, getRoundData);
};

export default startBrainCalc;

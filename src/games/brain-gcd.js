import gamesLogic from '../index.js';
import getRandomNumber from '../number-generator.js';

const gameStart = () => {
  const task = 'Find the greatest common divisor of given numbers.';

  const gcd = (num1, num2) => {
    let firstNumber = num1;
    let secondNumber = num2;
    while (firstNumber !== secondNumber) {
      if (firstNumber > secondNumber) {
        firstNumber -= secondNumber;
      } else {
        secondNumber -= firstNumber;
      }
    }
    return firstNumber.toString();
  };

  const gameConditions = () => {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2);
    return [question, correctAnswer];
  };
  return gamesLogic(task, gameConditions);
};

export default gameStart;

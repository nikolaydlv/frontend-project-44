import runLogic from '../index.js';
import getRandomNumber from '../number-generator.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getRoundData = () => {
  const question = getRandomNumber(1, 30);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startBrainEven = () => {
  runLogic(task, getRoundData);
};

export default startBrainEven;

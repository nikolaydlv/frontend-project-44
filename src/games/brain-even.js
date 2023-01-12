import runLogic from '../index.js';
import getRandomNumber from '../number-generator.js';

const startBrainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (num) => {
    if (num % 2 === 0) {
      return ('yes');
    }
    return ('no');
  };

  const getRoundData = () => {
    const question = getRandomNumber(1, 30);
    const correctAnswer = isEven(question);
    return [question, correctAnswer];
  };
  return runLogic(task, getRoundData);
};

export default startBrainEven;

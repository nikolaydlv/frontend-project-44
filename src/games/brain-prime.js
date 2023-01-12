import runLogic from '../index.js';
import getRandomNumber from '../number-generator.js';

const startBrainPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const isPrime = (num) => {
    for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  const getRoundData = () => {
    const question = getRandomNumber(1, 100);
    const getAnswer = (number) => ((isPrime(number)) ? 'yes' : 'no');
    const correctAnswer = getAnswer(question);
    return [question, correctAnswer];
  };
  return runLogic(task, getRoundData);
};

export default startBrainPrime;

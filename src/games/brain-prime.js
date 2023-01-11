import gamesLogic from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameStart = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const isPrime = (num) => {
    for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  const gameConditions = () => {
    const question = getRandomNumber(1, 100);
    const getAnswer = (number) => ((isPrime(number)) ? 'yes' : 'no');
    const correctAnswer = getAnswer(question);
    return [question, correctAnswer];
  };
  return gamesLogic(task, gameConditions);
};

export default gameStart;
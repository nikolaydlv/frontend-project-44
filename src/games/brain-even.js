import gamesLogic from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameStart = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (num) => {
    if (num % 2 === 0) {
      const result = 'yes';
      return result;
    }
    const result = 'no';
    return result;
  };

  const gameConditions = () => {
    const randomNumber = getRandomNumber(1, 30);
    const question = randomNumber;
    const correctAnswer = isEven(randomNumber);
    return [question, correctAnswer];
  };
  return gamesLogic(task, gameConditions);
};

export default gameStart;

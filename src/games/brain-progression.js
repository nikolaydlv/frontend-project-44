import gamesLogic from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameStart = () => {
  const task = 'What number is missing in the progression?';

  const collPush = () => {
    const coll = [];
    const step = getRandomNumber(1, 5);
    const collLength = 10;
    let firstNum = getRandomNumber(1, 10);
    for (let i = 1; i <= collLength; i += 1) {
      coll.push(firstNum);
      firstNum += step;
    }
    return coll;
  };

  const gameConditions = () => {
    const numOfElement = getRandomNumber(0, 9);
    const array = collPush();
    const correctAnswer = array[numOfElement].toString();
    const newArray = array;
    newArray[numOfElement] = '..';
    const question = newArray.join(' ');
    return [question, correctAnswer];
  };

  return gamesLogic(task, gameConditions);
};

export default gameStart;

import runLogic from '../index.js';
import getRandomNumber from '../number-generator.js';

const task = 'What number is missing in the progression?';

const getProgression = () => {
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

const getRoundData = () => {
  const numOfElement = getRandomNumber(0, 9);
  const array = getProgression();
  const correctAnswer = array[numOfElement].toString();
  const newArray = array;
  newArray[numOfElement] = '..';
  const question = newArray.join(' ');
  return [question, correctAnswer];
};

const startBrainProgression = () => {
  runLogic(task, getRoundData);
};

export default startBrainProgression;

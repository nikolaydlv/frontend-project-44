import readlineSync from 'readline-sync';

function askName() {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
}
export default askName;

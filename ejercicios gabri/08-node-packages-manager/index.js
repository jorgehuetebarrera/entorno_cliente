import { faker } from '@faker-js/faker';
import chalk from 'chalk';

function getRandomColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'magenta', 'cyan', 'white', 'gray'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  function printRandomNameInRandomColor() {
      const randomName = faker.person.firstName();
    const randomColor = getRandomColor();
    const coloredName = chalk[randomColor](randomName);
    console.log(coloredName);
  }
  
  setInterval(printRandomNameInRandomColor, 1000);
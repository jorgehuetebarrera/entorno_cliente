import faker from '@faker-js/faker';
import chalk from 'chalk';

const randomName = faker.name.findName();
const randomColor = chalk.keyword(faker.random.arrayElement(['red', 'green', 'blue', 'yellow', 'magenta', 'cyan']));
console.log(randomColor(randomName));
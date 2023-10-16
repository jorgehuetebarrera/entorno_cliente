import { Faker } from '@faker-js/faker';
import chalk from 'chalk';

const faker = new Faker();

const randomName = Faker.name.findName();
const randomColor = chalk.keyword(Faker.random.arrayElement(['red', 'green', 'blue', 'yellow', 'magenta', 'cyan']));
console.log(randomColor(randomName));
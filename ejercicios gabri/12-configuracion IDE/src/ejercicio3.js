/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import chalk from 'chalk';

const youShouldNeverUseVar = 'This is my very long line that ESLint should check as an error';

function myFunction(used, youShouldNeverUseVar) {
  if (used) {
    console.log(chalk);
    console.log(youShouldNeverUseVar);
    console.log(myFunction);
  }
}
// eslint-disable-next-line no-undef
export default nonExistingVar;

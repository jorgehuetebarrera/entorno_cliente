import {sum} from '../src/sum.js';

test ('1 + 1 -2', () => {
    const result = sum (1,1);
    expect (result).toBe(2);
});
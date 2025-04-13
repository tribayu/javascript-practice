export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}




///////////////////

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;


import { add, subtract } from './math.js';

console.log(add(10, 5));       // 15
console.log(subtract(10, 5));  // 5

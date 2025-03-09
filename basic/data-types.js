let stringType ="hello, bay";
let numberType = 21;
let booleanType = true;
let arrayType = [1, 2, 3, 4, 5];
let objectType = {name: "bay", age: 21 };

console.log(typeof stringType, typeof numberType, typeof booleanType, typeof objectType);
console.log(Array.isArray(arrayType));

console.log();

///1
let easy1 = "123";
let easy2 = 123;
console.log(typeof easy1);
console.log(typeof easy2);

console.log();

////2
let medium1 = "10" + 7;
let medium2 = "10" - 7;
console.log(medium1);
console.log(medium2);

console.log();

////3
let hard1 = !!"hello";
let hard2 = !!1;
console.log(hard1);
console.log(hard2);

console.log();

////4
let hard3 = {} + [];
console.log(hard3);

console.log();

////5
let hard4 = "98";
console.log(Number(hard4));

console.log();

/////6
let extra = null + 1;
console.log(extra);

console.log();

/////6
let extra1 = undefined + 1;
console.log(extra1);
 

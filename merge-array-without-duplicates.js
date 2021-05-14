const numbers = ['one', 'three', 'four', 'six', 'six'];
const moreNumbers = ['two', 'three', 'three', 'four', 'five'];

const uniqueNumbers = [...new Set([...numbers, ...moreNumbers])];
console.log(uniqueNumbers);
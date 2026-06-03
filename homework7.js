// @ts-check

/*Завдання 1: Умови та масиви
Вхід: [4, 4, 8, 3, 3, 3, 2, 4, 4]
 */

let array = [4, 4, 8, 3, 3, 3, 2, 4, 4]; 
console.log("1. Вивести кожен елемент масиву");
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

console.log("2. Вивести перші 3 елементи масиву");
for(let i = 0; i <= 2; i++){
    console.log(array[i]);
}

console.log("3. Вивести суму всіх елементів");
let sum1 = 0;
for(let i = 0; i < array.length; i++){
    sum1 = sum1 + array[i];
}
console.log(sum1);

console.log("4. Вивести суму всіх елементів окрім елемента що = 4");
let sum2 = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] != 4) {
     sum2 = sum2 + array[i];   
    }
}
console.log(sum2);

/*Завдання 2:
Ваше завдання — зчитати файл list.json, 
знайти всі об'єкти lists і вивести на екран їхні ID та name.
 */

console.log("Знайти всі об'єкти lists і вивести на екран їхні ID та name.");
const fs = require('fs');
let file = fs.readFileSync('list.json', 'utf-8');
let data = JSON.parse(file);
for(let i = 0; i < data.lists.length; i++){
    console.log(`ID: ${data.lists[i].id}, Name: ${data.lists[i].name}`);
}







// обратите внимание - мы создали файл calc.ts и пишем код в нём!

// объявляем переменные
let first: number = 1;
let second: number = 2;
let str1: string = "Hello";
let str2: string = "World";

// выполняем действия с числами
let sum: number = first + second;
let diff: number = first - second;
let product: number = first * second;
let quotient: number = first / second; // ответом будет действительное число (дробь)
let remainder: number = first % second; // остаток от деления
console.log(sum, diff, product, quotient, remainder); // на экран можно вывести всё

// выполняем действия со строками
let strSum: string = str1 + " " + str2; // объединяем строки
// получится строка "Hello World"
strSum = `Это ${str1} ${str2}`; // интерполяция строк (обратите внимание на ``)
// работает только с ``; результат будет "Это Hello World"
const strLower: string = strSum.toLowerCase(); // преобразование строки в нижний регистр
const strUpper: string = strSum.toUpperCase(); // преобразование строки в верхний регистр

// выполняем действия с массивами
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let arrSum: number[] = arr1.concat(arr2); // объединяем массивы
console.log(arrSum.length); // вывести длину массива
console.log(arrSum[1]); // вывести элемент массива с индексом 1
// ВАЖНО: элементы нумеруются с 0!

console.log('Условия и циклы');
let age: number = 22;
if (age >= 18) {
    // если условие выполняется
    console.log('Совершеннолетний')
    // здесь можно писать код дальше
}
else {
    // в ином случае
    console.log("Несовершеннолетний")
    // здесь также можно писать код дальше
}
// будет выведено "Совершеннолетний"
// можно проверять любые условия (значения типа boolean)

first = 3;
second = 0;
let result: number | undefined = undefined; // результат может быть undefined
let operation: string = '/';
if (operation === '+') {
    result = first + second;
}
else if (operation === '-') {
    result = first - second;
}
else if (operation === '*') {
    result = first * second;
}
else {
    // если число близко к нулю
    if (Math.abs(second) < 0.0001) {
        console.log('Попытка деления на ноль')
    }
}
console.log(result);

console.log('Чётные числа');
let array: Array<number> = [1, 2, 3, 8, 0, 9, 14, 15]; // массив
// выведем только чётные числа
// проходим в цикле for по элементам массива
// вводится вспомогательная переменная i, значения которой будут изменяться от 0 до arr.length
// изменяться они будут с добавлением единицы (i++)
for (let i: number = 0; i < array.length; i++) {
    // проверяем на чётность текущий элемент (остаток от деления на 2 равер 0)
    if (array[i] % 2 === 0) {
        // выводим число на экран
        console.log(array[i]);
    }
}

console.log('Нечётные числа, пока не дойдём до нуля');
// проходим в цикле for по элементам массива
// вводится вспомогательная переменная i, значения которой будут изменяться от 0 до arr.length
// изменяться они будут с добавлением единицы (i++)
// мы завершим цикл, если текуший элемент будет равен 0
for (let i: number = 0; i < array.length; i++) {
    // если текущий элемент это 0
    if (array[i] === 0) {
        // выходим из цикла
        break;
    }
    // если текущий элемент чётный
    if (array[i] % 2 === 0) {
        // переходим к следующей итерации
        continue;
    }
    // выводим число
    console.log(array[i]);
}

console.log('Цикл while')
let count: number = 0;
// пока count < 10
while (count < 10) {
    // выводим число
    console.log(count);
    // увеличиваем значение count на 1
    count++;
}
// будут выведены числа с 0 до 9

console.log('Цикл do while')
count = 0;
// пока count < 10
do {
    // выводим число
    console.log(count);
    // увеличиваем значение count на 1
    count++;
} while (count > 50)
// будет выведен 0, несмотря на условие - потому что условие проверяется после действий в блоке цикла
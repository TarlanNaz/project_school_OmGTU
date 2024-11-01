// создали новый файл functions.ts
// функция, которая возвращает сумму
// export позволяет сделать функцию доступной из других файлов
export function add(a: number, b: number): number {
    // возвращение значение через слово return
    return a + b;
}
// возвращает - это значит, что я могу присвоить результат выполнения функции переменной
let res: number = add(1, 2); // 3

// ещё одна функция, которая возвращает сумму
function anotherAdd(a: number, b: number): number {
    // обратите внимание - это другая переменная res
    // она доступна и существует только внутри функции
    // ее изменение не влияет на изменение внешней перемеррой res
    let res = a + b;
    // возвращение значение через слово return
    return res;
}

console.log(res);// 3
console.log(anotherAdd(4, 5));// 9
console.log(res);// 3

// процедура - функция, которая ничего не возвращает (нет return)
// она просто выполняет действия, результат мы не получаем
function sayHello(name: string): void {
    console.log(`Hello, ${name}`); // Hello, name
}

// можно вызывать функцию от функции (и т. д.)
console.log(add(add(1, 2), 4)); // 7

// внутри функций и процедур можно использовать переменные, условия и циклы
// внутри функций и процедур можно вызывать другие функции и процедуры
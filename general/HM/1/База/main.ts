// так выглядят комментарии в коде
// они не выполняются :)
/*
Они могут быть
многострочными
*/
const a: boolean = true; // этот тип может быть только true или false
// указывая const, мы говорим запрещаем изменение значения в будущем
let b: number = 3.14; // этот тип может быть только числом
// указывая let мы разрешаем изменение значения в будущем
let c: string = 'hello'; // этот тип может быть только строкой
// кавычки могут быть и двойные
let d: Array<number> = [1, 2, 3]; // массив чисел
// указываем number в угловых скобках - значит массив чисел
let e: Array<string> = ["Кафедра", "Хайпа"]; // а это массив строк

let f: any = 1; // любой тип
f = "Поменяли тип на строку" // поскольку тип any - такое возможно
f = true;

// можем определить переменную, которая может быть нескольких типов
let g: number | string = 1; // число или строка
g = 5; // всё ок
//g = false; - будет ошибка, подчеркнет красным в редакторе

// можем допускать неопределённые и пустые значения
let u: number | undefined | null = 3;
u = undefined; // неопределённое значение
u = null; // пустое значение

// выводим название типа
let gType: string = typeof g;
console.log(gType); // будет выведено "number"
// поскольку в данный момент g == 5

// создаём свой собственный тип
type MyType = number | string | boolean;
const v: MyType = 5;
// создаем массив элементов нашего типа
let arr: Array<MyType> = [1, "hello", true];

// создаём тип из литералов (заранее определённых значений)
type Gender = "male" | "female"; // тип может хранить только два значения
let gender: Gender = "male";
console.log(gender); // будет выведено "male"
console.log(typeof gender); // будет выведено "string" - литерал строковый
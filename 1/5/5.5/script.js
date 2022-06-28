// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
//     Примеры:
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str){
    let newArray = str.split('-');
    for (let i = 1; i < newArray.length; i++){
        newArray[i] = newArray[i].slice(0, 1).toUpperCase() + newArray[i].slice(1, str.length);
        alert(  newArray[i] );
    }
    return newArray.join("");
}

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );



// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
//
//     Функция должна возвращать новый массив и не изменять исходный.
//
//     Например:
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered ); // 3,1 (совпадающие значения)
//
// alert( arr ); // 5,3,8,1 (без изменений)

function filterRange(arr, a, b){
    let newArray = new Array(1);
    let j = 0;
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] >= a) && (arr[i] <= b)){
            newArray[j] = arr[i];
            j++;
        }
    }
    return newArray;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered );
alert( arr );



// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//
// Функция должна изменять принимаемый массив и ничего не возвращать.
//
// Например:
//
// let arr = [5, 3, 8, 1];
//
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
//
// alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] <= a) || (arr[i] >= b))
        arr.splice(i, 1);
    }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert( arr );



// Сортировать в порядке по убыванию
//
// let arr = [5, 2, 1, -10, 8];
//
// // ... ваш код для сортировки по убыванию
//
// alert( arr ); // 8, 5, 2, 1, -10

let arr = [5, 2, 1, -10, 8];
arr.sort(function(a, b) { return b - a; });
alert( arr );



// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//
//     Создайте функцию copySorted(arr), которая будет возвращать такую копию.
//
//     let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
//
// alert( sorted ); // CSS, HTML, JavaScript
// alert( sorted ); // HTML, JavaScript, CSS (без изменений)

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

function copySorted(arr){
    return arr.slice().sort();
}

alert( sorted );
alert( arr );


// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
//
//     Задание состоит из двух частей.
//
//     Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
//
// Пример использования:
//
//     let calc = new Calculator;
//
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
//
//     Например, давайте добавим умножение *, деление / и возведение в степень **:
//
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
//
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
//     Числа и оператор разделены ровно одним пробелом.
//     Не лишним будет добавить обработку ошибок.

let calc = new Calculator;
alert( calc.calculate("3 + 7") );

function Calculator() {
    function calculate(str) {
        this.str = prompt("Введите строку", "a + b");
        let newArray = this.str.split(' ');
        alert( newArray );
    }
}


// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша


// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//
//     Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
//
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой.
//     Попробуйте использовать =>. Это небольшая уловка.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
    fullName: String(item.name + " " + item.surname),
    id: item.id,
}));


    alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr){
    return arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

alert( shuffle(arr) );
alert( shuffle(arr) );
alert( shuffle(arr) );
alert( shuffle(arr) );


// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
//
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr){
    return arr.reduce((a, b) => a + b.age, 0) / arr.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Пусть arr – массив строк.
//
//     Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
    let newArr = [];
    for (let item of arr) {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O

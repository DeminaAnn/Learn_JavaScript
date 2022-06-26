//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let firstNumber = +prompt("Введите первое число");
let secondNumber = +prompt("Введите первое число");
let sum = firstNumber + secondNumber;
alert( sum.toFixed(2) );

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор,
//     пока посетитель его не введёт.
//
//     Функция должна возвращать числовое значение.
//
//     Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена».
// В этом случае функция должна вернуть null.

function readNumber() {
    do {
        currentNumber = prompt("Введите число");
    } while ( !isFinite(currentNumber) );
    if (currentNumber === null || currentNumber === '') {
        return null;
    }
    alert (currentNumber);
}

readNumber();

// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
//
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
//
// Пример работы функции:
//
//     alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random (1, 5) );

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
//
//     Любое число из интервала min..max должно появляться с одинаковой вероятностью.
//
//     Пример работы функции:
//
//     alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

function randomInteger(min, max){
    return Math.floor(min + Math.random() * (max - min + 1));
}
alert( randomInteger(1, 5) );

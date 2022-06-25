// Создайте объект calculator (калькулятор) с тремя методами:
//
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
//     let calculator = {
//     // ... ваш код ...
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
    read() {
        this.one = +prompt("Введите первое значение","");
        this.two = +prompt("Введите второе значение","");
    },
    sum() {
        return (this.one + this.two);
    }
    mul() {
        return (this.one * this.two);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
//
//     let ladder = {
//         step: 0,
//         up() {
//             this.step++;
//         },
//         down() {
//             this.step--;
//         },
//         showStep: function() { // показывает текущую ступеньку
//             alert( this.step );
//         }
//     };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
//
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
//
// ladder.up().up().down().showStep(); // 1

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep(); // 1

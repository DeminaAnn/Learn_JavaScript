//Выведется ли alert?

if ("0") {
    alert( 'Привет' ); //yes
}

//Используя конструкцию if..else, напишите код, который будет спрашивать:
//„Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

if (prompt("Какое «официальное» название JavaScript?") === "ECMAScript"){
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.
//     Предполагается, что пользователь вводит только числа.

let numb = prompt("Введите число");
if (numb > 0){
    alert("1");
} else if (numb < 0){
    alert("-1");
} else {
    alert("0");
}

//Перепишите конструкцию if с использованием условного оператора '?':

let result;
result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.

let message;
message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : '';
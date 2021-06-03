// Задание №1

console.log('Задание №1')
var a = 1,
    b = 1,
    c, d;

c = ++a; console.log(c); // 2 Перед присвоением а увеличивается на 1

d = b++; console.log(d); // 1 b увеличится на 1 после присвоения

c = (2 + ++a); console.log(c); // 5 После предыдущей операции а уже равно 2 и перед присвоением увеличится ещё на 1

d = (2 + b++); console.log(d); // 4 После предыдущей операции b уже равно 2 , но увеличится на 1 после присвоения

console.log(a); // 3
console.log(b); // 3

// Задание №2

console.log('Задание №2')
var a = 2;
var x = 1 + (a *= 2); // Сначала выполнится операция умножения в скобках и х станет равен 4, затем выполнится сложение и х будет равен 5
console.log(x); // x = 5

// Задание №3

console.log('Задание №3')
var a = 3,
    b = -7;

if (a >= 0 && b >= 0) {
    console.log('Разность a и b = ' + (a - b));
}
else if (a < 0 && b < 0) {
    console.log('Произведение a и b = ' + (a * b))
}
else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    console.log('Сумма a и b = ' + (a + b))
}

// Задание №4

var a = Math.floor(Math.random() * 16)
switch (a) {
    case 0: console.log(a); a++;
    case 1: console.log(a); a++;
    case 2: console.log(a); a++;
    case 3: console.log(a); a++;
    case 4: console.log(a); a++;
    case 5: console.log(a); a++;
    case 6: console.log(a); a++;
    case 7: console.log(a); a++;
    case 8: console.log(a); a++;
    case 9: console.log(a); a++;
    case 10: console.log(a); a++;
    case 11: console.log(a); a++;
    case 12: console.log(a); a++;
    case 13: console.log(a); a++;
    case 14: console.log(a); a++;
    case 15: console.log(a); a++;
}

// Задание №5

function sum(a, b) {
    return (a + b);
}

function subt(a, b) {
    return (a - b);
}

function mult(a, b) {
    return (a * b);
}

function divis(a, b) {
    return (a / b);
}

// Задание №5

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case '+': return sum(arg1, arg2);
        case '-': return subt(arg1, arg2);
        case '*': return mult(arg1, arg2);
        case '/': return divis(arg1, arg2);
    }

}

// Задание №6

console.log(null == 0)
console.log(null === 0)
// null - это пустое значение (пустая ссылка), эт значение никуда не ссылается.
// 0 - это ссылка на ячейку памяти, в которой хранится значение '0'

// Задание №7

function power(val, pow) {
    if (pow <= 1) {
        return val
    }
    else {
        return power(val, pow - 1) * val
    }
}

console.log(power(2, 10))
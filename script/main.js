console.log('Упражнения: уровень 1------------------');
console.log('1-----------------------------------');


let age = prompt('введите возраст');
let num = 18;
let res = 0;
if (age >= 18) {
    alert('Вы достаточно взрослый, чтобы водить. ')
} else if (res = num - age) {
    alert(`Вам осталось ${res} года до вождения.`)
}

console.log('2-----------------------------------');

let yourAge = prompt('введите ваш возрост');
let myAge = 26;
let result = 0;
if (yourAge >= 26) {
    result = yourAge - myAge;
    alert(`Ты на ${result} лет старше меня.`)
} else {
    result = myAge - yourAge;
    alert(`Ты на ${result} лет младше меня.`)
}


console.log('4-----------------------------------');
let numbers = prompt('введите число');
if (numbers % 2 == 0) {
    alert(`${numbers}четное число`)
} else (alert(`${numbers}не четно  число`))
console.log('Упражнения: уровень 2------------------');

let studet = prompt('введите оценку студента');
if (studet == 0 || studet <= 49) {
    alert('F')
} else if (studet == 50 || studet <= 59) {
    alert('D')
} else if (studet == 60 || studet <= 69) {
    alert('C')
} else if (studet == 70 || studet <= 79) {
    alert('B')
} else if (studet == 80 || studet <= 100) {
    alert('A')
}
console.log('Упражнения: уровень 2------------------');

let pogoda = prompt('введите месяц ');
switch (pogoda) {
    case 'январь':
        alert('Зима');
        break;
    case 'февраль':
        alert('Зима');
        break;
    case 'март':
        alert('весна');
        break;
    case 'апрель':
        alert('весна');
        break;
    case 'май ':
        alert('весна');
        break;
    case 'июнь':
        alert('лето');
        break;
    case 'июль':
        alert('лето');
        break;
    case 'август':
        alert('лето');
        break;
    case 'сентябрь':
        alert('осень');
        break;
    case 'октябрь':
        alert('осень');
        break;
    case 'ноябрь':
        alert('осень');
        break;
    case 'декабрь':
        alert('Зима');
        break;
}





console.log('1. Вивести на сторінку в один рядок через кому числа від 10 до 20.');
let res = '';

for (let i = 10; i <= 20; i++) {
    if (i >= 20) {
        res += i;
    } else {
        res += i + ',';
    }

}
console.log(res);
console.log(` `);
// --------------------------

console.log('2. Вивести квадрати чисел від 10 до 20.');
let sqw = '';

for (let i = 10; i <= 20; i++) {
    if (i >= 20) {
        sqw += i ** 2;
    } else {
        sqw += i ** 2 + ',';
    }

}
console.log(sqw);
console.log(` `);
// --------------------------

console.log('3. Вивести таблицю множення на 7.');
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}
console.log(` `);
// --------------------------

console.log('4. Знайти суму всіх цілих чисел від 1 до 15.');
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);
console.log(` `);
// --------------------------

console.log('5. Знайти добуток усіх цілих чисел від 15 до 35.');
let d = 1;
for (let i = 15; i <= 35; i++) {
    d = d * i;
}
console.log(d);
console.log(` `);
// --------------------------

console.log('6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');
let avg = 0;
for (let i = 1; i <= 500; i++) {
    avg += i;
}
console.log(avg / 500);
console.log(` `);
// --------------------------

console.log('7. Вивести суму лише парних чисел в діапазоні від 30 до 80.');
let pSum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        pSum += i;
    }
}
console.log(pSum);
console.log(` `);
// --------------------------


console.log('8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.');
let num = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        num += i + ',';
    }
}
console.log(num);
console.log(` `);
// --------------------------

console.log('9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.');
const n = +prompt('Введіть число:');
let col2 = 0;
let sum2 = 0;

if (n > 0) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
            if (i % 2 === 0) {
                col2++;
                sum2 += i;
            }
        }
    }
} else {
    console.log('Oops...');
}


// console.log(num);
console.log(` `);
// --------------------------

console.log('10. Визначити кількість його парних дільників.');
console.log(col2);

console.log('11. Знайти суму його парних дільників.');
console.log(sum2);

console.log('12. Надрукувати повну таблицю множення від 1 до 10.');
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
console.log(` `);
// --------------------------



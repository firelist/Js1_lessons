// Функции - Functions

// Function declaration

// function calculate (a, b) {
//     return console.log(a + b)
// }
//
// calculate(77, 11)


// Function expression

// const calculate = function (a, b) {
//     return console.log(a - b)
// }
//
// calculate(43, 55)

// Arrow Function

// const saiHi = () => {
//     console.log('hi')
// }
//
// saiHi()

// var userAge = Number(prompt('Введите возраст: '))
//
// var age = (user) => {
//     if (user >= 18) {
//         console.log('Okay')
//     } else if (user < 18) {
//         console.log('Not Okay')
//     } else {
//         console.log('ERROR')
//     }
// }
//
// age(userAge)

// Lambda Function

// const saiHi = () => console.log('hi')

// Замыкания

// function init () {
//     var name = prompt('Введите имя ')
//     var displayName = () => {
//         console.log(name)
//     }
//     displayName()
// }
// init()

// var userAge = Number(prompt('Введите возраст: '))
//
// var ageFunc = (text) => alert(text)
//
// if (userAge >= 18) {
//     ageFunc('Okay')
// } else {
//     ageFunc('Not Okay')
// }

// let numA = Number(prompt('Ввести 1 число'))
// let numB = Number(prompt('Ввести 2 число'))
//
// const calc = (a, b) => {
//     console.log(a + b + ' сложение')
//     console.log(a + b + ' вычитание')
//     console.log(a + b + ' умножение')
//     console.log(a + b + ' деление')
// }
//
// calc(numA, numB)

// const name = 'Emir'
//
// function global() {
//     const name = 'Ilya'
//     return console.log(name)
// }
//
// global()


// Анонимные Function

// var bob = () => {
//     console.log('bob')
// }

// setInterval(() => {
//     console.log('bob')
// }, 1000)

// var sec = 0
//
// setInterval(() => {
//     console.log(sec)
// }, 1000)
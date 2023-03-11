// console.log('Hello world')
// console.log(1 + 1)
// variable - переменная

// var name = 'SkarpiX'
// console.log(name)

// var Number - не стоит лсоздавать переменные с заглавных букв

// var 1num

// Типы данных
// Примитивные:

// var number = 42 // number
// var someWorld = 'Hello I am SkarpiX' // string
// var hasHair = false // boolean
// var isMarried = true // boolean
// var und // undefined
// var none = null // null

// console.log(false + false)
// console.log(true + true)
// console.log(none)

// Не прнимитивные типы данных (ссылочные)

// Array - Массив
// ES6
// var arr = [1, 2, 3, 4, 5]
// console.log(arr[4])


// ES5
// var arr1 = new Array(1, 2, 3, 4, 5)
// console.log(arr1)

// object - объект

// ES6
// var obj = {
//     name: 'SkarpiX',
//     age: 19,
//     isMarried: false,
//     address: {
//         street: 'Wall Street'
//     },
//     ['num']: [1, 2, 3],
//     12: 'num'
// }
// var arr = [1, 2, 3, 4, 5]

// console.log(obj)
// console.log(arr)
// console.log(typeof obj)
// console.log(Object)
// console.log(obj.name)
// console.log(obj.address.street)
// console.log(obj['address'])

// var obj = new Object({
//     name: 'SkarpiX',
//     age: 15,
// })
//
// console.log(obj)

// Операторы (матиматические, условные)

// console.log(40 + 2)
// console.log(40 - 2)
// console.log(40 * 2)
// console.log(40 / 2)

// console.log(40 < 2)
// console.log(40 > 2)

// console.log(40 >= 2)
// console.log(40 <= 2)

// console.log('100' === 100) // строгое
// console.log(100 == '100') // не строгое

// Логические операторы

// console.log(10 < 100 && 10 === 10 && true) // Логическое 'и'
// console.log(true || false) // логический 'или'

// Условные конструкции if, if else, else

// if (10 < 100) {
//     console.log('Верно')
// }

// alert('Hello')
// confirm('Hello2')

// document.write('Hello world')

// prompt('Write SomeOne')


// Number()
// var age = Number(prompt('Введите возраст'))
// document.write(name)
// console.log(typeof age)

// if (age >= 18 && age < 50) {
//     alert('Вход разрешен')
// } else if (age < 18) {
//     alert('Вход запрещен')
// } else if (age > 49) {
//     alert('Ты уже стар')
// } else {
//     alert('Вводи возраст')
// }


// Условное конструкция Switch case

// var age = Number(prompt('Введите возраст'))
//
// switch (age) {
//     case 18:
//         alert('Вход разрешен')
//         break
//     case 50:
//         alert('Ты уже стар')
//         break
//     default:
//         alert('Вводи возраст!!!')
//         break
//
// }
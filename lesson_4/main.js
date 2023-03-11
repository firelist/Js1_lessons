// DOM

// document

// console.log(document)

// window.alert('Hello')

// console.log(window)

// document.body.style.backgroundColor = 'red'

// document.body.setAttribute('class', 'wrapper')

// const block = document.getElementsByClassName('block')
// block[0].style.backgroundColor = 'green'
// console.log(block[0])

// const block = document.getElementById('block')
// console.log(block)

// block.style.width = '50px'
// block.style.height = '50px'
// block.style.backgroundColor = 'blue'

// const blockClass = document.querySelector('.block')
// const blockId = document.querySelector('#block')
//
// console.log(blockClass)
// console.log(blockId)

// const blockBtn = document.querySelector('#btn')
//
// blockBtn.addEventListener('click', (event) => {
//     // alert('Ты нажал на кнопку!')
//     console.log(event)
// })


// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')
//
// window.addEventListener('mousemove', event => {
//     posX.innerHTML = event.screenX
//     posY.innerHTML = event.screenY
// })

// console.dir(buttons[0])

// const buttons = document.querySelectorAll('.button')
// const silver = document.querySelectorAll('.silver')

// for (button of buttons) button.onclick = e => document.body.style.backgroundColor = e.target.innerText

// for (btn of silver) btn.onclick = e => document.body.style.backgroundColor = e.target.innerText

// for (let button of buttons) {
//     button.addEventListener('click', e => {
//         console.log(e)
//         document.body.style.backgroundColor = e.target.innerText
//     })
// }
// for (let btn of silver) {
//     btn.addEventListener('click', e => {
//         console.log(e)
//         document.body.style.backgroundColor = e.target.className
//     })
// }


// Методы массивов

// filter

// const fruits = ['apple', 'pineapple', 'peach', 'grape']
//
// console.log(fruits)
//
// const result = fruits.filter(fruits => fruits.length > 5)
//
// console.log(result)

// const arr = [1, 43, 22, 90, 834]
//
// const result = arr.filter(num => {
//     toString(num).startsWith('1', '4', '9')
// })
//
// console.log(result)

// map

// const numbers = [1, 2, 3, 5, 8, 13, 21]
//
// console.log(numbers)
//
// const result = numbers.map(item => {
//     return item * 2
// })
//
// console.log(result)

// forEach()

// const numbers = [1, 2, 3, 5, 8, 13, 21]
//
// let count = 0
//
// numbers.forEach(element => {
//     console.log(element)
//     count++
// })
//
// console.log(`Количество элементов в массиве ${count}`)

// slice()

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
//
// console.log(animals)
//
// let slicedAnimal = animals.slice(2, 5)
//
// console.log(slicedAnimal)
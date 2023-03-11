// OOP

// const leopard = {
//     name: 'Leopard',
//     age: 6,
//     hasTail: true,
//     number: 12890,
//     log: function () {
//         console.log(leopard)
//     }
// }
//
// console.log(leopard.log)
// // console.log(leopard)
// // const leopard1 = new Object({
// //     name: 'Leopard',
// //     age: 6,
// //     hasTail: true,
// //     number: 12890
// // })
//
// // console.log(leopard1)
//
// const num = () => 'hi'
//
// console.log(typeof num)
//
// function number () {
//     return 'hi'
// }
//
// console.log(typeof num)


// class Animal {
//     static type = 'ANIMAL'
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log(`I am ${this.name}`)
//     }
// }
//
// const animal1 = new Animal({
//     name: 'Leopard',
//     age: 3,
//     hasTail:true
// })
//
// animal1.voice()
//
// class Wolfs extends Animal {
//     constructor(options) {
//         super(options);
//         this.hasFang = options.hasFang
//         this.eyeColor = options.eyeColor
//     }
//
//     voice() {
//         console.log(`I am ${this.name}`)
//     }
//
//     get ageInfo() {
//         return console.log(this.age * 5 + ' Человечиских лет')
//     }
// }
//
// const wolf = new Wolfs({
//     name: 'Akella',
//     age: 9,
//     hasTail: false,
//     hasFang: true,
//     eyeColor: 'red',
// })
//
// const wolf2 = new Wolfs({
//     name: 'Shram',
//     age: 9,
//     hasTail: false,
//     hasFang: true,
//     eyeColor: 'red'
// })
//
// wolf.ageInfo
// wolf2.voice()
// wolf.voice()
// console.log(wolf)

// console.log(animal1)
// console.log(Animal.type)
// animal1.voice()

class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    hide() {
        this.$element.style.display = 'none'
    }

    show() {
        this.$element.style.display = 'block'
    }
}

class Block extends Component{
    constructor(options) {
        super(options.selector);

        this.$element.style.width = this.$element.style.height = options.razmer + 'px'
        this.$element.style.background = options.cvet
    }
}

const block1 = new Block({
    selector: '#block1',
    razmer: 150,
    cvet: 'blue'
})
const block2 = new Block({
    selector: '#block2',
    razmer: 200,
    cvet: 'red'
})

class Circle extends Block{
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = '50%'
    }
}

const circle = new Circle({
    selector: '.krug',
    razmer: 90,
    cvet: 'green'
})

circle.hide()
circle.show()
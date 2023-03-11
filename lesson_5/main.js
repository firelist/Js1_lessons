const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('.todo_list')

console.dir(todoList)
console.dir(input)

const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement("h3")

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')

        text.innerText = input.value

        div.append(text)
        todoList.prepend(div)
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', e => {
    // console.log(input.value)
    // console.log(e)
    // if (e.code === 'Enter') {
    //     createTodo()
    // }
    e.code === 'Enter' ? createTodo() : false
})
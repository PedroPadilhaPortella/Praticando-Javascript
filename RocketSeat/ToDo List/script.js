function renderTodos(){
    listElement.innerHTML = ''

    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        var linkText = document.createTextNode('Excluir')
        linkElement.setAttribute('href', '#')
        linkElement.appendChild(linkText)

        var position = todos.indexOf(todo)
        linkElement.setAttribute('onclick', `deleteTodo(${position})`)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

function addTodo(){
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
    saveToStorage()
}

function deleteTodo(position){
    todos.splice(position, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage(){
    
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

renderTodos()

buttonElement.onclick = addTodo
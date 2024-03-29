
import { addToDo } from "../models/toDoListModel"

let dialog
let closeButton
let exitButton
let form

const date = new Date().toJSON().slice(0, 10)

export function addToDoController(){
    dialog = document.querySelector('#create-to-do')
    exitButton = document.querySelector('#exit')
    closeButton = document.querySelector('#close')
    form = dialog.querySelector('form')
    configureListeners()
    dialog.showModal()
}

function configureListeners() {
    exitButton.addEventListener('click', onCloseDialog)
    closeButton.addEventListener('click', onCloseDialog)
    form.addEventListener('submit', onCreateToDoItem)
}

function onCloseDialog(e){
    dialog.close()
}

function onCreateToDoItem(e){
    e.preventDefault()
    const todo = e.currentTarget.todo.value.trim()
    const category = e.currentTarget.category.value.trim()
    const status = e.currentTarget.status.value.trim()
    const start = date
    const finish = e.currentTarget.finish.value

    let temp = {
        todo,
        category,
        status,
        start,
        finish,
    }

    // createToDo ({
    //     todo,
    //     category,
    //     status,
    //     start,
    //     finish,
    // })

    console.log(temp)

    form.reset()
}

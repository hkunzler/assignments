const todoListContainer = document.getElementById('todo-container')

axios.get("https://api.vschool.io/kunzler/todo").then(response => {
    console.log(response);
    //call a function
}).catch(error => console.log(error))

function listToDom(todosArr) {
    for (let i = 0; i < todoListContainer.length; i++){
        // First, creat needed elements
        const todoContainer = document.createElement('div')
        const todoTitle = document.createElement('h1')
        // Second, Edit the element(text, styles, classes, event listeners)
        todoTitle.textContent = todosArr[i].todoTitle

        // Third,  put elements on the DOM
        todoContainer
    }
}

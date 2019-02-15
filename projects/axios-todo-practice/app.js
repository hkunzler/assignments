// var axios = require("axios");

const todoListContainer = document.getElementById("todo-container");
const todoForm = document["add-todo-form"]
//
// axios.get("https://api.vschool.io/kunzler/todo").then(function(response){
//     var todos = response.data
//     listTodos(todos)
// }).catch(function(error){
//     console.log("error")
// })
function getData() {
    axios.get("https://api.vschool.io/kunzler/todo").then(response => {
        const todos = response.data;
        listTodos(todos);
    }).catch(err => console.log(err))
}

function listTodos(todosArr) {
    console.log(todosArr);
    //make 1 todo show up, then reuse that code to make all todos show up
    // const firstTodo = todosArr[0]

    for (let i = 0; i < todosArr.length; i++) {
        // Make it show up on the DOM
        // Create Elements
        const todoContainer = document.createElement("div");
        const titlee = document.createElement("h1");
        const imgURL = document.createElement("img");

        // Edit the element / Give it content
        todoContainer.classList.add("todo-container");
        title.textContent = todosArr[i].title;
        imgURL.setAttribute("src", todosArr[i].imgURL);
        if (todosArr[i].completed) {
            title.style.textDecoration = "line-through";
        }

        // Append it to the DOM
        todoContainer.appendChild(title);
        todoContainer.appendChild(imgURL);
        todoListContainer.appendChild(todoContainer);
    }
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value
    }

    axios.post("https://api.vschool.io/kunzler/todo", newTodo).then(response => {
        todoListContainer.innerHTML = ""
        getData()
    }).catch(err => console.log(err))

})


// // POST //

// var newDataForDatabase = {
//     title: "New Todo"
// }
// axios.post("https://api.vschool.io/kunzler/todo", newDataForDatabase).then(function(response){

// })

// PUT //
// var updates = {
//     title: "I'm dome"
// }
//         // URL/ID   // Data to update with - {OBJ}
// axios.put("url/ID", updates).then(function(response){

// })

// // DELETE //
//             // url/ID
// axios.delete("URL/ID").then(function(reponse){

// })
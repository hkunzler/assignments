var axios = require("axios")

var todoList = document.getElementById('todo-container')

//
axios.get("https://api.vschool.io/kunzler/todo").then(function(response){
    var todos = response.data
    listTodos(todos)
}).catch(function(error){
    console.log("error")
})

function listTodos(todos){
    for(var i = 0; i < todos.length; i++){
        var title = document.createElement('h1')
        title.textContent = todos[i].title
        todoList.appendChild(title)
    }
}


// POST //

var newDataForDatabase = {
    title: "New Todo"
}
axios.post("https://api.vschool.io/kunzler/todo", newDataForDatabase).then(function(response){

})


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
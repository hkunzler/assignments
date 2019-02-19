

function editOption(e) {
  var updates = {
    title: "test"
    // toggle form
    // hidden until
  
  };
  axios
    .put(
      `https://api.vschool.io/kunzler/todo/${e.target.parentNode.todoID}`,
      updates
    )
    .then(function(response) {
      console.log(response);
      // todoListContainer.innerHTML = "";
      getData();
    });
}
// function uncheckbox(e) {
//   var updates = {
//     completed: false
//   };
//   axios
//     .put(
//       `https://api.vschool.io/kunzler/todo/${e.target.parentNode.todoID}`,
//       updates
//     )
//     .then(function (response) {
//       console.log(response);
//       // todoListContainer.innerHTML = "";
//       getData();
//     });
function checkbox(e) {
  var updates = {
    completed: e.target.checked
  };
  axios
    .put(
      `https://api.vschool.io/kunzler/todo/${e.target.parentNode.todoID}`,
      updates
    )
    .then(function (response) {
      console.log(response);
      todoListContainer.innerHTML = "";
      getData();
    });
}
function deleteOption(e) {
  // return ("delete");

  axios
    .delete(`https://api.vschool.io/kunzler/todo/${e.target.parentNode.todoID}`)
    .then(response => {
      // todoListContainer.innerHTML = "";
      e.target.parentNode.remove();
    });
}

const todoListContainer = document.getElementById("todo-container");

const todoForm = document["add-todo-form"];

function getData() {
  axios
    .get("https://api.vschool.io/kunzler/todo")
    .then(response => {
      const todos = response.data;
      console.log(todos);
      listTodos(todos);
    })
    .catch(err => console.log(err));
}

function listTodos(todosArr) {
  
  console.log(todosArr);
  //make 1 todo show up, then reuse that code to make all todos show up
  // const firstTodo = todosArr[0]

  for (let i = 0; i < todosArr.length; i++) {
    // Make it show up on the DOM
    // Create Elements
    const todoContainer = document.createElement("div");
    const title = document.createElement("h1");
    const price = document.createElement("p");
    const description = document.createElement("p");
    const imgUrl = document.createElement("img");


    var colorArray = ["#9F84BD", "#D81E5B", "#F0544F", "#C6D8D3"]
    todoContainer.style.background = colorArray[i % 4];
    // todoContainer.style.background = colorArray[randomNum];

    // Edit the element / Give it content
    todoContainer.classList.add("todo-container");
    todoContainer.todoID = todosArr[i]._id;
    title.textContent = todosArr[i].title;
    price.textContent = todosArr[i].price;
    description.textContent = todosArr[i].description;
    if (todosArr[i].completed === true) {
      // checkCompleted === checkCompleted;
      title.style.textDecoration = "line-through";
    }
    if (todosArr[i].completed === false) {
      title.style.textDecoration = "none";
    }

    //   <select name="options">
    //       <option value="edit">edit</option>
    //       <option value="delete">delete</option>
    //   </select>
    //   var options = travelForm.options.value

    //FORM DROPDOWN

    const formArray = ["Options", "edit", "delete"];

    const formOption = document.createElement("select");
    formOption.id = "formOption";
    todoContainer.appendChild(formOption);

    for (let i = 0; i < formArray.length; i++) {
      var option = document.createElement("option");
      option.value = formArray[i];
      option.text = formArray[i];
      option.name = "dropDown";

      formOption.appendChild(option);
    }

    formOption.addEventListener("change", function (e) {
      e.preventDefault();
      if (e.target.value === "delete") {
        deleteOption(e);
      } else if (e.target.value === "edit") {
        editOption(e);
      }
    });

    const checkCompleted = document.createElement("input");
    checkCompleted.setAttribute("type", "checkbox");
    todoContainer.appendChild(checkCompleted);
    if (todosArr[i].completed) {
      checkCompleted.checked = true
    

      // checkCompleted.setAttribute("type", "checkbox", "checked");
      
    }
    //

    checkCompleted.addEventListener("change", function (e) {
      checkbox(e);
    })
    // } else {
    //   title.style.textDecoration = "none";
    //   uncheckbox(e)
    // }
    if (checkCompleted.checked) {
      title.style.textDecoration = "line-through";
    }
      imgUrl.setAttribute("src", todosArr[i].imgUrl);
      imgUrl.style.height = "100px";
      imgUrl.style.width = "100px";
    
      // Append it to the DOM
      todoContainer.appendChild(title);
      todoContainer.appendChild(price);
      todoContainer.appendChild(description);
      todoContainer.appendChild(imgUrl);
      todoListContainer.appendChild(todoContainer);
    
  

    todoForm.addEventListener("submit", e => {
      e.preventDefault();
      const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
      };

      axios
        .post("https://api.vschool.io/kunzler/todo", newTodo)
        .then(response => {
          todoListContainer.innerHTML = "";
          getData();
        })
        .catch(err => console.log(err));
    });

    // PUT //
    // var updates = {
    //     title: "I'm dome"
    // }
    //         // URL/ID   // Data to update with - {OBJ}
    // axios.put("url/ID", updates).then(function(response){

    // })
  }
}
getData();
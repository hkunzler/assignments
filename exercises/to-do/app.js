var todoForm = document.todoForm
var todoContainer = document.getElementById('todo-list')

todoForm.addEventListener('submit', function(e){
    e.preventDefault()
    //clear out the current container
    // todoContainer.innerHTML = ''

    // //grab user input
    // var title = todoForm.title.value
    // todoForm.title.value = ''
    // //creat the element
    // var p = document.createElement('p')
    // //add content to the element
    // p.textContent = title
    // //append it to DOM
    // todoContainer.appendChild(p)

    // console.log(todoForm.favCandy.value)
    // console.log(todoForm.favMovie.value)
    var checkBoxes = todoForm.lifeMeaning
    var checkBoxValues = []

    for(var i = 0; i < checkBoxes.length; i++){
        if(checkBoxes[i].checked){
            checkBoxValues.push(checkBoxes[i].value)
        }
    }
    console.log(checkBoxValues)
})

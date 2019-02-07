var form = document.form

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    var firstName = form.fName.value
    var lastName = form.lName.value;
    var gender = form.gender.value


    var movie = form.movies.value

    var checkboxes = form.food
    var checkboxeValues = []

    for(var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            checkboxeValues.push(checkboxes[i].value)
        }
    }
    alert("first name: " + firstName + "\nlast name: " + lastName+ "\ngender: " + gender + "\nmovie: " + movie+ "\nfood: " + checkboxeValues)
})

// + "\nlast name: " + lastName + "\nage: " + age + "\ngender: " + gender + "\nmovie: " + movie + "\nfood: " + checkboxeValues
var form = document.airlineForm;
form.addEventListener("submit", function(e){
    e.preventDefault()
    var fname = form.firstName.value
    var lname = form.lastName.value
    var age = form.age.value
    var gender = form.gender.value
    var location = form.travelLocation.value
    var diet = [];

    for(var i = 0; i < 3; i++){
        if (form.food[i].checked === true) {
            diet.push(form.food[i].value);
        }
    }

    alert("First Name: " + fname + "\nLast Name: " + lname + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})



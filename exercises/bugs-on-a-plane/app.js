var form = document.airlineForm;
var submit = document.getElementById("submit");

submit.addEventListener("click", formAlert);

function formAlert() {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];
    if (form.food['vegan'].checked) {
        diet.push(form.food['vegan'].value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(form.food['gluten'].value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(form.food['paleo'].value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


// document.getElementById('submit').addEventListener("click", formAlert);
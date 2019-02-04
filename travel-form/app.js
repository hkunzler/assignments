var travelForm = document.travelForm
// var travelContainer = document.getElementById('travel-form-container')

travelForm.addEventListener('submit', function(e){
    e.preventDefault()
    var firstName = travelForm.firstName.value
    var lastName = travelForm.lastName.value
    var age = travelForm.age.value
    var gender = travelForm.gender.value
    var location = travelForm.location.value
    var dietaryRestrictions = travelForm.dietaryRestrictions
    var dietaryRestrictionsValues = []
    for(var i = 0; i < dietaryRestrictions.length; i++){
        if(dietaryRestrictions[i].checked){
            dietaryRestrictionsValues.push(dietaryRestrictions[i].value)
        }
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + dietaryRestrictionsValues)
})

// travelForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     travelContainer.innerHTML = ''
//     var titlePlaceholder = travelForm.title.value
//     travelForm.title.value = ''
//     var p = document.createElement('p')
//     p.textContent = titlePlaceholder
//     travelContainer.appendChild(p)

// })

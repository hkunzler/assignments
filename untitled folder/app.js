var form = document.form

form.addEventListener("submit", function(e){
    e.preventDefault()
    var fname = form.fname.value
    var lname = form.lname.value
    alert("your first name is: " + name + "\nlast name " + lname)
})
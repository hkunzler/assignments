window.onscroll = function() {myFunction()};

var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky")
  } else {
    menu.classList.remove("sticky");
  }
}
var form = document.form

form.addEventListener("submit", function(e){
    e.preventDefault()

    
    var fName = form.fName.value
    var lName = form.lName.value
    var message = form.message.value
    
    form.fName.value = ''
    form.lName.value = ''
    form.message.value = ''
    
    console.log("First Name: " + fName + "\nLast Name: " + lName + "\nMessage: " + message)
    
})
var hello = document.getElementById('hello')

console.log(hello)

var myH1 = document.createElement('h1')

myH1.textContent = "Hello, World!"

// myH1.innerHTML = "<h2>Hello World</h2"

var container = document.getElementById('container')

container.appendChild(myH1)

var pTag = document.getElementsByClassName('my-class')
pTag[0].classList.add('highlight')
pTag[0].classList.remove("highlight")

var myImg = document.createElement('img')
myImg.setAttribute("src", "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=max&w=500&q=60")
myImg.style.width = "200px"
myImg.style.height = "200px"
container.appendChild(myImg)

var helloBtn = document.getElementById("hello-btn")
            //1, What event
            //2. What do you want to happen on said event
helloBtn.addEventListener("click", sayHello)

function sayHello(){
    alert("Hello!")
}

//Anonymous function - functions that don't have a name
// helloBtn.addEventListener("click", function(event){
//     alert(event)
// })

// helloBtn.addEventListener("click", () => sayHello(e, "hello", param2))

helloBtn.addEventListener("click", sayHello)

window.addEventListener('keypress', function(event){
    if(event.which === 97){
        console.log("You pressed the A key")
    }
})

var form = document.myForm;

var nameInput = form.name;

var ageInput = form.age;

console.log(nameInput)

form.addEventListener("submit", function(event){
    event.preventDefault()
    alert("Hi, I am " + nameInput.value + ", and I am " + ageInput.value)
})
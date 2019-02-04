var mario = document.mario
var marioContainer = document.getElementById('marioContainer')

mario.addEventListener("submit", function(e){
    e.preventDefault()
    marioContainer.innerHTML = ''
    if(isNaN(parseInt(mario.goombas.value)) === true){
        mario.goombas.value = 0;
    } 
    if(isNaN(parseInt(mario.bobombs.value)) === true){
        mario.bobombs.value = 0;
    }
    if(isNaN(parseInt(mario.cheepcheeps.value)) === true){
        mario.cheepcheeps.value = 0;
    }
    var total = parseInt(mario.goombas.value) * 5 + parseInt(mario.bobombs.value) * 7 + parseInt(mario.cheepcheeps.value) * 11
    var totalBaddies = parseInt(mario.goombas.value) + parseInt(mario.bobombs.value)  + parseInt(mario.cheepcheeps.value)
    mario.goombas.value = ''
    mario.bobombs.value = ''
    mario.cheepcheeps.value = ''
    var h1 = document.createElement('h1')
    h1.textContent = "Total Baddies: " + totalBaddies
    marioContainer.appendChild(h1)
    var p = document.createElement('p')
    p.textContent = "Total Price: " + total
    marioContainer.appendChild(p)
})
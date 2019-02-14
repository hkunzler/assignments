var pageClick = document.getElementById('pageClick')

if (localStorage.counter) {
    counter = localStorage.counter;
  } else {
    counter = 0;
  }
  
pageClick.textContent = counter

window.addEventListener('click', function(){
    counter++
    pageClick.textContent = counter
    setInterval((localStorage.counter = counter), 3000)
})

// setTimeout(function(){ localStorage.counter = counter; }, 3000);


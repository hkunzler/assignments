document.getElementById('container').addEventListener('mouseover', mouseOver);
document.getElementById('container').addEventListener('mouseout', mouseOut);

function mouseOver() {
    document.getElementById("container").style.backgroundColor = "blue";
}

function mouseOut() {
    document.getElementById("container").style.backgroundColor = "white";
}

document.getElementById('container').addEventListener('mousedown', mouseDown);
document.getElementById('container').addEventListener('mouseup', mouseUp);

function mouseDown() {
    document.getElementById("container").style.backgroundColor = "red";
}

function mouseUp() {
    document.getElementById("container").style.backgroundColor = "yellow";
}

document.getElementById('container').addEventListener("dblclick", doubleClick);

function doubleClick() {
    document.getElementById('container').style.backgroundColor = "green";
}

window.onscroll = function () {
    onScroll()
};

function onScroll() {
    document.body.style.backgroundColor = "orange";
}

// document.addEventListener("onkeydown", function(event) {
//     var x = this.event.key;

//     // If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.
//     if (x == "a" || x == "A") { 
//       alert ("You pressed the 'A' key!");
//     }
//   }
//   }
document.addEventListener("keydown", myFunction);

function myFunction() {
    var color = event.key
    if (color === 'r' || color === 'R') {
        document.getElementById('container').style.backgroundColor = "red";
    } else if (color === 'b' || color === 'B') {
        document.getElementById('container').style.backgroundColor = "blue";
    } else if (color === 'y' || color === 'Y') {
        document.getElementById('container').style.backgroundColor = "yellow";
    } else if (color === 'g' || color === 'G') {
        document.getElementById('container').style.backgroundColor = "green";
    } else if (color === 'o' || color === 'O') {
        document.getElementById('container').style.backgroundColor = "orange";
    }
}
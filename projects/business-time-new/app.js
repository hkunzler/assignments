// toggle menu
var navBar = document.getElementById("navBar")
var icon = document.getElementsByClassName('icon')[0]
var socialMedia = document.getElementById('socialMedia')

icon.addEventListener("click", function (e) {
    for (var i = 0; i < document.getElementById("navBar").getElementsByTagName("a").length; i++) {
        document.getElementById("navBar").getElementsByTagName("a")[i].classList.toggle("hidden");
    }
})


// sticky nav bar

var sticky = navBar.offsetTop;

window.addEventListener("scroll", function (e) {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky")
    }
})

    // sticky media bar

    // var stickySide = socialMedia.offsetLeft;

    // window.addEventListener("scroll", function (e) {
    //     if (window.pageXOffset >= sticky) {
    //         socialMedia.classList.add("sticky")
    //     } else {
    //         socialMedia.classList.remove("sticky")
    //     }
    // })

    // return to top button
    if(document.documentElement.scrollTop > 20){
        document.getElementById("returnTop").style.display = "block"
    } else{
        document.getElementById("returnTop").style.display = "none"
    }

// return to top
var returnTop = document.getElementById("returnTop")

returnTop.addEventListener("click", function(e){
    document.documentElement.scrollTop = 0;
})


// // Promises:
// //      Resolve
// //      Reject

// function flipCoin() {
//     const num = Math.floor(Math.random() * 2)
//     if (num === 0) {
//         return "heads"
//     } else { 
//         return "tails"
//     }
// }

// function testFlipCoin(){
//     return new Promise((resolve, reject) => {
//         const side = flipCoin()
//         if (side === "heads") {
//             resolve("It was Heads!")
//         } else if (side === "tails") {
//             reject("It was Tails")
//         }
//     })
// }

// testFlipCoin().then(response => console.log("Response " + response))
//     .catch(error => console.log("Error: " + error))

function get(url) {
    const xhr = new XMLHttpRequest()
    
    xhr.open("GET", url)
    xhr.send()

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else if (xhr.readyState === 4 && xhr.status != 200) {
                reject("Error on the server")
            }
        }
    })
}

get("https://swapi.co/api/people")
    .then(response => console.log(response))
    .catch(error => console.log(error))
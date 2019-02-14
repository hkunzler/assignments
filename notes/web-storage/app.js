// Web Storage
    // Databases //
    // Cookies //

    // Local Storage
        // Permanent until deleted
    // Session Storage 
        // Deletes itself when

    // They can only store strings
        // Primitive data types store just fine (strings, numbers, booleans)
        // Complex data types need to be 'stringified' to be saved, and then
            // parsed when taken back

    //You can use setItem/getItem, or use '.' (dot) notation
// localStorage.setItem("name", "Joe")
localStorage.name = "Steve"
localStorage.setItem("age", 20)

var friends = ["Mary", "Bill", "Mark"]
var address = {
    city: "SLC",
    street: "123 Street",
    ST: "Utah" 
}

localStorage.setItem('friends', JSON.stringify(friends))
localStorage.setItem('address', JSON.stringify(address))

var name = localStorage.getItem('name')
var friendsArr = JSON.parse(localStorage.getItem('friends'))
var addressObj = JSON.parse(localStorage.getItem('address'))

console.log(name)
console.log(friendsArr)
console.log(addressObj)
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computers = 0;

for (var i = 0; i<officeItems.length; i++){
    if(officeItems[i]==="computer"){
        computers++;
    }
}
console.log(computers)
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computers = 0;

for (var i = 0; i<officeItems.length; i++){
    if(officeItems[i]==="computer"){
        computers++;
    }
}
console.log(computers)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
var pronoun;
var allowed;
var letThemIn;
  for(var i = 0; i <peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        allowed = " is not "; 
        letThemIn = " Do not let "
    } else{
        allowed = " is ";
        letThemIn = " Do no let "
    }
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
        pronoun = "him";
    } else {
        pronoun = "her";
    }
    
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + allowed + "old enough to see Mad Max Fury Road." + letThemIn  + pronoun + " in.")
      
  }

var array  = [2, 5, 435, 4, 3] // "The light is on"
 //var array  =   [1, 1, 1, 1, 3]   // "The light is on"
var sum = 0;  
for(var i = 0; i < array.length; i++){
    sum += array[i];
}
if(sum % 2 == 0){
    console.log("The light is off")
} else {
    console.log("The light is on")
}

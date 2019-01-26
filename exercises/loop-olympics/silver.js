var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
}

var names = [];
var occupations= [];

for(var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}
console.log(occupations);

var namesEveryOther = [];
var occupationsEveryOther= [];

for(var i = 0; i < peopleArray.length; i++){
    if(i % 2 === 0){
      namesEveryOther.push(peopleArray[i].name);
    } else{
     occupationsEveryOther.push(peopleArray[i].occupation);
    }
}
console.log(occupationsEveryOther);
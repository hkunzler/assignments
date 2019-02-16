function total(arr) {
  return arr.reduce((total, amount) => total + amount);
}

console.log(total([1, 2, 3])); // 6

function stringConcat(arr) {
  return arr.reduce((total, amount) => total + amount, "");
}

console.log(stringConcat([1, 2, 3])); // "123"

function totalVotes(arr) {
  return arr.reduce((total, amount) => (amount.voted ? ++total : total), 0);
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false }
];
console.log(totalVotes(voters)); // 7

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

const shoppingSpree = wishlist.reduce((a, b) => ({ price: a.price + b.price }));

console.log(shoppingSpree); // 227005


function flatten(arr) {
    return arr.reduce((a, b) => a.concat(b))
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];



var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    let youthCounter = 0;
    let youthVotedCounter = 0;
    let midVotes = 0;
    let mids = 0;
    let olds = 0;
    let oldVotes = 0;
    voters.reduce(function (a, b) {
        if (b.age <= 25) {
            youthCounter++
        } else if (b.age <= 35) {
            mids++
        } else if (b.age <= 55) {
            olds++
        }
        if (b.age <= 25 && b.voted) {
            youthVotedCounter++
        } else if (b.age <= 35 && b.voted) {
            midVotes++
        } else if (b.age <= 55 && b.voted) {
            oldVotes++
        }
        
    })
    return voted = {
        youthVotedCounter,
        youthCounter,
        mids,
        midVotes,
        olds,
        oldVotes
    }
    // var reduced = options.reduce(function (filtered, option) {
    //     if (option.assigned) {
    //         var someNewValue = { name: option.name, newProperty: 'Foo' }
    //         filtered.push(someNewValue);
    //     }
    //     return filtered;
    // }, []);
}


console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/
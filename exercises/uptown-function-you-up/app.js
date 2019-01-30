function uptownLyrics(lyrics){
    return lyrics.join(" ");
}
console.log(uptownLyrics(["This", "hit", "that", "ice", "cold", 
"Michelle", "Pfeiffer", "that", "white", 
"gold", "This", "one", "for", "them", 
"hood", "girls", "Them", "good", "girls", 
"straight", "masterpieces", "Stylin'", 
"whilen'", "livin'", "it", "up", "in", 
"the", "city", "Got", "Chucks", "on", 
"with", "Saint", "Laurent", "Gotta", "kiss", 
"myself", "I'm", "so", "pretty"]))

function uptownBackwardsLyrics(lyrics){
    return lyrics.reverse().join(" ");
}
console.log(uptownBackwardsLyrics(["This", "hit", "that", "ice", "cold", 
"Michelle", "Pfeiffer", "that", "white", 
"gold", "This", "one", "for", "them", 
"hood", "girls", "Them", "good", "girls", 
"straight", "masterpieces", "Stylin'", 
"whilen'", "livin'", "it", "up", "in", 
"the", "city", "Got", "Chucks", "on", 
"with", "Saint", "Laurent", "Gotta", "kiss", 
"myself", "I'm", "so", "pretty"]))

function uptownEveryOtherLyrics(lyrics){
    var newArray = [];
    for(var i = 0; i < lyrics.length; i+=2){
            newArray.push(lyrics[i])
    }
    return newArray.join(' ')
}
console.log(uptownEveryOtherLyrics(["This", "hit", "that", "ice", "cold", 
"Michelle", "Pfeiffer", "that", "white", 
"gold", "This", "one", "for", "them", 
"hood", "girls", "Them", "good", "girls", 
"straight", "masterpieces", "Stylin'", 
"whilen'", "livin'", "it", "up", "in", 
"the", "city", "Got", "Chucks", "on", 
"with", "Saint", "Laurent", "Gotta", "kiss", 
"myself", "I'm", "so", "pretty"]))

function uptownSwitchedLyrics(lyrics){
    var newArray = [];
    for(var i = 0; i < lyrics.length; i+=2){
        newArray.push(lyrics[i+1], lyrics[i])
    }
    return newArray.join(' ')
}
console.log(uptownSwitchedLyrics(["This", "hit", "that", "ice", "cold", 
"Michelle", "Pfeiffer", "that", "white", 
"gold", "This", "one", "for", "them", 
"hood", "girls", "Them", "good", "girls", 
"straight", "masterpieces", "Stylin'", 
"whilen'", "livin'", "it", "up", "in", 
"the", "city", "Got", "Chucks", "on", 
"with", "Saint", "Laurent", "Gotta", "kiss", 
"myself", "I'm", "so", "pretty"]))

function uptownRandomLyrics(lyrics){
    lyrics.sort(function(a, b){return 0.5 - Math.random()});
    return lyrics.join(' ')
}
console.log(uptownRandomLyrics(["This", "hit", "that", "ice", "cold", 
"Michelle", "Pfeiffer", "that", "white", 
"gold", "This", "one", "for", "them", 
"hood", "girls", "Them", "good", "girls", 
"straight", "masterpieces", "Stylin'", 
"whilen'", "livin'", "it", "up", "in", 
"the", "city", "Got", "Chucks", "on", 
"with", "Saint", "Laurent", "Gotta", "kiss", 
"myself", "I'm", "so", "pretty"]))
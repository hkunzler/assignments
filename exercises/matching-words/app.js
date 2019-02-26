const repeatingWords = (sentence) => {
    let input = {};
    let newSentence = [];

    sentence = sentence.split(' ')
    
    sentence.map(item => {
        if (!input[item])
            input[item] = 0;
        input[item] += 1;
    })

    Object.keys(input).map(value => (input[value] >= 2) && newSentence.push(value))

    return newSentence;
}

console.log(repeatingWords("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."));
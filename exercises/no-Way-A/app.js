function removeA(stringVariable) {
    stringArray = stringVariable.split('');
    stringVariable = stringVariable.toLowerCase();
    for(var i = 0; i < stringVariable.length; i++){
        if(stringVariable[i]==='a'){
            stringArray.splice(i, 1);
        }
    }
    console.log(stringArray.join(''))
}

removeA("Aye matey!")

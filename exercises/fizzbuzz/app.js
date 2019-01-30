function fizzbuzz(){
    var fizzbuzz = {
        fizzbuzz: 0,
        fizz: 0,
        buzz: 0,
    }
    for(var i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz")
            fizzbuzz.fizzbuzz++
        } else if(i % 3 === 0){
            console.log("fizz")
            fizzbuzz.fizz++
        } else if(i % 5 === 0){
            console.log("buzz")
            fizzbuzz.buzz++
        } else {
            console.log(i)
        }
    }
    console.log(fizzbuzz)
}

fizzbuzz()
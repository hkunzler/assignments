function balanceParentheses(str) {
    for (let i = 0; i < str.length; i++){
        if (str[i] === "(") {
            
            for (let j = i; j < str.length; j++) {
                if (str[j] === ")") {
                    console.log(true);
                    
                }
                }
                
            }
        
        }
    }
}

balanceParentheses("()()") // Output: true
// balanceParentheses("(())") // Output:  true
// balanceParentheses("()))") // Output:  false
// balanceParentheses(")()(") // Output:  false
// balanceParentheses("())(") // Output:  false
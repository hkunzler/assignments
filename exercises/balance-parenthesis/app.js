function balanceParentheses(str) {
    const stack = []
    const parentheses = {
        "(": ")"
    }
    for (let i = 0; i < str.length; i++) {
        const temp = str[i]
        if (parentheses[temp] !== undefined) {
            stack.push(parentheses[temp])
        } else if (stack.length === 0 || temp !== stack[stack.length - 1]) {
                return false
            } else {
            stack.pop()
        }
    }
    return stack.length === 0
}

console.log(balanceParentheses("()()") );
// balanceParentheses("()()") // Output: true
// balanceParentheses("(())") // Output:  true
// balanceParentheses("()))") // Output:  false
// balanceParentheses(")()(") // Output:  false
// balanceParentheses("())(") // Output:  false
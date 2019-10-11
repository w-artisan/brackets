module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    let stack = [];
    const openBrackets = bracketsConfig.map(first => first[0]); //[ '(', '{', '[' ];
    const closedBrackets = bracketsConfig.map(second => second[1]); //[ ')', '}', ']' ];

    // 1. add open bracket element to stack
    // 2. check and delete equal elements from the stack
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < openBrackets.length; j++) {
            if (openBrackets[j] === str[i]) {
                stack.push(str[i]);
                // check equal elements
                if (
                    openBrackets[j] === closedBrackets[j] &&
                    stack[stack.length - 1] === stack[stack.length - 2]
                ) {
                    {
                        // delete equal elements from the stack
                        stack.pop();
                        stack.pop();
                    }
                }
            }
            // 3. check open-closed brakets which are not equals
            if (
                openBrackets[j] !== closedBrackets[j] &&
                str[i] === closedBrackets[j]
            ) {
                openBrackets[j] === stack[stack.length - 1]
                    ? stack.pop()
                    : stack;
            }
        }
    }
    // if stack not empty -> false
    return !stack.length;
};

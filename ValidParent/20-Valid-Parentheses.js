/**
 * @param {string} s
 * @return {boolean}
 */

/*
Question: 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

const isValid = (s) => {
    const brackets = []

    for (let i = 0; i < s.length; i++) {
        //push the closing bracket into an array if we see the opening one
        if (s[i] === '(') brackets.push(')')
        else if (s[i] === '[') brackets.push(']')
        else if (s[i] === '{') brackets.push('}')
        //if the element in the array doesnt equal the next element in the array return false
        else if (brackets.pop() !== s[i]) return false  
    }

    //if there is nothing in the array it is value and return true
    return !brackets.length
}
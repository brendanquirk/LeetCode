/**
 * @param {string} s
 * @return {character}
 */

//Question:

//Given a string s consisting of lowercase English letters, return the first letter to appear twice.

const repeatedCharacter = (s) => {
    let charMap = new Map()

    // loop through the given string
    for (let char of s) {
        // if the charMap we created already has the character, return the current character
        if (charMap.has(char)) return char

        //set the character in the charMap to 1
        charMap.set(char, 1)
    }
}
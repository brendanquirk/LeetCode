/**
 * @param {string} s
 * @return {boolean}
 */

 /*
Question: 

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

const isPalindrome = (s) => {
    //strip string of all non aplha numeric characters using a regex and make everything lowercase to compare later
    let strippedString = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    //reverse the strippedString by splitting it at each character, reversing the array, and rejoining the string at each character
    let reversedString = strippedString.split('').reverse().join('').toLowerCase()
    //return true/false comparing the two strings
    return strippedString === reversedString
}
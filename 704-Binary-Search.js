/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 /*
 Question: 

 Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/


const search = (nums, target) => {
    //set bottom and top index in the array
    let lowIndex = 0
    let highIndex = nums.length - 1

    //run as long as the low index is less than or equal to the high index
    while (lowIndex <= highIndex) {
        //set midpoint between the low and high index
        let midIndex = Math.floor((lowIndex + highIndex) / 2)

        //if the target number is at the midpoint index return the index, we found the target
        if (nums[midIndex] === target) return midIndex
        else if (target < nums[midIndex]) {
            // if the target num is less than the number found at the middle index set the high index to the middle index minus one to cut our next search in half
            highIndex = midIndex - 1
        } else {
            // same as above but raise the low index to the mid index plus one
            lowIndex = midIndex + 1
        }
        
    }
    return -1
}
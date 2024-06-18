/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Question:

//  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target)=>{
    let numMap = new Map()

    for (let i = 0; i < nums.length; i++){
        //set diff to check map
        let diff = target - nums[i]

        //if the map contains the diff as a key return the current index and the value from map
        if (numMap.has(diff)){
            return [i, numMap.get(diff)]
        }
        //set a new kv pair in the map to the arr num as the key and the index num as the value
        numMap.set(nums[i], i)
    }
}
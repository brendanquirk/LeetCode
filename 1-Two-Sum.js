/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

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
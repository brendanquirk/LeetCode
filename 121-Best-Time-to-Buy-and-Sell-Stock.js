/**
 * @param {number[]} prices
 * @return {number}
 */

 /*
Question: 

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

const maxProfit = (prices) => {
    //set initial lowest price
    let lowest = prices[0]
    //set max profit to 0 initially
    let maxProfit = 0

    //loop through prices
    for (let i = 0; i < prices.length; i++) {
        //if the current price is lower than the current lowest set lowest to the current price
        if (prices[i] < lowest) lowest = prices[i]
        //set maxProfit to whatever is more, the current maxProfit or the current price minus the lowest buy price
        maxProfit = Math.max(maxProfit, prices[i] - lowest)
    }
    return maxProfit
}
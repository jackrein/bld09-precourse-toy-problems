/*
  Say you have an array for which the ith element is the price of a given stock on day i.
  
  If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
  write a function to find the maximum profit.
  
  Note that you cannot sell a stock before you buy one.

  Input: [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

  Input: [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.       
*/

const maxProfit = (array) => {
  // given array of stock prices indexed on day
  array.reverse();
  // create result value
  let profit = 0;
  // find the highest num that's after the lowest num
    // find the largest difference between 2 nums in ordered array
      console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if ((array[i] - array[j]) > profit && j > i) {
        profit = array[i] - array[j];
      }
      console.log(array[i], array[j], profit);
    }
  }
  // return result value
  return profit;
};

//Do not change this line or the function name
module.exports = maxProfit;

//Run this line to check your answer
//npm test ./max-profit/maxProfit.test.js

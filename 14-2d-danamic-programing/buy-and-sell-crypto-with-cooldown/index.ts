/**
 * Buy and Sell Crypto with Cooldown - Medium
 * 
 * https://neetcode.io/problems/buy-and-sell-crypto-with-cooldown
 * 
 * You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
 * 
 * You may buy and sell one NeetCoin multiple times with the following restrictions:
 * 
 * 1. After you sell your NeetCoin, you cannot buy another one on the next day (i.e., there is a cooldown period of one day).
 * 2. You may only own at most one NeetCoin at a time.
 * 3. You may complete as many transactions as you like.
 * 
 * Return the maximum profit you can achieve.
 * 
 * Example 1:
 * 
 * Input: prices = [1,3,4,0,4]
 * Output: 6
 * Explanation: Buy on day 0 (price = 1) and sell on day 1 (price = 3), profit = 3-1 = 2. 
 * Then buy on day 3 (price = 0) and sell on day 4 (price = 4), profit = 4-0 = 4.
 * Total profit is 2 + 4 = 6.
 * 
 * Example 2:
 * 
 * Input: prices = [1]
 * Output: 0
 * 
 * Constraints:
 * 1 <= prices.length <= 5000
 * 0 <= prices[i] <= 1000
 */

/**
 * Buy and Sell Crypto with Cooldown - Medium
 * 
 * https://neetcode.io/problems/buy-and-sell-crypto-with-cooldown
 * 
 * You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
 * 
 * You may buy and sell one NeetCoin multiple times with the following restrictions:
 * 
 * 1. After you sell your NeetCoin, you cannot buy another one on the next day (i.e., there is a cooldown period of one day).
 * 2. You may only own at most one NeetCoin at a time.
 * 3. You may complete as many transactions as you like.
 * 
 * Return the maximum profit you can achieve.
 * 
 * Example 1:
 * 
 * Input: prices = [1,3,4,0,4]
 * Output: 6
 * Explanation: Buy on day 0 (price = 1) and sell on day 1 (price = 3), profit = 3-1 = 2. 
 * Then buy on day 3 (price = 0) and sell on day 4 (price = 4), profit = 4-0 = 4.
 * Total profit is 2 + 4 = 6.
 * 
 * Example 2:
 * 
 * Input: prices = [1]
 * Output: 0
 * 
 * Constraints:
 * 1 <= prices.length <= 5000
 * 0 <= prices[i] <= 1000
 */


export function maxProfit(prices: number[]): number {
    const n = prices.length;
    if (n === 0) return 0;

    // Step 1: Define state table, each day has three states:
    // dp[i][0]: max profit on day i if holding a coin
    // dp[i][1]: max profit on day i if just sold 
    // dp[i][2]: max profit on day i if resting
    const dp = Array.from({ length: n }, () => [0, 0, 0]);

    // Step 2: Initialize the base cases for day 0
    dp[0][0] = -prices[0]; // Buying on the first day
    dp[0][1] = 0;          // Not possible to sell on the first day
    dp[0][2] = 0;          // Resting with no profit on the first day

    // Step 3: Fill the state table for subsequent days
    for (let i = 1; i < n; i++) {
        // State transition for holding a coin:
        // Either we continue holding from yesterday or buy today after resting
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);

        // State transition for selling a coin:
        // We can only sell today if we were holding a coin yesterday
        dp[i][1] = dp[i - 1][0] + prices[i];

        // State transition for resting:
        // Either we rest from a sell yesterday or continue resting from yesterday
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
    }

    // Step 4: Return the maximum profit achievable on the last day
    // This can either be from having just sold or resting (since holding would imply we haven't sold)
    return Math.max(dp[n - 1][1], dp[n - 1][2]);
}

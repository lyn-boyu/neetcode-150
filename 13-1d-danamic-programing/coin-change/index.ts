/**
 * Coin Change - Medium
 * 
 * https://neetcode.io/problems/coin-change
 * 
 * You are given an integer array coins representing coins of different denominations (e.g. 1 dollar, 5 dollars, etc)
 * and an integer amount representing a target amount of money.
 * 
 * Return the fewest number of coins that you need to make up the exact target amount.
 * If it is impossible to make up the amount, return -1.
 * 
 * You may assume that you have an unlimited number of each coin.
 * 
 * Example 1:
 * Input: coins = [1,5,10], amount = 12
 * Output: 3
 * Explanation: 12 = 10 + 1 + 1. Note that we do not have to use every kind coin available.
 * 
 * Example 2:
 * Input: coins = [2], amount = 3
 * Output: -1
 * Explanation: The amount of 3 cannot be made up with coins of 2.
 * 
 * Example 3:
 * Input: coins = [1], amount = 0
 * Output: 0
 * Explanation: Choosing 0 coins is a valid way to make up 0.
 * 
 * Constraints:
 * 1 <= coins.length <= 10
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 10000
 */

export function coinChange(coins: number[], amount: number): number {
    // Step 1: Initialize state table
    // 1.1: Define the state table with the size of `amount + 1`
    const dp = new Array(amount + 1).fill(Infinity);
    // 1.2: Base case - to reach amount `0`, we need `0` coins
    dp[0] = 0;

    // Step 2: Fill the state table by iterating through each coin and each amount
    for (let coin of coins) {
        // 2.1: Iterate through each amount starting from the value of the current coin
        for (let i = coin; i <= amount; i++) {
            // 2.2: Update dp[i] as the minimum number of coins needed to reach `i`
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    // Step 3: Return the result - if `dp[amount]` is Infinity, it means it's not possible to form `amount` with given coins
    return dp[amount] === Infinity ? -1 : dp[amount];
}

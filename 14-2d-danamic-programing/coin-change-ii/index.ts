/**
 * Coin Change II - Medium
 * 
 * https://neetcode.io/problems/coin-change-ii
 * 
 * You are given an integer array `coins` representing coins of different denominations 
 * (e.g. 1 dollar, 5 dollars, etc) and an integer `amount` representing a target amount of money.
 * 
 * Return the number of distinct combinations that total up to `amount`. If it's impossible 
 * to make up the amount, return 0.
 * 
 * You may assume that you have an unlimited number of each coin and that each value in `coins` is unique.
 * 
 * Example 1:
 * 
 * Input: amount = 4, coins = [1,2,3]
 * Output: 4
 * Explanation:
 * 1+1+1+1 = 4
 * 1+1+2 = 4
 * 2+2 = 4
 * 1+3 = 4
 * 
 * Example 2:
 * 
 * Input: amount = 7, coins = [2,4]
 * Output: 0
 * Explanation: No valid combination can sum up to 7.
 * 
 * Constraints:
 * - 1 <= coins.length <= 100
 * - 1 <= coins[i] <= 1000
 * - 0 <= amount <= 1000
 */


export function coinChangeII(amount: number, coins: number[]): number {
    // Step 1: Initialize the state table
    // dp[i] represents the number of ways to make amount 'i' using the given coins
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1; // There is one way to make amount 0 (use no coins)

    // Step 2: Fill the state table using each coin
    // Iterate over each coin and update the dp array
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            // Update the number of ways to make amount 'i' by adding the current coin
            dp[i] += dp[i - coin];
        }
    }

    // Step 3: Return the number of ways to make the target amount
    return dp[amount];
}

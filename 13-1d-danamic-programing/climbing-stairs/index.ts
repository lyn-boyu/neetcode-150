/**
 * Climbing Stairs - Easy
 * 
 * https://neetcode.io/problems/climbing-stairs
 * 
 * You are given an integer `n` representing the number of steps to reach the top of a staircase. 
 * You can climb with either 1 or 2 steps at a time.
 * Return the number of distinct ways to climb to the top of the staircase.
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation:
 * - 1 + 1 = 2
 * - 2 = 2
 * 
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation:
 * - 1 + 1 + 1 = 3
 * - 1 + 2 = 3
 * - 2 + 1 = 3
 * 
 * Constraints:
 * - 1 <= n <= 30
 */
export function climbStairs(n: number): number {
    // Step 1: Process the base cases
    if (n === 1) return 1;
    if (n === 2) return 2;

    // Step 2: Define the state table to store the number of ways to reach each step
    const dp = new Array(n + 1).fill(0);

    // Step 2.1: Initialize the base states
    dp[1] = 1;
    dp[2] = 2;

    // Step 3: Fill the state table according to the state transition equation
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    // Step 4: Return the number of ways to reach the nth step
    return dp[n];
}

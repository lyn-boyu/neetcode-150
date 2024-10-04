/**
 * Min Cost Climbing Stairs - Easy
 * 
 * https://neetcode.io/problems/min-cost-climbing-stairs
 * 
 * You are given an array of integers cost where cost[i] is the cost of taking a step from the ith floor of a staircase.
 * After paying the cost, you can step to either the (i + 1)th floor or the (i + 2)th floor.
 * You may choose to start at the index 0 or the index 1 floor.
 * Return the minimum cost to reach the top of the staircase, i.e. just past the last index in cost.
 * 
 * Example 1:
 * Input: cost = [1,2,3]
 * Output: 2
 * Explanation: We can start at index = 1 and pay the cost of cost[1] = 2 and take two steps to reach the top. 
 * The total cost is 2.
 * 
 * Example 2:
 * Input: cost = [1,2,1,2,1,1,1]
 * Output: 4
 * Explanation: Start at index = 0.
 * Pay the cost of cost[0] = 1 and take two steps to reach index = 2.
 * Pay the cost of cost[2] = 1 and take two steps to reach index = 4.
 * Pay the cost of cost[4] = 1 and take two steps to reach index = 6.
 * Pay the cost of cost[6] = 1 and take one step to reach the top.
 * The total cost is 4.
 * 
 * Constraints:
 * - 2 <= cost.length <= 100
 * - 0 <= cost[i] <= 100
 */

export function minCostClimbingStairs(cost: number[]): number {
    // Step 1: Define the state table to store the minimum cost to reach each step
    const dp = new Array(cost.length + 1).fill(0);

    // Step 2: Fill the state table according to the state transition function
    // The base case is to start from either index 0 or index 1
    for (let i = 2; i <= cost.length; i++) {
        // Calculate the minimum cost to reach step i from either step i-1 or step i-2
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    // Step 3: Return the cost to reach the top (which is just beyond the last index)
    return dp[cost.length];
}

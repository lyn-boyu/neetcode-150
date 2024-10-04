/**
 * House Robber II - Medium
 * 
 * https://neetcode.io/problems/house-robber-ii
 * 
 * You are given an integer array nums where nums[i] represents the amount of money the ith house has. 
 * The houses are arranged in a circle, i.e. the first house and the last house are neighbors.
 * You are planning to rob money from the houses, but you cannot rob two adjacent houses because the security system will automatically alert the police if two adjacent houses were both broken into.
 * Return the maximum amount of money you can rob without alerting the police.
 * 
 * Example 1:
 * Input: nums = [3,4,3]
 * Output: 4
 * Explanation: You cannot rob nums[0] + nums[2] = 6 because nums[0] and nums[2] are adjacent houses. The maximum you can rob is nums[1] = 4.
 * 
 * Example 2:
 * Input: nums = [2,9,8,3,6]
 * Output: 15
 * Explanation: You cannot rob nums[0] + nums[2] + nums[4] = 16 because nums[0] and nums[4] are adjacent houses. The maximum you can rob is nums[1] + nums[4] = 15.
 * 
 * Constraints:
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 */

export function rob(nums: number[]): number {
    // Step 1: Handle base cases
    if (nums.length === 1) return nums[0]; // If there's only one house, return its value

    // Step 2: Helper function to find the maximum robbery amount for a linear array of houses
    const maxRob = (houses: number[]): number => {
        // 2.1: Define the state table to store the max value robbed up to each house
        const dp = new Array(houses.length + 1).fill(0);

        // 2.2: Initialize the base states
        dp[1] = houses[0]; // The first house can be robbed as is

        // 2.3: Fill the state table using the state transition equation
        for (let i = 2; i <= houses.length; i++) {
            const currentHouseIdx = i - 1; // Adjust index for 1-based state table
            // Compare not robbing the current house vs robbing the current house
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[currentHouseIdx]);
        }

        return dp[houses.length]; // Return the maximum value robbed from all houses
    };

    // Step 3: Consider two scenarios - excluding either the first or the last house
    const robWithoutFirstHouse = maxRob(nums.slice(1)); // Rob houses excluding the first one
    const robWithoutLastHouse = maxRob(nums.slice(0, -1)); // Rob houses excluding the last one

    // Step 4: Return the maximum value of both scenarios
    return Math.max(robWithoutFirstHouse, robWithoutLastHouse);
}

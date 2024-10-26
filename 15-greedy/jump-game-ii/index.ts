/**
 * Jump Game II - Medium
 * https://neetcode.io/problems/jump-game-ii
 * 
 * You are given an array of integers nums, where nums[i] represents the maximum length of a jump towards the right from index i. 
 * For example, if you are at nums[i], you can jump to any index i + j where:
 *   j <= nums[i]
 *   i + j < nums.length
 * 
 * You are initially positioned at nums[0].
 * 
 * Return the minimum number of jumps to reach the last position in the array (index nums.length - 1). You may assume there is always a valid answer.
 * 
 * Example 1:
 * Input: nums = [2, 4, 1, 1, 1, 1]
 * Output: 2
 * Explanation: Jump from index 0 to index 1, then jump from index 1 to the last index.
 * ┌───┬───┬───┬───┬───┬───┐
 * │ 2 │ 4 │ 1 │ 1 │ 1 │ 1 │
 * └───┴───┴───┴───┴───┴───┘
 *       ^               ^
 * Jump from 0 → 1, then 1 → last index
 * Example 2:
 * Input: nums = [2, 1, 2, 1, 0]
 * Output: 2
 * Explanation: Jump from index 0 to index 2, then jump from index 2 to the last index.
 * 
 * 
 * Constraints:
 * - 1 <= nums.length <= 1000
 * - 0 <= nums[i] <= 100
 */

export function jump(nums: number[]): number {
    // Step 1: Initialize tracking variables and jump counter
    let jumps = 0, maxReach = 0, currentEnd = 0;

    // Step 2: Traverse the array, finding the farthest reachable index within the current jump range
    for (let i = 0; i < nums.length - 1; i++) {
        // Update `maxReach` to the farthest index reachable from the current index `i`
        maxReach = Math.max(maxReach, nums[i] + i);

        // If we've reached the end of the current jump range, increment the jump count
        if (i === currentEnd) {
            jumps += 1;
            currentEnd = maxReach;

            // Early exit if `currentEnd` already reaches or exceeds the last index
            if (maxReach >= nums.length - 1) {
                return jumps;
            }
        }
    }

    // Step 3: Return the total number of jumps needed to reach the last index
    return jumps;
}

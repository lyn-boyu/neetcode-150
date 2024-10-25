/**
 * Jump Game - Medium
 * https://neetcode.io/problems/jump-game
 * 
 * Given an integer array nums where each element nums[i] indicates your maximum jump length at that position.
 * 
 * Return true if you can reach the last index starting from index 0, or false otherwise.
 * 
 * Example 1:
 * Input: nums = [1, 2, 0, 1, 0]
 * Output: true
 * Explanation: 
 * Starting at index 0, you can jump 1 step to reach index 1 (max jump from index 1 is 2).
 * From index 1,  jump 2 steps to reach index 3 (max jump from index 3 is 1)
 * From index 3,  jump 1 steps to reach the last index (index 4).
 * 
 * Example 2:
 * Input: nums = [3, 2, 1, 0, 4]
 * Output: false
 * Explanation: No matter how you jump, you cannot reach the last index because index 3 is zero.
 * 
 * ┌───┬───┬───┬───┬───┐
 * │ 3 │ 2 │ 1 │ 0 │ 4 │
 * └───┴───┴───┴───┴───┘
 *                ^
 * If you reach this point, it's impossible to jump to the end.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - 0 <= nums[i] <= 10^5
 */

export function canJump(nums: number[]): boolean {
    return false
}



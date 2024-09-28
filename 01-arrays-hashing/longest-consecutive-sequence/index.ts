/**
 * Longest Consecutive Sequence - Medium
 * 
 * https://neetcode.io/problems/longest-consecutive-sequence
 * 
 * Given an array of integers `nums`, return the length of the longest consecutive sequence of elements.
 * A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.
 * You must write an algorithm that runs in O(n) time.
 * 
 * Example 1:
 * Input: nums = [2, 20, 4, 10, 3, 4, 5]
 * Output: 4
 * Explanation: The longest consecutive sequence is [2, 3, 4, 5].
 * 
 * Example 2:
 * Input: nums = [0, 3, 2, 5, 4, 6, 1, 1]
 * Output: 7
 * 
 * Constraints:
 * - 0 <= nums.length <= 1000
 * - -10^9 <= nums[i] <= 10^9
 * 
 * Solution:
 * - Use a set to store unique numbers from the array.
 * - Iterate over each number, and check if it is the start of a sequence by checking if `num - 1` exists in the set.
 * - If it is the start of a sequence, count the length of the sequence by checking consecutive elements.
 * - Track the maximum length of consecutive sequences found.
 */

export function longestConsecutive(nums: number[]): number {
    return -1
}

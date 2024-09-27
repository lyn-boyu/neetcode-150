/**
 * Binary Search - Easy
 * 
 * https://neetcode.io/problems/binary-search
 * 
 * You are given an array of distinct integers `nums`, sorted in ascending order, and an integer `target`.
 * Implement a function to search for `target` within `nums`. If it exists, then return its index, otherwise return `-1`.
 * 
 * Your solution must run in O(logn) time.
 * 
 * Example 1:
 * Input: nums = [-1, 0, 2, 4, 6, 8], target = 4
 * Output: 3
 * Explanation: nums[3] is 4, which matches the target.
 * 
 * Example 2:
 * Input: nums = [-1, 0, 2, 4, 6, 8], target = 3
 * Output: -1
 * Explanation: 3 is not present in nums, so return -1.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10000
 * - -10000 <= nums[i], target <= 10000
 */
export function binarySearch(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1
    // need comparation when left and right are equal
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            // move search to left part
            right = mid - 1
        } else {
            // move search to right part
            left = mid + 1
        }
    }

    return -1; // target not found
}

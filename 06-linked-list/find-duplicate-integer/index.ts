/**
 * Find Duplicate Integer - Medium
 * 
 * https://neetcode.io/problems/find-duplicate-integer
 * 
 * You are given an array of integers nums containing n + 1 integers.
 * Each integer in nums is in the range [1, n] inclusive.
 * 
 * Every integer appears exactly once, except for one integer which appears two or more times.
 * Return the integer that appears more than once.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,2,2]
 * Output: 2
 * 
 * Example 2:
 * 
 * Input: nums = [1,2,3,4,4]
 * Output: 4
 * 
 * Follow-up: Can you solve the problem without modifying the array nums and using O(1) extra space?
 * 
 * Constraints:
 * 
 * 1 <= n <= 10000
 * nums.length == n + 1
 * 1 <= nums[i] <= n
 */

export function findDuplicate(nums: number[]): number {
    // init two pointer
    let slow = nums[0]
    let fast = nums[0]

    while (true) {

        slow = nums[slow] // move one step each time
        fast = nums[nums[fast]] // move two step each time

        if (slow === fast) {
            break
        }
    }

    // move slow back to the begginning
    slow = nums[0]

    while (slow !== fast) {
        slow = nums[slow] // move one step each time
        fast = nums[fast] // move one step each time
    }

    return slow
}

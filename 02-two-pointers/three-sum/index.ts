/**
 * Three Integer Sum - Medium
 * 
 * https://neetcode.io/problems/three-sum
 * 
 * Given an integer array `nums`, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0,
 * and the indices i, j, and k are all distinct.
 * 
 * The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
 * 
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * 
 * Example 2:
 * Input: nums = [0,1,1]
 * Output: []
 * 
 * Example 3:
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * 
 * Constraints:
 * - 3 <= nums.length <= 1000
 * - -10^5 <= nums[i] <= 10^5
 * 
 * Solution:
 * 1. Sort the array.
 * 2. For each element, use two pointers to find two other numbers that sum up to the negative of that element.
 * 3. Skip duplicates to ensure the triplets are unique.
 */

export function threeSum(nums: number[]): number[][] {
    return [];
}

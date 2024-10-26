/**
 * Maximum Subarray - Medium
 * https://neetcode.io/problems/maximum-subarray
 * 
 * Given an array of integers nums, find the subarray with the largest sum and return the sum.
 * 
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * 
 * Example 1:
 * Input: nums = [2, -3, 4, -2, 2, 1, -1, 4]
 * Output: 8
 * Explanation: The subarray [4, -2, 2, 1, -1, 4] has the largest sum of 8.
 * ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
 * │  2  │ -3  │  4  │ -2  │  2  │  1  │ -1  │  4  │
 * └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
 *           Maximum subarray is [4, -2, 2, 1, -1, 4]
 * Example 2:
 * Input: nums = [-1]
 * Output: -1
 * Explanation: Since there's only one element, the maximum subarray is the element itself.
 * 
 * 
 * Constraints:
 * - 1 <= nums.length <= 1000
 * - -1000 <= nums[i] <= 1000
 */

export function maxSubArray(nums: number[]): number {
    // Step 1: Initialize maxSum and currentSum with the first element
    let currentSum = nums[0];
    let maxSum = currentSum;

    // Step 2: Traverse the array, updating maxSum and currentSum
    for (let i = 1; i < nums.length; i++) {
        // 2.1: Update currentSum to either continue with nums[i] or start fresh from nums[i]
        currentSum = Math.max(currentSum + nums[i], nums[i]);

        // 2.2: Update maxSum if currentSum is greater than the current maxSum
        maxSum = Math.max(currentSum, maxSum);
    }

    // Step 3: Return the maximum subarray sum
    return maxSum;
}


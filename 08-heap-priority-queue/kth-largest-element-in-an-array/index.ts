/**
 * Kth Largest Element in an Array - Medium
 * 
 * https://neetcode.io/problems/kth-largest-element-in-an-array
 * 
 * Given an unsorted array of integers `nums` and an integer `k`, return the `k`th largest element in the array.
 * 
 * By `k`th largest element, we mean the `k`th largest element in the sorted order, not the `k`th distinct element.
 * 
 * Follow-up: Can you solve it without sorting?
 * 
 * Example 1:
 * Input: nums = [2, 3, 1, 5, 4], k = 2
 * Output: 4
 * 
 * Example 2:
 * Input: nums = [2, 3, 1, 1, 5, 5, 4], k = 3
 * Output: 4
 * 
 * Constraints:
 * - 1 <= k <= nums.length <= 10000
 * - -1000 <= nums[i] <= 1000
 */

export function findKthLargest(nums: number[], k: number): number {
    const minHeap: number[] = []

    for (let num of nums) {
        if (minHeap.length < k) {
            minHeap.push(num)
        } else if (minHeap[0] < num) {
            minHeap[0] = num
        }

        minHeap.sort((a, b) => a - b)
    }

    return minHeap[0]
}

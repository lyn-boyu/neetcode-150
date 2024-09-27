/**
 * Top K Frequent Elements - Medium
 * 
 * https://neetcode.io/problems/top-k-frequent-elements
 * 
 * Given an integer array nums and an integer k, return the k most frequent elements within the array.
 * 
 * The test cases are generated such that the answer is always unique.
 * 
 * Example 1:
 * Input: nums = [1,2,2,3,3,3], k = 2
 * Output: [2,3]
 * 
 * Example 2:
 * Input: nums = [7,7], k = 1
 * Output: [7]
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -1000 <= nums[i] <= 1000
 * - 1 <= k <= number of distinct elements in nums
 */

export function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>()

    for (let num of nums) {
        const freq = freqMap.get(num) ?? 0 + 1
        freqMap.set(num, freq);
    }

    return Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(([num]) => (num))
}

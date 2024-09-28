/**
 * Two Integer Sum II - Medium
 * 
 * https://neetcode.io/problems/two-integer-sum-ii
 * 
 * Given an array of integers `numbers` that is sorted in non-decreasing order.
 * Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number `target` and index1 < index2.
 * Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
 * 
 * There will always be exactly one valid solution.
 * 
 * Your solution must use O(1) additional space.
 * 
 * Example 1:
 * Input: numbers = [1, 2, 3, 4], target = 3
 * Output: [1, 2]
 * 
 * Explanation:
 * The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].
 * 
 * Constraints:
 * - 2 <= numbers.length <= 1000
 * - -1000 <= numbers[i] <= 1000
 * - -1000 <= target <= 1000
 * 
 * Solution:
 * - Use the two-pointer technique to find the target sum.
 * - Start with two pointers, one at the beginning and one at the end of the array, and adjust them based on the sum.
 * - Ensure the solution is O(1) in additional space.
 */

export function twoSum(numbers: number[], target: number): number[] {
    let left = 0
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }

    return []; // This line should never be reached due to the assumption that there is always a valid solution
}

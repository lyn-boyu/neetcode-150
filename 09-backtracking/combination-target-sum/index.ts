/**
 * Combination Target Sum - Medium
 * https://neetcode.io/problems/combination-target-sum
 * 
 * Given an array of distinct integers nums and a target integer target,
 * return a list of all unique combinations of nums where the chosen numbers sum to target.
 * The same number may be chosen from nums an unlimited number of times.
 * 
 * Example 1:
 * Input: nums = [2,5,6,9], target = 9
 * Output: [[2,2,5],[9]]
 * 
 * Example 2:
 * Input: nums = [3,4,5], target = 16
 * Output: [[3,3,3,3,4],[3,3,5,5],[4,4,4,4],[3,4,4,5]]
 * 
 * Example 3:
 * Input: nums = [3], target = 5
 * Output: []
 * 
 * Constraints:
 * - All elements of nums are distinct.
 * - 1 <= nums.length <= 20
 * - 2 <= nums[i] <= 30
 * - 2 <= target <= 30
 */

export function combinationSum(nums: number[], target: number): number[][] {
    const result: number[][] = []
    
    // define the helper function
    function backtracking(currentCombo: number[], currentSum: number, startIdx: number) {
        // Step1: handle the base cases
        // 1.1 if currentSum equal the target, add the combination to the reuslt
        if (currentSum === target) {
            result.push([...currentCombo]) // add a copy to the result
        }

        // 1.2 if sum is greater than target stop explore further
        if (currentSum > target) {
            return
        }

        // Step 2: inter through the candidates
        for (let i = startIdx; i < nums.length; i++) {
            // 2.1 choose the current number and explore further
            currentCombo.push(nums[i])
            backtracking(currentCombo, currentSum + nums[i], i)

            // 2.2 give up current number and continue 
            currentCombo.pop()
        }
    }
    
    // Step3:  start the backtracking process from the begginning of the nums
    backtracking([], 0, 0)
    return result
}

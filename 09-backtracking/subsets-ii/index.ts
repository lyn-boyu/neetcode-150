/**
 * Subsets II - Medium
 * https://neetcode.io/problems/subsets-ii
 * 
 * You are given an array nums of integers, which may contain duplicates. 
 * Return all possible subsets. The solution must not contain duplicate subsets.
 * You may return the solution in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,1]
 * Output: [[],[1],[1,2],[1,1],[1,2,1],[2]]
 * 
 * Example 2:
 * Input: nums = [7,7]
 * Output: [[],[7],[7,7]]
 * 
 * Constraints:
 * - 1 <= nums.length <= 11
 * - -20 <= nums[i] <= 20
 */

export function subsetsWithDup(nums: number[]): number[][] {
    const result: number[][] = []
    const subset: number[] = []

    // Step1: sort nums to skip the duplicates
    nums.sort((a, b) => a - b);

    // Step2: define a helper function for backtracking
    function backtrack(startIdx: number) {
        // 2.1 add current set to result
        result.push([...subset])

        // 2.2 explore further num to form a subset
        for (let i = startIdx; i < nums.length; i++) {
            // 2.2.1 skip duplicated num 
            if (i > startIdx && nums[i] === nums[i - 1]) continue

            // 2.2.2 pick current num and explore next position
            subset.push(nums[i])
            backtrack(i + 1)

            // 2.2.3 cancel previous selection
            subset.pop()
        }
    }

    // Step 3: Start backtracking and return the result
    backtrack(0)
    return result
}
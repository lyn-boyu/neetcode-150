/**
 * Combination Target Sum II - Medium
 * 
 * https://neetcode.io/problems/combination-target-sum-ii
 * 
 * You are given an array of integers `candidates`, which may contain duplicates, and a target integer `target`. 
 * Your task is to return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`.
 * 
 * Each element from `candidates` may be chosen at most once within a combination. The solution set must not contain duplicate combinations.
 * 
 * You may return the combinations in any order and the order of the numbers in each combination can be in any order.
 * 
 * Example 1:
 * Input: candidates = [9,2,2,4,6,1,5], target = 8
 * Output: [
 *   [1,2,5],
 *   [2,2,4],
 *   [2,6]
 * ]
 * Explanation:
 * - Possible combinations are: 1+2+5, 2+2+4, and 2+6.
 * 
 * Example 2:
 * Input: candidates = [1,2,3,4,5], target = 7
 * Output: [
 *   [1,2,4],
 *   [2,5],
 *   [3,4]
 * ]
 * Explanation:
 * - Possible combinations are: 1+2+4, 2+5, and 3+4.
 * 
 * Constraints:
 * - 1 <= candidates.length <= 100
 * - 1 <= candidates[i] <= 50
 * - 1 <= target <= 30
 */


export function combinationSum2(candidates: number[], target: number): number[][] {
    return []
}

/**

candidates = [1, 2, 2, 3], target = 5

Root [start: 0, path: [], targetSum: 8]                     <- Initial state, empty path, full target sum
|
|-- i = 0 [start: 1, path: [1], targetSum: 7]
|   |
|   |-- i = 1 [start: 2, path: [1, 2], targetSum: 5]
|   |   |
|   |   |-- i = 2 [start: 3, path: [1, 2, 2], targetSum: 3]
|   |   |   |
|   |   |   |-- Breaking out: i = 3, candidates[3] = 4 is greater than targetSum = 3
|   |   |   <- Backtrack, remove 2 from path
|   |   |
|   |   |-- i = 3 [start: 4, path: [1, 2, 4], targetSum: 1]
|   |   |   |
|   |   |   |-- Breaking out: i = 4, candidates[4] = 5 is greater than targetSum = 1
|   |   |   <- Backtrack, remove 4 from path
|   |   |
|   |   |-- i = 4 [start: 5, path: [1, 2, 5], targetSum: 0]  <- Found valid combination: [1, 2, 5]
|   |   |   <- Backtrack, remove 5 from path
|   |   |
|   |   |-- Breaking out: i = 5, candidates[5] = 6 is greater than targetSum = 5
|   |   <- Backtrack, remove 2 from path
|   |
|   |-- Skipping duplicate: i = 2, candidates[2] = 2
|   |
|   |-- i = 3 [start: 4, path: [1, 4], targetSum: 3]
|   |   |
|   |   |-- Breaking out: i = 4, candidates[4] = 5 is greater than targetSum = 3
|   |   <- Backtrack, remove 4 from path
|   |
|   |-- i = 4 [start: 5, path: [1, 5], targetSum: 2]
|   |   |
|   |   |-- Breaking out: i = 5, candidates[5] = 6 is greater than targetSum = 2
|   |   <- Backtrack, remove 5 from path
|   |
|   |-- i = 5 [start: 6, path: [1, 6], targetSum: 1]
|   |   |
|   |   |-- Breaking out: i = 6, candidates[6] = 9 is greater than targetSum = 1
|   |   <- Backtrack, remove 6 from path
|   |
|   |-- Breaking out: i = 6, candidates[6] = 9 is greater than targetSum = 7
|   <- Backtrack, remove 1 from path
|
|-- i = 1 [start: 2, path: [2], targetSum: 6]
|   |
|   |-- i = 2 [start: 3, path: [2, 2], targetSum: 4]
|   |   |
|   |   |-- i = 3 [start: 4, path: [2, 2, 4], targetSum: 0]  <- Found valid combination: [2, 2, 4]
|   |   <- Backtrack, remove 4 from path
|   |
|   |-- Breaking out: i = 4, candidates[4] = 5 is greater than targetSum = 4
|   <- Backtrack, remove 2 from path
|   |
|   |-- i = 3 [start: 4, path: [2, 4], targetSum: 2]
|   |   |
|   |   |-- Breaking out: i = 4, candidates[4] = 5 is greater than targetSum = 2
|   |   <- Backtrack, remove 4 from path
|   |
|   |-- i = 4 [start: 5, path: [2, 5], targetSum: 1]
|   |   |
|   |   |-- Breaking out: i = 5, candidates[5] = 6 is greater than targetSum = 1
|   |   <- Backtrack, remove 5 from path
|   |
|   |-- i = 5 [start: 6, path: [2, 6], targetSum: 0]  <- Found valid combination: [2, 6]
|   <- Backtrack, remove 6 from path
|   |
|   |-- Breaking out: i = 6, candidates[6] = 9 is greater than targetSum = 6
|   <- Backtrack, remove 2 from path
|
|-- Skipping duplicate: i = 2, candidates[2] = 2
|
|-- i = 3 [start: 4, path: [4], targetSum: 4]
|   |
|   |-- Breaking out: i = 4, candidates[4] = 5 is greater than targetSum = 4
|   <- Backtrack, remove 4 from path
|
|-- i = 4 [start: 5, path: [5], targetSum: 3]
|   |
|   |-- Breaking out: i = 5, candidates[5] = 6 is greater than targetSum = 3
|   <- Backtrack, remove 5 from path
|
|-- i = 5 [start: 6, path: [6], targetSum: 2]
|   |
|   |-- Breaking out: i = 6, candidates[6] = 9 is greater than targetSum = 2
|   <- Backtrack, remove 6 from path
|
|-- Breaking out: i = 6, candidates[6] = 9 is greater than targetSum = 8

*/
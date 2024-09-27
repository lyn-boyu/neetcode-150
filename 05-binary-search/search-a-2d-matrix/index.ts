/**
 * Search a 2D Matrix - Medium
 * 
 * https://neetcode.io/problems/search-a-2d-matrix
 * 
 * You are given an m x n 2-D integer array `matrix` and an integer `target`.
 * Each row in the matrix is sorted in non-decreasing order.
 * The first integer of every row is greater than the last integer of the previous row.
 * 
 * Return true if `target` exists within `matrix` or false otherwise.
 * 
 * Example 1:
 * Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
 * Output: true
 * 
 * Example 2:
 * Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15
 * Output: false
 * 
 * Constraints:
 * - m == matrix.length
 * - n == matrix[i].length
 * - 1 <= m, n <= 100
 * - -10000 <= matrix[i][j], target <= 10000
 * 
 * Solution:
 * Since the matrix is sorted in a way that all elements are in a single increasing sequence,
 * we can treat the 2D matrix as a flattened 1D array and apply binary search in O(log(m * n)) time.
 */

export function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0 || matrix[0].length === 0) return false

    const m = matrix.length
    const n = matrix[0].length

    /**
      [  
        [ 1,  2,  4,  8],
        [10, 11, 12, 13],
        [14, 20, 30, 40]
      ]
      treat matrix as 1-D Array 
      [1, 2, 4, 8, 10, 11, 12, 13, 14, 20, 30, 40]
     */
    let left = 0;
    let right = m * n - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const rowIdx = Math.floor(mid / n)
        const colId = mid % n
        const midValue = matrix[rowIdx][colId]

        if (midValue === target) {
            return true
        } else if (midValue > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return false;
}

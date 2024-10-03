/**
 * Rotting Fruit - Medium
 * 
 * https://neetcode.io/problems/rotting-fruit
 * 
 * You are given a 2-D matrix `grid`. Each cell can have one of three possible values:
 * - 0 representing an empty cell
 * - 1 representing a fresh fruit
 * - 2 representing a rotten fruit
 * 
 * Every minute, if a fresh fruit is horizontally or vertically adjacent to a rotten fruit, then the fresh fruit also becomes rotten.
 * 
 * Return the minimum number of minutes that must elapse until there are zero fresh fruits remaining. 
 * If this state is impossible within the grid, return -1.
 * 
 * Example 1:
 * Input: grid = [[1, 1, 0], [0, 1, 1], [0, 1, 2]]
 * Output: 4
 * Explanation: The rotten fruit starts from cell (2, 2), and spreads to all fresh fruits in 4 minutes.
 * 
 * Example 2:
 * Input: grid = [[1, 0, 1], [0, 2, 0], [1, 0, 1]]
 * Output: -1
 * Explanation: There are fresh fruits that cannot be reached by any rotten fruit.
 * 
 * Constraints:
 * - 1 <= grid.length, grid[i].length <= 10
 */

export function rottingFruit(grid: number[][]): number {
   return -1
}

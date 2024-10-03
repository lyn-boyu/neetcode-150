/**
 * Count Number of Islands - Medium
 * 
 * https://neetcode.io/problems/count-number-of-islands
 * 
 * Given a 2D grid `grid` where '1' represents land and '0' represents water, count and return the number of islands.
 * An island is formed by connecting adjacent lands horizontally or vertically and is surrounded by water.
 * You may assume water is surrounding the grid (i.e., all the edges are water).
 * 
 * Example 1:
 * Input: grid = [
 *     ["0","1","1","1","0"],
 *     ["0","1","0","1","0"],
 *     ["1","1","0","0","0"],
 *     ["0","0","0","0","0"]
 *   ]
 * Output: 1
 * Explanation: There is only one island formed by connecting the land pieces in the first three rows.
 * 
 * Example 2:
 * Input: grid = [
 *     ["1","1","0","0","1"],
 *     ["1","1","0","0","1"],
 *     ["0","0","1","0","0"],
 *     ["0","0","0","1","1"]
 *   ]
 * Output: 4
 * Explanation: There are four separate islands: two on the top right, one in the middle, and one on the bottom right.
 * 
 * Constraints:
 * - 1 <= grid.length, grid[i].length <= 100
 * - grid[i][j] is '0' or '1'.
 */

export function numIslands(grid: string[][]): number {
    if (grid.length === 0) return 0

    let count = 0
    const rows = grid.length
    const cols = grid[0] ? grid[0].length : 0

    const dfs = (row: number, col: number) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
            return
        }

        grid[row][col] = '0'
        dfs(row - 1, col)  //up
        dfs(row + 1, col)  //down
        dfs(row, col + 1)  //down
        dfs(row, col - 1)  //down
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                dfs(r, c)
                count += 1
            }
        }
    }


    return count
}


/**
 * Count Number of Islands - Medium
 * 
 * https://neetcode.io/problems/count-number-of-islands
 * 
 * Given a 2D grid `grid` where '1' represents land and '0' represents water, count and return the number of islands.
 * An island is formed by connecting adjacent lands horizontally or vertically and is surrounded by water.
 * You may assume water is surrounding the grid (i.e., all the edges are water).
 * 
 * Example 1:
 * Input: grid = [
 *     ["0","1","1","1","0"],
 *     ["0","1","0","1","0"],
 *     ["1","1","0","0","0"],
 *     ["0","0","0","0","0"]
 *   ]
 * Output: 1
 * Explanation: There is only one island formed by connecting the land pieces in the first three rows.
 * 
 * Example 2:
 * Input: grid = [
 *     ["1","1","0","0","1"],
 *     ["1","1","0","0","1"],
 *     ["0","0","1","0","0"],
 *     ["0","0","0","1","1"]
 *   ]
 * Output: 4
 * Explanation: There are four separate islands: two on the top right, one in the middle, and one on the bottom right.
 * 
 * Constraints:
 * - 1 <= grid.length, grid[i].length <= 100
 * - grid[i][j] is '0' or '1'.
 */

export function numIslands(grid: string[][]): number {
    // Step 1: Initialize variables
    let count = 0;
    const rows = grid.length
    const cols = grid[0] ? grid[0].length : 0

    // Step 2: Define a helper function for Depth First Search (DFS)
    function dfs(r: number, c: number): void {
        // 2.1: Boundary check and check if the cell is '0' (water)
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
            return;
        }

        // 2.2: Mark the cell as visited (change '1' to '0')
        grid[r][c] = '0';

        // 2.3: Visit all adjacent cells (up, down, left, right)
        dfs(r - 1, c); // up
        dfs(r + 1, c); // down
        dfs(r, c - 1); // left
        dfs(r, c + 1); // right
    }

    // Step 3: Iterate through all cells in the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // 3.1: If the cell is '1' (land), perform DFS and increment count
            if (grid[r][c] === '1') {
                dfs(r, c);
                count++;
            }
        }
    }

    return count;
}

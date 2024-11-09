/**
 * Surrounded Regions - Medium
 * https://neetcode.io/problems/surrounded-regions
 * 
 * Given a 2-D matrix `board` containing 'X' and 'O' characters:
 * - Change all 'O' regions that are completely surrounded by 'X' to 'X'.
 * - Regions connected to the border should remain unchanged.
 * 
 * Example 1:
 * Input: board = [
 *   ["X","X","X","X"],
 *   ["X","O","O","X"],
 *   ["X","O","O","X"],
 *   ["X","X","X","O"]
 * ]
 * 
 * Output: [
 *   ["X","X","X","X"],
 *   ["X","X","X","X"],
 *   ["X","X","X","X"],
 *   ["X","X","X","O"]
 * ]
 * Explanation: Note that regions that are on the border are not considered surrounded regions.
 * 
 * Constraints:
 * - 1 <= board.length, board[i].length <= 200
 * - board[i][j] is 'X' or 'O'.
 */

export function solve(board: string[][]): void {
    const rows = board.length;
    const cols = board[0].length ? board[0].length : 0;
    const directions = [
        [0, 1],  // Right
        [0, -1], // Left
        [1, 0],  // Down
        [-1, 0]  // Up
    ];

    // Step 1: Define the DFS function to mark non-surrounded 'O's
    function dfs(r: number, c: number) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') {
            return; // Out of bounds or not an 'O'
        }
        board[r][c] = 'T'; // Temporarily mark as 'T' to indicate it is connected to the border
        for (let [dr, dc] of directions) {
            dfs(r + dr, c + dc); // Recursively visit adjacent cells
        }
    }

    // Step 2: Perform DFS for all border cells to find 'O's connected to the border
    for (let row = 0; row < rows; row++) {
        if (board[row][0] === 'O') dfs(row, 0); // Left border
        if (board[row][cols - 1] === 'O') dfs(row, cols - 1); // Right border
    }
    for (let col = 0; col < cols; col++) {
        if (board[0][col] === 'O') dfs(0, col); // Top border
        if (board[rows - 1][col] === 'O') dfs(rows - 1, col); // Bottom border
    }

    // Step 3: Traverse the board to update 'O's and 'T's
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X'; // Change surrounded 'O' to 'X'
            } else if (board[r][c] === 'T') {
                board[r][c] = 'O'; // Restore non-surrounded 'O' from 'T'
            }
        }
    }
}

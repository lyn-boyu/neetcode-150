/**
 * Pacific Atlantic Water Flow - Medium
 * https://neetcode.io/problems/pacific-atlantic-water-flow
 * 
 * You are given a rectangular island `heights` where `heights[r][c]` represents the height above sea level
 * of the cell at coordinate (r, c). The island borders the Pacific Ocean from the top and left sides,
 * and borders the Atlantic Ocean from the bottom and right sides.
 * 
 * Water can flow in four directions (up, down, left, or right) from a cell to a neighboring cell with
 * height equal or lower. Water can also flow into the ocean from cells adjacent to the ocean.
 * 
 * Find all cells where water can flow from that cell to both the Pacific and Atlantic oceans.
 * Return it as a 2D list where each element is a list [r, c] representing the row and column of the cell.
 * You may return the answer in any order.
 * 
 * Example 1:
 * Input: heights = [
 *   [4,2,7,3,4],
 *   [7,4,6,4,7],
 *   [6,3,5,3,6]
 * ]
 * 
 * Output: [[0,2],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4],[2,0]]
 * 
 * Example 2:
 * Input: heights = [[1],[1]]
 * 
 * Output: [[0,0],[0,1]]
 * 
 * Constraints:
 * - 1 <= heights.length, heights[r].length <= 100
 * - 0 <= heights[r][c] <= 1000
 */

export function pacificAtlantic(heights: number[][]): number[][] {
    const result: number[][] = [];
    const rows = heights.length;
    const cols = heights[0] ? heights[0].length : 0;
    const pacificReachable = Array.from({ length: rows }, () => Array(cols).fill(false));
    const atlanticReachable = Array.from({ length: rows }, () => Array(cols).fill(false));
    const directions = [
        [1, 0],   // Down
        [-1, 0],  // Up
        [0, 1],   // Right
        [0, -1]   // Left
    ];

    // Step 1: Define the DFS helper function for exploring reachable cells
    function dfs(row: number, col: number, reachable: boolean[][]) {
        reachable[row][col] = true; // Mark the current cell as reachable

        for (let [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Check if the new cell is within bounds, not visited, and can be reached from the current cell
            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                !reachable[newRow][newCol] &&
                heights[newRow][newCol] >= heights[row][col] // Ensure the new cell's height is not less
            ) {
                dfs(newRow, newCol, reachable); // Recursively visit the new cell
            }
        }
    }

    // Step 2: Run DFS from the borders (Pacific and Atlantic)
    // Traverse rows for the left (Pacific) and right (Atlantic) sides
    for (let row = 0; row < rows; row++) {
        dfs(row, 0, pacificReachable); // Left border (Pacific)
        dfs(row, cols - 1, atlanticReachable); // Right border (Atlantic)
    }
    // Traverse columns for the top (Pacific) and bottom (Atlantic) sides
    for (let col = 0; col < cols; col++) {
        dfs(0, col, pacificReachable); // Top border (Pacific)
        dfs(rows - 1, col, atlanticReachable); // Bottom border (Atlantic)
    }

    // Step 3: Collect cells that are reachable by both Pacific and Atlantic
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacificReachable[r][c] && atlanticReachable[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
}
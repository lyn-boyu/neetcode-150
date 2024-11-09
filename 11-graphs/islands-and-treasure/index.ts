/**
 * Islands and Treasure - Medium
 * https://neetcode.io/problems/islands-and-treasure
 * 
 * You are given a m × n 2D grid initialized with these three possible values:
 * - -1 - A water cell that cannot be traversed.
 * - 0 - A treasure chest.
 * - INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
 * 
 * Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot
 * reach a treasure chest, the value should remain INF.
 * 
 * The grid can only be traversed up, down, left, or right.
 * 
 * Example 1:
 * Input: [
 *   [2147483647,-1,0,2147483647],
 *   [2147483647,2147483647,2147483647,-1],
 *   [2147483647,-1,2147483647,-1],
 *   [0,-1,2147483647,2147483647]
 * ]
 * 
 * Output: [
 *   [3,-1,0,1],
 *   [2,2,1,-1],
 *   [1,-1,2,-1],
 *   [0,-1,3,4]
 * ]
 * Explanation:
 * - The nearest treasure chest from each land cell is calculated.
 * 
 * Example 2:
 * Input: [
 *   [0,-1],
 *   [2147483647,2147483647]
 * ]
 * 
 * Output: [
 *   [0,-1],
 *   [1,2]
 * ]
 * 
 * Constraints:
 * - m == grid.length
 * - n == grid[i].length
 * - 1 <= m, n <= 100
 * - grid[i][j] is one of {-1, 0, 2147483647}
 */

function fillLandWithDistanceToTreasure(grid: number[][]): void {
    // Step 1: Setup variables
    const rows = grid.length;
    const cols = grid[0] ? grid[0].length : 0;
    const queue: number[][] = [];
    const directions = [
        [1, 0],  // Down
        [-1, 0], // Up
        [0, 1],  // Right
        [0, -1]  // Left
    ];

    // Step 2: Find all treasure chests on the map and add them to the queue
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 0) {
                queue.push([r, c]); // Push coordinates (column, row)
            }
        }
    }

    // Step 3: Perform BFS from all treasure chests and update surrounding land cell distances
    while (queue.length > 0) {
        const [r, c] = queue.shift()!; // Dequeue the front element

        for (let [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;

            // Check bounds and if the new cell is traversable land (INF)
            if (
                newCol >= 0 && newCol < cols &&
                newRow >= 0 && newRow < rows &&
                grid[newRow][newCol] === 2147483647 // Check if the cell is unvisited land
            ) {
                // Update the distance to the nearest treasure chest
                grid[newRow][newCol] = grid[r][c] + 1;
                queue.push([newRow, newCol]); // Enqueue the new cell for further exploration
            }
        }
    }
}

export { fillLandWithDistanceToTreasure };
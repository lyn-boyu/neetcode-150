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
    const rows = grid.length;
    const cols = grid[0].length;
    const queue: [number, number][] = [];
    let freshCount = 0;
    const directions = [
        [0, 1],  // right
        [0, -1], // left
        [1, 0],  // down
        [-1, 0]  // up
    ];

    // Step 1: Initialize the queue with all rotten fruits and count fresh fruits
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                freshCount++;
            } else if (grid[r][c] === 2) {
                queue.push([r, c]);
            }
        }
    }

    // Step 2: Perform BFS from each initially rotten fruit to rot adjacent fresh fruits
    let minutes = 0;
    while (queue.length > 0 && freshCount > 0) {
        const size = queue.length;

        // Process each fruit in the current level
        for (let i = 0; i < size; i++) {
            const [currentRow, currentCol] = queue.shift()!;
            for (const [dr, dc] of directions) {
                const newRow = currentRow + dr;
                const newCol = currentCol + dc;

                // Check if the new cell is within bounds and contains a fresh fruit
                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol] === 1
                ) {
                    grid[newRow][newCol] = 2; // Rot the fresh fruit
                    freshCount--;
                    queue.push([newRow, newCol]); // Add the newly rotten fruit to the queue
                }
            }
        }

        // Increment the time after processing each level
        minutes++;
    }

    // Step 3: Return the result - either the total time or -1 if there are remaining fresh fruits
    return freshCount === 0 ? minutes : -1;
}

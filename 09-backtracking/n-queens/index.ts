/**
 * N-Queens - Hard
 * https://neetcode.io/problems/n-queens
 * 
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard 
 * so that no two queens can attack each other.
 * 
 * Example 1:
 * Input: n = 4
 * Output: [[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]]
 * 
 * Example 2:
 * Input: n = 1
 * Output: [["Q"]]
 * 
 * Constraints:
 * - 1 <= n <= 8
 */

export function solveNQueens(n: number): string[][] {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const cols = new Set<number>();
    const diagonals = new Set<number>(); // row - col
    const antiDiagonals = new Set<number>();
    const result: string[][] = []

    function isSafe(row: number, col: number) {
        // The main diagonal is uniquely identified by (row - col). 
        // This checks if any queen has been placed in the same main diagonal.
        // For example, cells like (2, 0), (3, 1) share the same main diagonal because 2 - 0 = 3 - 1.

        // The anti-diagonal is uniquely identified by (row + col).
        // This checks if any queen has been placed in the same anti-diagonal.
        // For example, cells like (0, 0), (1, 1), and (2, 2) share the same anti-diagonal because 0 + 0 = 1 + 1 = 2 + 2.
        return !cols.has(col) && !diagonals.has(row - col) && !antiDiagonals.has(row + col)
    }

    function placeQueen(row: number, col: number) {
        board[row][col] = 'Q'
        cols.add(col)
        diagonals.add(row - col);
        antiDiagonals.add(row + col)
    }

    function removeQueen(row: number, col: number) {
        board[row][col] = '.'
        cols.delete(col)
        diagonals.delete(row - col)
        antiDiagonals.delete(row + col)
    }

    function backtrack(row: number) {
        // Step 1: If we've placed queens in all rows, add the board to the result
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        // Step 2: Try placing a queen in each column of the current row
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                placeQueen(row, col)
                backtrack(row + 1) // Recurse to place queens in the next row
                removeQueen(row, col)
            }
        }

    }
    // Step 3: Start the backtracking process from the first row
    backtrack(0)
    return result
}

/**
 * Search for Word - Medium
 * 
 * https://neetcode.io/problems/search-for-word
 * 
 * Given a 2-D grid of characters `board` and a string `word`, return `true` if the word is present in the grid, otherwise return `false`.
 * 
 * The word must be formed by using horizontally or vertically neighboring cells. The same cell may not be used more than once in a word.
 * 
 * Example 1:
 * Input: 
 * board = [
 *   ["A","B","C","D"],
 *   ["S","A","A","T"],
 *   ["A","C","A","E"]
 * ],
 * word = "CAT"
 * Output: true
 * Explanation:
 * - The path for "CAT" can be: board[0][2] -> board[1][3] -> board[2][2].
 * 
 * Example 2:
 * Input: 
 * board = [
 *   ["A","B","C","D"],
 *   ["S","A","A","T"],
 *   ["A","C","A","E"]
 * ],
 * word = "BAT"
 * Output: false
 * Explanation:
 * - There is no valid path in the grid for the word "BAT".
 * 
 * Constraints:
 * - 1 <= board.length, board[i].length <= 5
 * - 1 <= word.length <= 10
 * - `board` and `word` consist of only lowercase and uppercase English letters.
 */

export function exist(board: string[][], word: string): boolean {

    // If no path is found that matches the word
    return false;
}

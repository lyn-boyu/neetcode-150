/**
 * Generate Parentheses - Medium
 * 
 * https://neetcode.io/problems/generate-parentheses
 * 
 * You are given an integer `n`. Return all well-formed parentheses strings that you can generate with `n` pairs of parentheses.
 * 
 * Example 1:
 * Input: n = 1
 * Output: ["()"]
 * 
 * Example 2:
 * Input: n = 3
 * Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
 * 
 * Constraints:
 * - 1 <= n <= 7
 * 
 * Solution:
 * - Use backtracking to generate all possible combinations of parentheses.
 * - Track the number of open and closed parentheses to ensure well-formed strings.
 */

export function generateParenthesis(n: number): string[] {
    const result: string[] = []

    const backtrack = (current: string, open: number, close: number) => {
        if (current.length === 2 * n) {
            result.push(current)
        }

        if (open < n) {
            backtrack(current + '(', open + 1, close)
        }

        if (close < open) {
            backtrack(current + ')', open, close + 1)
        }

    }

    backtrack('', 0, 0)

    return result
}
   
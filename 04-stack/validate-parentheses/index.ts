/**
 * Validate Parentheses - Easy
 * 
 * https://neetcode.io/problems/validate-parentheses
 * 
 * You are given a string `s` consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
 * 
 * The input string `s` is valid if and only if:
 * 1. Every open bracket is closed by the same type of close bracket.
 * 2. Open brackets are closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Return `true` if `s` is a valid string, and `false` otherwise.
 * 
 * Example 1:
 * Input: s = "[]"
 * Output: true
 * 
 * Example 2:
 * Input: s = "([{}])"
 * Output: true
 * 
 * Example 3:
 * Input: s = "[(])"
 * Output: false
 * Explanation: The brackets are not closed in the correct order.
 * 
 * Constraints:
 * - 1 <= s.length <= 1000
 * 
 * Solution:
 * - Use a stack to store the opening brackets.
 * - When encountering a closing bracket, check if it matches the last opened bracket.
 * - If all brackets are matched correctly, return true, otherwise return false.
 */

export function isValid(s: string): boolean {
    return false
}

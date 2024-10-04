/**
 * Valid Parenthesis String - Medium
 * 
 * https://neetcode.io/problems/valid-parenthesis-string
 * 
 * You are given a string s which contains only three types of characters: '(', ')' and '*'.
 * Return true if s is valid, otherwise return false.
 * A string is valid if it follows all of the following rules:
 * 1. Every left parenthesis '(' must have a corresponding right parenthesis ')'.
 * 2. Every right parenthesis ')' must have a corresponding left parenthesis '('.
 * 3. Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * 4. A '*' could be treated as:
 *    - A right parenthesis ')'
 *    - A left parenthesis '('
 *    - An empty string ""
 * 
 * Example 1:
 * Input: s = "((**)"
 * Output: true
 * Explanation: One of the '*' could be a ')' and the other could be an empty string.
 * 
 * Example 2:
 * Input: s = "(((*)"
 * Output: false
 * Explanation: The string is not valid because there is an extra '(' at the beginning, regardless of the extra '*'.
 * 
 * Constraints:
 * - 1 <= s.length <= 100
 */

export function checkValidString(s: string): boolean {
    return false
}

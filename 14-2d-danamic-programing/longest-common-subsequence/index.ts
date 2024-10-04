/**
 * Longest Common Subsequence - Medium
 * 
 * https://neetcode.io/problems/longest-common-subsequence
 * 
 * Given two strings `text1` and `text2`, return the length of the longest common subsequence between the two strings if one exists, otherwise return `0`.
 * 
 * A subsequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the relative order of the remaining characters.
 * 
 * For example, "cat" is a subsequence of "crabt".
 * A common subsequence of two strings is a subsequence that exists in both strings.
 * 
 * Example 1:
 * 
 * Input: text1 = "cat", text2 = "crabt" 
 * 
 * Output: 3 
 * Explanation: The longest common subsequence is "cat" which has a length of 3.
 * 
 * Example 2:
 * 
 * Input: text1 = "abcd", text2 = "abcd"
 * 
 * Output: 4
 * Explanation: Both strings are identical, so the longest common subsequence is "abcd" which has a length of 4.
 * 
 * Example 3:
 * 
 * Input: text1 = "abcd", text2 = "efgh"
 * 
 * Output: 0
 * Explanation: The two strings have no characters in common, so the longest common subsequence length is 0.
 * 
 * Constraints:
 * - 1 <= text1.length, text2.length <= 1000
 * - `text1` and `text2` consist of only lowercase English characters.
 */

export function longestCommonSubsequence(text1: string, text2: string): number {
    const rows = text1.length;
    const cols = text2.length
    // step1: define state table
    const dp = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0))

    // step2:  fill the table by state transition function
    for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= cols; c++) {
            if (text1[r - 1] === text2[c - 1]) {
                dp[r][c] = dp[r - 1][c - 1] + 1
            } else {
                dp[r][c] = Math.max(
                    dp[r][c - 1],
                    dp[r - 1][c],
                )
            }
        }
    }

    // step3: return the result
    return dp[rows][cols]
}

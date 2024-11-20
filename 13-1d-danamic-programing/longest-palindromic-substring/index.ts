/**
 * Longest Palindromic Substring - Medium
 * https://neetcode.io/problems/longest-palindromic-substring
 *
 * Given a string `s`, return the longest substring of `s` that is a palindrome.
 *
 * Example 1:
 * Input: s = "ababd"
 * Output: "bab"
 *
 * Example 2:
 * Input: s = "abbc"
 * Output: "bb"
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s contains only digits and English letters.
 */

export function longestPalindrome(s: string): string {
    const n = s.length

    // Step 1: Initialize DP table
    const dp = Array.from({ length: n }, () => Array(n).fill(false))
    /** 
        Table Content:
        * dp[l][r] represents whether the substring from index `l` to `r` is a palindrome.
        
        Boolean Explanation:
        * dp[l][r] = true: The substring s[l...r] is a palindrome.
        * dp[l][r] = false: The substring s[l...r] is not a palindrome.
    */

    let startIdx = 0; //Starting index of the longest palindrome
    let maxLen = 0; // Length of the longest palindrome

    // Step 2: Populate the DP table
    for (let l = n - 1; l >= 0; l--) {
        for (let r = l; r < n; r++) {
            // Check if substring s[l..r] is a palindrome
            // case1: 'a' r - l = 1
            // case2: 'aa' r - l = 2
            // case3:  r - l > 2  and s[r] = s[l] and dp[r + 1][l - 1] is palindrome
            if (s[l] === s[r] && r - l <= 2 || dp[l + 1][r - 1]) {
                dp[l][r] = true

                // Update the longest palindrome if needed
                if (r - l + 1 > maxLen) {
                    startIdx = l;
                    maxLen = r - l + 1
                }
            }
        }
    }
    // Step 3: Return the longest palindrome substring
    return s.substring(startIdx, startIdx + maxLen)
}

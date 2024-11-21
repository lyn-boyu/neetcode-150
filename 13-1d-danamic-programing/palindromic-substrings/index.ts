/**
 * Palindromic Substrings - Medium
 * https://neetcode.io/problems/palindromic-substrings
 *
 * Given a string `s`, return the number of substrings within `s` that are palindromes.
 *
 * A palindrome is a string that reads the same forward and backward.
 *
 * Example 1:
 * Input: s = "abc"
 * Output: 3
 * Explanation: The substrings are "a", "b", "c".
 *
 * Example 2:
 * Input: s = "aaa"
 * Output: 6
 * Explanation: The substrings are "a", "a", "a", "aa", "aa", "aaa".
 * Note: Different substrings are counted as different palindromes even if they have the same content.
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s consists of lowercase English letters.
 */

export function countSubstrings(s: string): number {
    const n = s.length;
    let count = 0
    
    // Helper function to check if a substring is a palindrome using a while loop.
    function checkPalindromeByWhileLoop(left: number, right: number) {
        while (s[left] === s[right] && left < right) {
            left++;
            right--
        }
        if (left >= right) {
            count += 1
        }
    }

    const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));
    //  Fills the DP table to mark substrings as palindromes and count them.
    function fillDpTable(l: number, r: number) {
        if (s[l] !== s[r]) return

        // Check if the inner substring (s[l+1...r-1]) is a palindrome.
        if (dp[l + 1][r - 1]) {
            dp[l][r] = true;
            count += 1
        }

        // Handle special cases: single character 'a', two characters 'aa', three characters 'aba'.
        if (r - l <= 2) {
            dp[l][r] = true;
            count += 1
        }
    }


    for (let l = n - 1; l >= 0; l--) {
        for (let r = l; r < n; r++) {
            fillDpTable(l, r); // Alternatively, call checkPalindromeByWhileLoop(l, r)
        }
    }

    return count
}



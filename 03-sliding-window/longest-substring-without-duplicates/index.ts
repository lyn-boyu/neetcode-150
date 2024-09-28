/**
 * Longest Substring Without Duplicates - Medium
 * 
 * https://neetcode.io/problems/longest-substring-without-duplicates
 * 
 * Given a string `s`, find the length of the longest substring without duplicate characters.
 * 
 * Example 1:
 * Input: s = "zxyzxyz"
 * Output: 3
 * Explanation: The string "xyz" is the longest without duplicate characters.
 * 
 * Example 2:
 * Input: s = "xxxx"
 * Output: 1
 * 
 * Constraints:
 * - 0 <= s.length <= 1000
 * - s may consist of printable ASCII characters.
 */

export function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0
    let left = 0
    let charIndexMap: Record<string, number> = {}

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        // Move the left pointer to the position after the last occurrence of the current character
        // if it exists in the map and is within the current window
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= left) {
            left = charIndexMap[char] + 1
        }
        // update char index
        charIndexMap[char] = right

        // update max length
        const curentLength = right - left + 1
        maxLength = Math.max(maxLength, curentLength)
    }

    return maxLength
}

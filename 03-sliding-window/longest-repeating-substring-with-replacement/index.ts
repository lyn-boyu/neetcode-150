/**
 * Longest Repeating Substring With Replacement - Medium
 * 
 * https://neetcode.io/problems/longest-repeating-substring-with-replacement
 * 
 * You are given a string `s` consisting of only uppercase English characters and an integer `k`.
 * You can choose up to `k` characters of the string and replace them with any other uppercase English character.
 * After performing at most `k` replacements, return the length of the longest substring which contains only one distinct character.
 * 
 * Example 1:
 * Input: s = "XYYX", k = 2
 * Output: 4
 * Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.
 * 
 * Example 2:
 * Input: s = "AAABABB", k = 1
 * Output: 5
 * 
 * Constraints:
 * - 1 <= s.length <= 1000
 * - 0 <= k <= s.length
 */

export function characterReplacement(s: string, k: number): number {
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;

    const freqMap: Record<string, number> = {}

    for (let right = 0; right < s.length; right++) {
        const char = s[right]
        freqMap[char] = (freqMap[char] ?? 0) + 1;
        maxCount = Math.max(freqMap[char], maxCount)

        // move left when replace count is bigger than k
        if (right - left + 1 - maxCount > k) {
            const leftChar = s[left]
            freqMap[leftChar] -= 1
            left += 1
        }

        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
}


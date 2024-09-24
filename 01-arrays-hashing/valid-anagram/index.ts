/**
 * Is Anagram - Easy
 * 
 * https://neetcode.io/problems/is-anagram
 * 
 * Given two strings s and t, return true if the two strings are anagrams of each other, 
 * otherwise return false.
 * 
 * An anagram is a string that contains the exact same characters as another string, 
 * but the order of the characters can be different.
 * 
 * Example 1:
 * Input: s = "racecar", t = "carrace"
 * Output: true
 * 
 * Example 2:
 * Input: s = "jar", t = "jam"
 * Output: false
 * 
 * Constraints:
 * - s and t consist of lowercase English letters.
 */

export class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map = new Map<string, number>()
        for (let char of s) {
            const count = map.get(char) || 0
            map.set(char, count + 1)
        }
        for (let char of t) {
            // if characters are different then return false
            if (!map.has(char)) { return false }
            // update count 
            const updatedCount = (map.get(char) || 0) - 1
            map.set(char, updatedCount)
            // clear when reach 0
            if (updatedCount === 0) { map.delete(char) }
        }
        return map.size === 0
    }
}

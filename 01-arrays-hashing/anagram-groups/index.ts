/**
 * Anagram Groups - Medium
 * 
 * https://neetcode.io/problems/anagram-groups
 * 
 * Given an array of strings strs, group all anagrams together into sublists.
 * You may return the output in any order.
 * 
 * An anagram is a string that contains the exact same characters as another string, 
 * but the order of the characters can be different.
 * 
 * Example 1:
 * Input: strs = ["act","pots","tops","cat","stop","hat"]
 * Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
 * 
 * Example 2:
 * Input: strs = ["x"]
 * Output: [["x"]]
 * 
 * Example 3:
 * Input: strs = [""]

 * Output: [[""]]
 * 
 * Constraints:
 * - 1 <= strs.length <= 1000
 * - 0 <= strs[i].length <= 100
 * - strs[i] is made up of lowercase English letters.
 */

export class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const generateKey = (str: string) => {
            return str.split('').sort().join('')
        }

        const map = new Map<string, string[]>()

        strs.forEach((str) => {
            const key = generateKey(str)
            const list = map.get(key) ?? []
            list.push(str)
            map.set(key, list)
        })

        return Array.from(map.values())
    }
}

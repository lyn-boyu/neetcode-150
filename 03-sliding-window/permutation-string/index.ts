/**
 * Permutation String - Medium
 * 
 * https://neetcode.io/problems/permutation-string
 * 
 * You are given two strings s1 and s2.
 * Return true if s2 contains a permutation of s1, or false otherwise.
 * That means if a permutation of s1 exists as a substring of s2, then return true.
 * 
 * Example 1:
 * Input: s1 = "abc", s2 = "lecabee"
 * Output: true
 * Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".
 * 
 * Example 2:
 * Input: s1 = "abc", s2 = "lecaabee"
 * Output: false
 * 
 * Constraints:
 * - 1 <= s1.length, s2.length <= 1000
 * - Both strings only contain lowercase letters.
 */

export function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false

    const s1Count = new Array(26).fill(0)
    const s2Count = new Array(26).fill(0)
    const charToIdx = (char: string) => char.charCodeAt(0) - 'a'.charCodeAt(0)

    const isMatch = () => {
        return s1Count.every((val, idx) => {
            return val === s2Count[idx]
        })
    }

    // init window
    for (let i = 0; i < s1.length; i++) {
        const index1 = charToIdx(s1[i])
        const index2 = charToIdx(s2[i])
        s1Count[index1]++
        s2Count[index2]++
    }

    // compare
    if (isMatch()) {
        return true
    }
    // move window

    for (let i = s1.length; i < s2.length; i++) {
        // deduct left char
        const leftIdx = charToIdx(s2[i - s1.length])
        s2Count[leftIdx]--
        // add right char
        const rightIdx = charToIdx(s2[i])
        s2Count[rightIdx]++
        // compare
        if (isMatch()) {
            return true
        }
    }

    return false;
}


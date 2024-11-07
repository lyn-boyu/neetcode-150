/**
 * Combinations of a Phone Number - Medium
 * https://neetcode.io/problems/combinations-of-a-phone-number
 * 
 * You are given a string digits made up of digits from 2 through 9 inclusive.
 * Each digit is mapped to a set of characters as shown below:
 * 2 -> "abc", 3 -> "def", 4 -> "ghi", 5 -> "jkl",
 * 6 -> "mno", 7 -> "pqrs", 8 -> "tuv", 9 -> "wxyz"
 * 
 * Return all possible letter combinations that digits could represent.
 * You may return the answer in any order.
 * 
 * Example 1:
 * Input: digits = "34"
 * Output: ["dg", "dh", "di", "eg", "eh", "ei", "fg", "fh", "fi"]
 * Explanation: The combinations are formed using the characters mapped to 3 ("d", "e", "f")
 * and 4 ("g", "h", "i").
 * 
 * Example 2:
 * Input: digits = ""
 * Output: []
 * Explanation: No digits means no combinations.
 * 
 * Constraints:
 * - 0 <= digits.length <= 4
 * - 2 <= digits[i] <= 9
 */

export function letterCombinations(digits: string): string[] {
    // Step1: define digitToChar mapping
    const digitToChar: Record<string, string[]> = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }

    // Step2: edge cases
    if (digits.length === 0) {
        return []
    }

    // Step3: define backtracking function to iter through digits
    const result: string[] = []
    function backtrack(idx: number, path: string) {
        if (path.length === digits.length) {
            result.push(path)
            return // * aborted explore
        }

        const currentDigit = digits[idx];
        for (let char of digitToChar[currentDigit]) {
            backtrack(idx + 1, path + char)
        }

    }

    backtrack(0, '')
    return result
}

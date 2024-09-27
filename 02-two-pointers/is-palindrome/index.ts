/**
 * Is Palindrome - Easy
 * 
 * https://neetcode.io/problems/is-palindrome
 * 
 * Given a string `s`, return true if it is a palindrome, otherwise return false.
 * 
 * A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
 * 
 * Example 1:
 * Input: s = "Was it a car or a cat I saw?"
 * Output: true
 * Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.
 * 
 * Example 2:
 * Input: s = "tab a cat"
 * Output: false
 * Explanation: "tabacat" is not a palindrome.
 * 
 * Constraints:
 * - 1 <= s.length <= 1000
 * - `s` is made up of only printable ASCII characters.
 * 
 * Solution:
 * - We first filter out all non-alphanumeric characters and convert the string to lowercase.
 * - Then, we use two pointers to compare the characters from both ends of the string.
 */

export function isPalindrome(s: string): boolean {
    const filterdString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

    let left = 0;
    let right = filterdString.length - 1;

    while (left < right) {
        if (filterdString[left] !== filterdString[right]) {
            return false
        }
        left++
        right--
    }
    return true;
}

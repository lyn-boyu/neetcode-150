/**
 * Word Ladder - Hard
 * https://neetcode.io/problems/word-ladder
 *
 * You are given two words, `beginWord` and `endWord`, and also a list of words `wordList`.
 * All of the given words are of the same length, consisting of lowercase English letters, and are all distinct.
 *
 * Your goal is to transform `beginWord` into `endWord` by following the rules:
 * - You may transform `beginWord` to any word within `wordList`, provided that at exactly one position
 *   the words have a different character, and the rest of the positions have the same characters.
 * - You may repeat the previous step with the new word that you obtain, and you may do this as many times as needed.
 * 
 * Return the minimum number of words within the transformation sequence needed to obtain `endWord`, 
 * or 0 if no such sequence exists.
 *
 * Example 1:
 * Input: beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sag","dag","dot"]
 * Output: 4
 * Explanation: The transformation sequence is "cat" -> "bat" -> "bag" -> "sag".
 *
 * Example 2:
 * Input: beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sat","dag","dot"]
 * Output: 0
 * Explanation: There is no possible transformation sequence from "cat" to "sag" since "sag" is not in the wordList.
 *
 * Constraints:
 * - 1 <= beginWord.length <= 10
 * - 1 <= wordList.length <= 100
 */

export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    // Step 1: Initialize the data structures and perform base case check
    const aCharCode = 'a'.charCodeAt(0);
    const zCharCode = 'z'.charCodeAt(0);
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    // Step 2: Use BFS to find the shortest transformation path
    const queue: [string, number][] = [[beginWord, 1]]; // Store current word and step count
    const visited = new Set([beginWord]);

    while (queue.length > 0) {
        const [currentWord, depth] = queue.shift()!;

        // Step 2.1: Generate new words by changing one character at a time
        for (let i = 0; i < currentWord.length; i++) {
            for (let charCode = aCharCode; charCode <= zCharCode; charCode++) {
                const newWord = currentWord.slice(0, i) + String.fromCharCode(charCode) + currentWord.slice(i + 1);

                // Step 2.2: Check if the generated word matches `endWord`
                if (newWord === endWord) {
                    return depth + 1; // Return current step count + 1 as the result
                }

                // Step 2.3: Check if the new word is in the word list and not visited
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, depth + 1]);
                }
            }
        }
    }

    // Step 3: Return 0 if no valid transformation path is found
    return 0;
}
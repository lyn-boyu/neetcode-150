/**
 * Last Stone Weight - Easy
 * 
 * https://neetcode.io/problems/last-stone-weight
 * 
 * You are given an array of integers stones where stones[i] represents the weight of the ith stone.
 * 
 * We want to run a simulation on the stones as follows:
 * 
 * At each step we choose the two heaviest stones, with weight x and y and smash them together.
 * - If x == y, both stones are destroyed.
 * - If x < y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 * 
 * Continue the simulation until there is no more than one stone remaining.
 * 
 * Return the weight of the last remaining stone or return 0 if none remain.
 * 
 * Example 1:
 * Input: stones = [2, 3, 6, 2, 4]
 * 
 * Visual representation:
 * Step 1: Smash 6 and 4 -> [2, 3, 2, 2]
 * Step 2: Smash 3 and 2 -> [1, 2, 2]
 * Step 3: Smash 2 and 2 -> [1]
 * 
 * Output: 1
 * 
 * Example 2:
 * Input: stones = [1, 2]
 * 
 * Visual representation:
 * Step 1: Smash 2 and 1 -> [1]
 * 
 * Output: 1
 * 
 * Constraints:
 * - 1 <= stones.length <= 20
 * - 1 <= stones[i] <= 100
 */

export function lastStoneWeight(stones: number[]): number {
    while (stones.length > 0) {
        // return the only stone if there if only one stone left 
        if (stones.length === 1) return stones[0]

        // Step 1: sort 
        stones.sort((a, b) => a - b);

        const stone1 = stones.pop()! // The heaviest stone
        const stone2 = stones.pop()! // The second heaviest stone

        // Step 2: If the two stones have different weights, push the difference back
        if (stone1 !== stone2) {
            stones.push(stone1 - stone2)
        }
    }
    // if there is no stone left 
    return 0
}

/**
 * Eating Bananas - Medium
 * 
 * https://neetcode.io/problems/eating-bananas
 * 
 * You are given an integer array piles where piles[i] is the number of bananas in the ith pile.
 * You are also given an integer h, which represents the number of hours you have to eat all the bananas.
 * 
 * You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eat k bananas from that pile.
 * If the pile has less than k bananas, you may finish eating the pile but you cannot eat from another pile in the same hour.
 * 
 * Return the minimum integer k such that you can eat all the bananas within h hours.
 * 
 * Example 1:
 * Input: piles = [1,4,3,2], h = 9
 * Output: 2
 * Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.
 * 
 * Example 2:
 * Input: piles = [25,10,23,4], h = 4
 * Output: 25
 * 
 * Constraints:
 * - 1 <= piles.length <= 1,000
 * - piles.length <= h <= 1,000,000
 * - 1 <= piles[i] <= 1,000,000,000
 * 
 * Solution:
 * This is a binary search problem. We search for the minimum eating rate `k` that can complete the task in `h` hours.
 * The search space for `k` ranges from 1 (the minimum eating rate) to the maximum number of bananas in a single pile.
 * We check each `k` value by simulating how many hours it would take to eat all the bananas with that rate.
 */

export function minEatingSpeed(piles: number[], h: number): number {
    const canFinish = (k: number) => {
        let hours = 0
        for (let pile of piles) {
            hours += Math.ceil(pile / k)
        }
        return hours <= h
    }

    let left = 1;
    let right = Math.max(...piles)

    while (left < right) {

        const mid = Math.floor((left + right) / 2)

        if (canFinish(mid)) {
            // keep mid value and search left part for smaller k value
            right = mid
        } else {
            left = mid + 1
        }

    }

    return left
}

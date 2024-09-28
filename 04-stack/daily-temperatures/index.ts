/**
 * Daily Temperatures - Medium
 * 
 * https://neetcode.io/problems/daily-temperatures
 * 
 * You are given an array of integers `temperatures` where `temperatures[i]` represents the daily temperatures on the ith day.
 * Return an array `result` where `result[i]` is the number of days after the ith day before a warmer temperature appears on a future day.
 * If there is no day in the future where a warmer temperature will appear for the ith day, set `result[i]` to 0 instead.
 * 
 * Example 1:
 * Input: temperatures = [30,38,30,36,35,40,28]
 * Output: [1, 4, 1, 2, 1, 0, 0]
 * 
 * Example 2:
 * Input: temperatures = [22,21,20]
 * Output: [0, 0, 0]
 * 
 * Constraints:
 * - 1 <= temperatures.length <= 1000
 * - 1 <= temperatures[i] <= 100
 * 
 * Solution:
 * - Use a stack to keep track of indices of temperatures.
 * - Traverse through the temperatures, and use the stack to find when the next warmer temperature occurs.
 */

export function dailyTemperatures(temperatures: number[]): number[] {
    // store index looking for higher temperatures
    const stack: number[] = []
    const result: number[] = Array.from({ length: temperatures.length }, () => 0)

    for (let i = 0; i < temperatures.length; i++) {
        const peakStackTop = (stack: number[]) => stack[stack.length - 1]
        while (stack.length > 0 && temperatures[i] > temperatures[peakStackTop(stack)]) {
            const idx = stack.pop()!
            result[idx] = i - idx
        }
        stack.push(i)
    }

    return result
}

/**
 * Trapping Rain Water - Hard
 * https://neetcode.io/problems/trapping-rain-water
 * 
 * You are given an array of non-negative integers `heights` representing an elevation map where each element represents the height of a bar with width 1.
 * 
 * Return the maximum amount of water that can be trapped between the bars.
 * 
 * Example 1:
 * Input: heights = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1]
 * Output: 9
 * 
 * Constraints:
 * - 1 <= heights.length <= 1000
 * - 0 <= heights[i] <= 1000
 */

export function trap(height: number[]): number {

    // Step1: init variables to trak 
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxRight = 0;
    let waterTrapped = 0;

    // Step2: traverse from both sides towards center, start from lower side  
    while (left <= right) {
        //  2.1 if left height is lower, work from left side
        if (height[left] < height[right]) {
            // if find new max left height
            if (height[left] >= maxLeft) {
                maxLeft = height[left]
            } else {
                // Update the water mount
                waterTrapped += maxLeft - height[left]
            }
            left++
        } else {
            // if find new max right height
            if (height[right] >= maxRight) {
                maxRight = height[right]
            } else {
                // Update the water mount
                waterTrapped += maxRight - height[right]
            }
            right--
        }
    }
    // Step 3: Return the total trapped water
    return waterTrapped
}
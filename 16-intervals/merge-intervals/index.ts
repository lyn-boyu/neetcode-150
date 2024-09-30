/**
 * Merge Intervals - Medium
 * 
 * https://neetcode.io/problems/merge-intervals
 * 
 * Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 * You may return the answer in any order.
 * 
 * Note: Intervals are non-overlapping if they have no common point. For example, [1, 2] and [3, 4] are non-overlapping, but [1, 2] and [2, 3] are overlapping.
 * 
 * Example 1:
 * Input: intervals = [[1,3],[1,5],[6,7]]
 * Output: [[1,5],[6,7]]
 * 
 * Example 2:
 * Input: intervals = [[1,2],[2,3]]
 * Output: [[1,3]]
 * 
 * Constraints:
 * - 1 <= intervals.length <= 1000
 * - intervals[i].length == 2
 * - 0 <= start <= end <= 1000
 */

export function mergeIntervals(intervals: [number, number][]): [number, number][] {
    // If there is only one interval or no intervals, return them directly as no merging is needed
    if (intervals.length <= 1) return intervals;

    const result = [];

    // Sort intervals by their start time to ensure correct order for merging
    intervals.sort((a, b) => a[0] - b[0]);

    // Use currentInterval to compare with the subsequent intervals for possible merging
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const [currStart, currEnd] = currentInterval;
        const [nextStart, nextEnd] = intervals[i];

        // If current interval overlaps with the next interval, merge them
        if (currEnd >= nextStart) {
            const mergedStart = Math.min(currStart, nextStart);
            const mergedEnd = Math.max(currEnd, nextEnd);
            currentInterval = [mergedStart, mergedEnd];
        } else {
            // If no overlap, add the current interval to the result and move to the next one
            result.push(currentInterval);
            currentInterval = intervals[i];
        }
    }

    // Add the last interval to the result
    result.push(currentInterval);

    return result;

}

/**
 * Non-overlapping Intervals - Medium
 * 
 * https://neetcode.io/problems/non-overlapping-intervals
 * 
 * Given an array of intervals intervals where intervals[i] = [start_i, end_i], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 * 
 * Note: Intervals are non-overlapping even if they have a common point. For example, [1, 3] and [2, 4] are overlapping, but [1, 2] and [2, 3] are non-overlapping.
 * 
 * Example 1:
 * Input: intervals = [[1,2],[2,4],[1,4]]
 * Output: 1
 * Explanation: After [1,4] is removed, the rest of the intervals are non-overlapping.
 * 
 * Example 2:
 * Input: intervals = [[1,2],[2,4]]
 * Output: 0
 * 
 * Constraints:
 * - 1 <= intervals.length <= 1000
 * - intervals[i].length == 2
 * - -50000 <= start_i < end_i <= 50000
 */

export function eraseOverlapIntervals(intervals: [number, number][]): number {
    if (intervals.length <= 1) return 0;

    // Sort intervals by their end time, preferring those that finish earlier to minimize overlap
    intervals.sort((a, b) => a[1] - b[1]);

    // Initialize the count of intervals to be removed
    let count = 0;

    // Pick the first interval as the current interval to compare with others
    let current = intervals[0];

    // Loop through the remaining intervals
    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = current;
        const [nextStart, nextEnd] = intervals[i];

        if (currentEnd > nextStart) {
            // If there is an overlap with the next interval, increment the count
            count++;
        } else {
            // If no overlap, move to the next interval and make it the current interval
            current = intervals[i];
        }
    }

    // Return the count of intervals that need to be removed
    return count;
}

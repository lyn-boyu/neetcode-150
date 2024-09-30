/**
 * Insert New Interval - Medium
 * 
 * https://neetcode.io/problems/insert-new-interval
 * 
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [start_i, end_i] represents the start and the end time of the ith interval. intervals is initially sorted in ascending order by start_i.
 * 
 * You are given another interval newInterval = [start, end].
 * 
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by start_i and also intervals still does not have any overlapping intervals. You may merge the overlapping intervals if needed.
 * 
 * Return intervals after adding newInterval.
 * 
 * Note: Intervals are non-overlapping if they have no common point. For example, [1,2] and [3,4] are non-overlapping, but [1,2] and [2,3] are overlapping.
 * 
 * Example 1:
 * Input: intervals = [[1,3],[4,6]], newInterval = [2,5]
 * Output: [[1,6]]
 * 
 * Example 2:
 * Input: intervals = [[1,2],[3,5],[9,10]], newInterval = [6,7]
 * Output: [[1,2],[3,5],[6,7],[9,10]]
 * 
 * Constraints:
 * - 0 <= intervals.length <= 1000
 * - newInterval.length == intervals[i].length == 2
 * - 0 <= start <= end <= 1000
 */

export function insertInterval(intervals: [number, number][], newInterval: [number, number]): [number, number][] {
    const reuslt: [number, number][] = []

    // Destructure the newInterval to get its start and end time.
    // This allows us to easily update nextStart and nextEnd when merging overlapping intervals.
    let [newStart, newEnd] = newInterval
    let i = 0

    // Add all intervals that come before the newInterval (no overlap)
    while (i < intervals.length && intervals[i][1] < newStart) {
        reuslt.push(intervals[i])
        i++;
    }

    // Merge all overlapping intervals with newInterval
    while (i < intervals.length && intervals[i][0] <= newEnd) {
        const [currentStart, currentEnd] = intervals[i];
        newStart = Math.min(newStart, currentStart);
        newEnd = Math.max(newEnd, currentEnd);
        i++;
    }
    // Add the merged interval
    reuslt.push([newStart, newEnd])


    // Add the remaining intervals
    while (i < intervals.length) {
        reuslt.push(intervals[i])
        i++
    }


    return reuslt
}

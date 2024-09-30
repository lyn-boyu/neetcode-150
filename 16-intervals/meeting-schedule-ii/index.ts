/**
 * Meeting Schedule II - Medium
 * 
 * https://neetcode.io/problems/meeting-schedule-ii
 * 
 * Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), find the minimum number of days required to schedule all meetings without any conflicts.
 * 
 * Example 1:
 * Input: intervals = [(0,40),(5,10),(15,20)]
 * Output: 2
 * Explanation:
 * day1: (0,40)
 * day2: (5,10),(15,20)
 * 
 * Example 2:
 * Input: intervals = [(4,9)]
 * Output: 1
 * 
 * Note:
 * (0,8),(8,10) is not considered a conflict at 8
 * 
 * Constraints:
 * - 0 <= intervals.length <= 500
 * - 0 <= intervals[i].start < intervals[i].end <= 1,000,000
 */

export function minMeetingDays(meetings: [number, number][]): number {
    if (meetings.length === 0) return 0;

    // Sort meetings by their start time
    meetings.sort((a, b) => a[0] - b[0]);

    // Initialize a min heap to track end times of ongoing meetings
    const minHeap: number[] = [];

    // Loop through each meeting interval
    for (let meeting of meetings) {
        const [currentStartTime, currentEndTime] = meeting;
        const prevEndTime = minHeap[0];

        // If the earliest ending meeting ends before or when the current meeting starts,
        // remove it from the heap since there is no conflict, i.e., the meeting room becomes free.
        if (minHeap.length > 0 && prevEndTime <= currentStartTime) {
            minHeap.shift();
        }

        // Add the current meeting's end time to the heap
        minHeap.push(currentEndTime);

        // Sort the heap to ensure that the earliest end time is always at the top
        minHeap.sort((a, b) => a - b);
    }

    // The length of the heap represents the minimum number of meeting rooms/days required
    return minHeap.length;
}

/**
 * Find Target in Rotated Sorted Array - Medium
 * 
 * https://neetcode.io/problems/find-target-in-rotated-sorted-array
 * 
 * You are given an array of length n which was originally sorted in ascending order.
 * It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
 * 
 * [3,4,5,6,1,2] if it was rotated 4 times.
 * [1,2,3,4,5,6] if it was rotated 6 times.
 * 
 * Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.
 * 
 * You may assume all elements in the sorted rotated array nums are unique,
 * 
 * A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?
 * 
 * Example 1:
 * 
 * Input: nums = [3,4,5,6,1,2], target = 1
 * Output: 4
 * 
 * Example 2:
 * 
 * Input: nums = [3,5,6,0,1,2], target = 4
 * Output: -1
 * 
 * Constraints:
 * 
 * 1 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -1000 <= target <= 1000
 */

export function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Determine which side of the array is sorted
        if (nums[left] <= nums[mid]) {
            // If the left side is sorted
            if (nums[left] <= target && target < nums[mid]) {
                // Target is in the left sorted portion, move to the left side
                right = mid - 1;
            } else {
                // Target is not in the left sorted portion, move to the right side
                left = mid + 1;
            }
        } else {
            // If the right side is sorted
            if (nums[mid] < target && target <= nums[right]) {
                // Target is in the right sorted portion, move to the right side
                left = mid + 1;
            } else {
                // Target is not in the right sorted portion, move to the left side
                right = mid - 1;
            }
        }
    }

    return -1; // If the target is not found
}

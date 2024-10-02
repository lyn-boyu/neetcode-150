/**
 * Kth Largest Integer in a Stream - Medium
 * 
 * https://neetcode.io/problems/kth-largest-integer-in-a-stream
 * 
 * Design a class to find the kth largest integer in a stream of values, including duplicates. 
 * E.g. the 2nd largest from [1, 2, 3, 3] is 3. The stream is not necessarily sorted.
 * 
 * Implement the following methods:
 * 
 * - constructor(int k, int[] nums) Initializes the object given an integer k and the stream of integers nums.
 * - int add(int val) Adds the integer val to the stream and returns the kth largest integer in the stream.
 * 
 * Example 1:
 * Input:
 * ["KthLargest", [3, [1, 2, 3, 3]], "add", [3], "add", [5], "add", [6], "add", [7], "add", [8]]
 * 
 * Visual representation:
 * Initial stream: [1, 2, 3, 3], k = 3
 * 
 * - add(3): Stream becomes [1, 2, 3, 3, 3], the 3rd largest is 3.
 * - add(5): Stream becomes [1, 2, 3, 3, 3, 5], the 3rd largest is 3.
 * - add(6): Stream becomes [1, 2, 3, 3, 3, 5, 6], the 3rd largest is 3.
 * - add(7): Stream becomes [1, 2, 3, 3, 3, 5, 6, 7], the 3rd largest is 5.
 * - add(8): Stream becomes [1, 2, 3, 3, 3, 5, 6, 7, 8], the 3rd largest is 6.
 * 
 * Output: [null, 3, 3, 3, 5, 6]
 * 
 * Constraints:
 * - 1 <= k <= 1000
 * - 0 <= nums.length <= 1000
 * - -1000 <= nums[i] <= 1000
 * - -1000 <= val <= 1000
 * - There will always be at least k integers in the stream when you search for the kth integer.
 */

class KthLargest {
    private minHeap: number[] = []
    private k: number


    constructor(k: number, nums: number[]) {
        this.k = k
        //  add each number to the heap, maintaining its size
        for (let num of nums) {
            this.add(num)
        }
    }

    add(val: number): number {
        // add value to the heap
        this.minHeap.push(val)
        this.minHeap.sort((a, b) => a - b)

        // keep only the k largest elements
        if (this.minHeap.length > this.k) {
            this.minHeap.shift()
        }

        // the kth largest is now the smallest in the heap
        return this.minHeap[0]
    }
}

export { KthLargest };

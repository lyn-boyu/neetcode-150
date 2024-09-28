/**
 * Linked List Cycle Detection - Easy
 * 
 * https://neetcode.io/problems/linked-list-cycle-detection
 * 
 * Given the beginning of a linked list `head`, return `true` if there is a cycle in the linked list. Otherwise, return `false`.
 * There is a cycle in a linked list if at least one node in the list that can be visited again by following the next pointer.
 * 
 * Example 1:
 * Input: head = [1,2,3,4], index = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 * 
 * Example 2:
 * Input: head = [1,2], index = -1
 * Output: false
 * 
 * Constraints:
 * - 1 <= Length of the list <= 1000
 * - -1000 <= Node.val <= 1000
 * - `index` is `-1` or a valid index in the linked list.
 * 
 * Solution:
 * - Use Floyd's Tortoise and Hare algorithm to detect the cycle.
 * - Use two pointers: `slow` and `fast`.
 * - If `slow` and `fast` meet at some point, there is a cycle.
 */

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function hasCycle(head: ListNode | null): boolean {
    return false
}

export { ListNode };
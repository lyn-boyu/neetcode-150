
/**
 * Reorder Linked List - Medium
 * 
 * https://neetcode.io/problems/reorder-linked-list
 * 
 * You are given the head of a singly linked-list.
 * 
 * The positions of a linked list of length = 7 for example, can initially be represented as:
 * 
 * [0, 1, 2, 3, 4, 5, 6]
 * 
 * Reorder the nodes of the linked list to be in the following order:
 * 
 * [0, 6, 1, 5, 2, 4, 3]
 * 
 * Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:
 * 
 * [0, n-1, 1, n-2, 2, n-3, ...]
 * 
 * You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.
 * 
 * Example 1:
 * 
 * Input: head = [2, 4, 6, 8]
 * Output: [2, 8, 4, 6]
 * 
 * Example 2:
 * 
 * Input: head = [2, 4, 6, 8, 10]
 * Output: [2, 10, 4, 8, 6]
 * 
 * Constraints:
 * 
 * 1 <= Length of the list <= 1000.
 * 1 <= Node.val <= 1000
 */

export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export function reorderList(head: ListNode | null): void {

    if (head === null || head.next === null) return

    // Step 1: Find the middle of the linked list using slow and fast pointers
    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (fast !== null && fast.next !== null) {
        slow = slow!.next // Slow pointer moves one step at a time.
        fast = fast.next.next // Fast pointer moves two steps at a time.
    }

    // Step 2: Reverse the second half of the linked list
    let prev: ListNode | null = null
    let current: ListNode | null = slow

    while (current) {
        const next = current.next as ListNode; // Store the next node temporarily.
        current.next = prev // Reverse the link.
        // Move forward
        prev = current
        current = next
    }

    // After reversing, `prev` becomes the new head of the reversed second half.

    // Step 3: Merge the two halves
    let first = head;
    let second = prev

    // The second list node is the head of the second half of the linked list.
    // It can be used to control the while loop for merging the two halves.
    while (second && second.next) {
        const temp1 = first.next
        const temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1!
        second = temp2
    }

}

/**
 * Reverse a Linked List - Easy
 * 
 * https://neetcode.io/problems/reverse-linked-list
 * 
 * Given the beginning of a singly linked list `head`, reverse the list, and return the new beginning of the list.
 * 
 * Example 1:
 * Input: head = [0,1,2,3]
 * Output: [3,2,1,0]
 * 
 * Example 2:
 * Input: head = []
 * Output: []
 * 
 * Constraints:
 * - 0 <= The length of the list <= 1000.
 * - -1000 <= Node.val <= 1000
 * 
 * Solution:
 * The solution is to iterate over the linked list, reversing the pointers at each step.
 * At each node, we change its `next` pointer to the previous node. 
 * At the end, the last node becomes the new head.
 */

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function reverseList(head: ListNode | null): ListNode | null {
    let current = head
    let prev = null

    while (current) {
        const next = current.next // Save the next node
        current.next = prev // Reverse the pointer
        prev = current  // Move prev forward
        current = next // Move curr forward
    }
    // When current becomes null, prev will be pointing to the new head of the reversed list
    return prev
}

export { ListNode };

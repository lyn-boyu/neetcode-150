// Remove Node From End of Linked List - Medium
// https://neetcode.io/problems/remove-node-from-end-of-linked-list

// You are given the beginning of a linked list head, and an integer n.
// Remove the nth node from the end of the list and return the beginning of the list.

// Example 1:
// Input: head = [1, 2, 3, 4], n = 2
// Output: [1, 2, 4]

// Example 2:
// Input: head = [5], n = 1
// Output: []

// Example 3:
// Input: head = [1, 2], n = 2
// Output: [2]

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Create a dummy node that points to the head to simplify edge cases
    const dummy = new ListNode(0, head);
    let first: ListNode | null = dummy;
    let second: ListNode | null = dummy;

    // Step 1: Move the first pointer n + 1 steps ahead to create a gap of n nodes between first and second pointers
    for (let i = 0; i <= n; i++) {
        first = first!.next;
    }

    // Step 2: Move both first and second pointers until first reaches the end of the list
    while (first !== null) {
        first = first.next;
        second = second!.next;
    }

    // Step 3: Detach the nth node from the end by skipping it in the linked list
    if (second && second.next) {
        second.next = second.next.next;
    }

    // Return the updated list starting from dummy.next (head of the original list, potentially updated)
    return dummy.next;
}

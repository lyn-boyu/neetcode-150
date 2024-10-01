/**
 * Copy Linked List with Random Pointer - Medium
 * 
 * https://neetcode.io/problems/copy-linked-list-with-random-pointer
 * 
 * You are given the head of a linked list of length n. Unlike a singly linked list, each node contains an additional pointer random, which may point to any node in the list, or null.
 * 
 * Create a deep copy of the list.
 * 
 * The deep copy should consist of exactly n new nodes, each including:
 * - The original value val of the copied node
 * - A next pointer to the new node corresponding to the next pointer of the original node
 * - A random pointer to the new node corresponding to the random pointer of the original node
 * 
 * Note: None of the pointers in the new list should point to nodes in the original list.
 * 
 * Return the head of the copied linked list.
 * 
 * In the examples, the linked list is represented as a list of n nodes. Each node is represented as a pair of [val, random_index] where random_index is the index of the node (0-indexed) that the random pointer points to, or null if it does not point to any node.
 * 
 * Example 1:
 * Input: head = [[3,null],[7,3],[4,0],[5,1]]
 * Output: [[3,null],[7,3],[4,0],[5,1]]
 * 
 * Example 2:
 * Input: head = [[1,null],[2,2],[3,2]]
 * Output: [[1,null],[2,2],[3,2]]
 * 
 * Constraints:
 * - 0 <= n <= 100
 * - -100 <= Node.val <= 100
 * - random is null or is pointing to some node in the linked list.
 */

export class ListNode {
    val: number;
    next: ListNode | null;
    random: ListNode | null;

    constructor(val?: number, next?: ListNode | null, random?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}
export function copyRandomList(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let current: ListNode | null = head;
    // The list structure transforms as follows:
    // Before: [A] -> [B] -> [C]
    // After:  [A] -> [A'] -> [B] -> [B'] -> [C] -> [C']
    // Where 'A', 'B', 'C' are original nodes, and 'A'', 'B'', 'C'' are their respective copies.
    while (current) {
        const copy: ListNode = new ListNode(current.val, current.next);
        current.next = copy;
        // Move fwd
        current = copy.next;
    }

    // Step 2: Assign random pointers for the copied nodes
    current = head;
    while (current) {
        if (current.random) {
            // The copied node is current.next.
            // Set the random pointer of the copied node (current.next)
            // to point to the copy of the node that current.random points to(current.random.next).
            current.next!.random = current.random.next!;
        }
        // Move to the next original node
        current = current.next!.next;
    }

    // Step 3: Separate the original list and the copied list
    current = head;
    const newHead = head.next;
    while (current) {
        const copy: ListNode = current.next!;
        // Restore the next pointer of the original node
        current.next = copy.next;
        // Set the next pointer for the copied node
        if (copy.next) {
            copy.next = copy.next.next;
        }
        // Move to the next original node
        current = current.next;
    }

    return newHead;
}

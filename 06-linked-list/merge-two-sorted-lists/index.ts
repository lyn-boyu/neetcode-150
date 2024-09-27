/**
 * Merge Two Sorted Lists - Easy
 * 
 * https://neetcode.io/problems/merge-two-sorted-lists
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 * 
 * Return the head of the merged linked list.
 * 
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 * 
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 * 
 * Constraints:
 * - The number of nodes in both lists is in the range [0, 50].
 * - -100 <= Node.val <= 100
 * - Both list1 and list2 are sorted in non-decreasing order.
 */

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // create a dummy node as the head of the merge list
    const dummy = new ListNode()
    let current = dummy

    // Merge the two lists while both are non-empty
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        // update current pointer to tail node
        current = current.next
    }

    // Append the remaining elements of either list
    if (list1 !== null) {
        current.next = list1
    } else if (list2 !== null) {
        current.next = list2
    }

    // Return the merged list, which starts at dummy.next
    return dummy.next
}

export { ListNode };

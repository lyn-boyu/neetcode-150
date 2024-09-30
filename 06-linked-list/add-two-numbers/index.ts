// NeetCode link: https://neetcode.io/problems/add-two-numbers
// Difficulty: Medium

// You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.
// The digits are stored in reverse order, e.g., the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.
// Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Return the sum of the two numbers as a linked list.

// Example 1:
// Input: l1 = [1, 2, 3], l2 = [4, 5, 6]
// Output: [5, 7, 9]
// Explanation: 321 + 654 = 975.

// Example 2:
// Input: l1 = [9], l2 = [9]
// Output: [8, 1]

// Constraints:
// 1 <= l1.length, l2.length <= 100
// 0 <= Node.val <= 9

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return null
}

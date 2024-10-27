/**
 * Merge K Sorted Linked Lists - Hard
 * https://neetcode.io/problems/merge-k-sorted-linked-lists
 * 
 * You are given an array of k linked lists `lists`, where each list is sorted in ascending order.
 * 
 * Return the sorted linked list that is the result of merging all of the individual linked lists.
 * 
 * Example 1:
 * Input: lists = [[1,2,4],[1,3,5],[3,6]]
 * Output: [1,1,2,3,3,4,5,6]
 * Explanation: Merging all sorted linked lists, we get a single sorted list [1,1,2,3,3,4,5,6].
 * 
 * Example 2:
 * Input: lists = []
 * Output: []
 * Explanation: There are no lists to merge, so the output is an empty list.
 * 
 * Example 3:
 * Input: lists = [[]]
 * Output: []
 * Explanation: The only list is an empty list, so the result is also an empty list.
 * 
 * Constraints:
 * - 0 <= lists.length <= 1000
 * - 0 <= lists[i].length <= 100
 * - -1000 <= lists[i][j] <= 1000
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // Step1: handle edge cases
    if (!lists.length) return null

    // Step2: merge list using a min heap
    // 2.1 init heap
    const minHeap: ListNode[] = []

    // 2.2 initialize the heap with the head of each list
    for (let head of lists) {
        if (head) minHeap.push(head)
    }
    // 2.3 keep heap  in asc order
    minHeap.sort((a, b) => a.val - b.val)

    // setup a dummy head for the reuslt 
    const dummy = new ListNode(0);
    let current = dummy;

    // traverse minheap 
    while (minHeap.length > 0) {
        // link smallest node to dummy list
        const smallestNode = minHeap.shift()!;
        current.next = smallestNode;
        current = current.next
        // push next node to heap and keep in order
        if (smallestNode.next) {
            minHeap.push(smallestNode.next);
            minHeap.sort((a, b) => a.val - b.val)
        }
    }

    // Step 3: return the merged list 
    return dummy.next
}

export { ListNode };

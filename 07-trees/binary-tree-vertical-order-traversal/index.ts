/**
 * Binary Tree Vertical Order Traversal - Medium
 * 
 * https://neetcode.io/problems/binary-tree-vertical-order-traversal
 * 
 * Given the `root` of a binary tree, return the vertical order traversal of its nodes' values.
 * (i.e., from top to bottom, column by column).
 * 
 * Example 1:
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * 
 * Visual representation:
 *           3
 *          / \
 *         9  20
 *            / \
 *           15  7
 * 
 * Output: [[9], [3, 15], [20], [7]]
 * Explanation: Nodes with the same vertical position are grouped together.
 * 
 * Example 2:
 * Input: root = [1, 2, 3, 4, 5, 6, 7]
 * 
 * Visual representation:
 *           1
 *          / \
 *         2   3
 *        / \ / \
 *       4  5 6  7
 * 
 * Output: [[4], [2], [1, 5, 6], [3], [7]]
 * Explanation: Nodes are ordered by their vertical distance from the root.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 1000].
 * - `-1000 <= Node.val <= 1000`
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function verticalOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];

    const columnTable: Map<number, number[]> = new Map();
    const queue: [TreeNode, number][] = [[root, 0]]; // Queue containing nodes and their corresponding column index

    let minColumn = 0;
    let maxColumn = 0;

    while (queue.length > 0) {
        const [node, column] = queue.shift()!;

        if (!columnTable.has(column)) {
            columnTable.set(column, []);
        }
        columnTable.get(column)!.push(node.val);

        if (node.left !== null) {
            queue.push([node.left, column - 1]);
            minColumn = Math.min(minColumn, column - 1);
        }

        if (node.right !== null) {
            queue.push([node.right, column + 1]);
            maxColumn = Math.max(maxColumn, column + 1);
        }
    }

    const result: number[][] = [];
    for (let i = minColumn; i <= maxColumn; i++) {
        result.push(columnTable.get(i)!);
    }

    return result;
}

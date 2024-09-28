/**
 * Binary Tree Vertical Order Traversal - Medium
 * 
 * https://neetcode.io/problems/binary-tree-vertical-order-traversal
 * 
 * Given the `root` of a binary tree, return the vertical order traversal of its nodes' values.
 * (i.e., from top to bottom, column by column).
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[9], [3, 15], [20], [7]]
 * 
 * Example 2:
 * Input: root = [1,2,3,4,5,6,7]
 * Output: [[4], [2], [1, 5, 6], [3], [7]]
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 1000].
 * - `-1000 <= Node.val <= 1000`
 * 
 * Solution:
 * - Use a Breadth-First Search (BFS) traversal to traverse nodes level by level.
 * - Track the column index for each node and use a map to store nodes for each column.
 * - Sort the columns at the end and return nodes in each vertical level.
 */

class TreeNode {
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
    if (!root) return [];

    const columnTable = new Map<number, number[]>();
    const queue: [TreeNode, number][] = [[root, 0]];
    let minColumn = 0;
    let maxColumn = 0;

    while (queue.length > 0) {
        const [node, column] = queue.shift()!;

        if (node) {
            if (!columnTable.has(column)) {
                columnTable.set(column, []);
            }
            columnTable.get(column)!.push(node.val);

            minColumn = Math.min(minColumn, column);
            maxColumn = Math.max(maxColumn, column);

            if (node.left) queue.push([node.left, column - 1]);
            if (node.right) queue.push([node.right, column + 1]);
        }
    }

    const result: number[][] = [];
    for (let i = minColumn; i <= maxColumn; i++) {
        result.push(columnTable.get(i)!);
    }

    return result;
}

export { TreeNode };

/**
 * Count Good Nodes in Binary Tree - Medium
 * 
 * https://neetcode.io/problems/count-good-nodes-in-binary-tree
 * 
 * Within a binary tree, a node x is considered good if the path from the root of the tree to the node x contains no nodes with a value greater than the value of node x.
 * 
 * Given the root of a binary tree root, return the number of good nodes within the tree.
 * 
 * Example 1:
 * Input: root = [2, 1, 1, 3, null, 1, 5]
 * 
 * Visual representation:
 *             2
 *            / \
 *           1   1
 *          /     \
 *         3       5
 *          \
 *           1
 * 
 * Output: 3
 * Explanation: Nodes 2, 3, and 5 are good nodes.
 * 
 * Example 2:
 * Input: root = [1, 2, -1, 3, 4]
 * 
 * Visual representation:
 *             1
 *            / \
 *           2  -1
 *          / \
 *         3   4
 * 
 * Output: 4
 * Explanation: Nodes 1, 2, 3, and 4 are good nodes.
 * 
 * Constraints:
 * - 1 <= number of nodes in the tree <= 100
 * - -100 <= Node.val <= 100
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

export function goodNodes(root: TreeNode | null): number {

    const countGoodNodes = (node: TreeNode | null, maxSoFar: number) => {
        if (node === null) {
            return 0
        }

        let count = 0;

        if (node.val >= maxSoFar) {
            count = 1
        }

        maxSoFar = Math.max(maxSoFar, node.val)

        count += countGoodNodes(node.left, maxSoFar)
        count += countGoodNodes(node.right, maxSoFar);

        return count
    }


    return countGoodNodes(root, root!.val)
}

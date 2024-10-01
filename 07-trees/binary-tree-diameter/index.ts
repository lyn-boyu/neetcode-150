/**
 * Binary Tree Diameter - Medium
 * 
 * https://neetcode.io/problems/binary-tree-diameter
 * 
 * The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.
 * 
 * The length of a path between two nodes in a binary tree is the number of edges between the nodes.
 * 
 * Given the root of a binary tree root, return the diameter of the tree.
 * 
 * Example 1:
 * Input: root = [1, null, 2, 3, 4, 5]
 * 
 * Visual representation:
 *           1
 *            \
 *             2
 *            / \
 *           3   4
 *          /
 *         5
 * 
 * Output: 3
 * Explanation: 3 is the length of the path [1,2,3,5] or [5,3,2,4].
 * 
 * Example 2:
 * Input: root = [1, 2, 3]
 * 
 * Visual representation:
 *        1
 *       / \
 *      2   3
 * 
 * Output: 2
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

export function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    const depth = (root: TreeNode | null): number => {
        if (!root) return 0

        const rightDepth = depth(root.right)
        const leftDepth = depth(root.left)

        diameter = Math.max(diameter, rightDepth + leftDepth)

        return Math.max(rightDepth, leftDepth) + 1
    }

    depth(root)

    return diameter
}

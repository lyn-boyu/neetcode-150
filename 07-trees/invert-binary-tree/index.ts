
/**
 * Invert a Binary Tree - Easy
 * 
 * https://neetcode.io/problems/invert-binary-tree
 * 
 * You are given the root of a binary tree root. Invert the binary tree and return its root.
 * 
 * Example 1:
 * Input: root = [1,2,3,4,5,6,7]
 * 
 * Original Tree:
 *         1
 *        / \
 *       2   3
 *      / \ / \
 *     4  5 6  7
 * 
 * Output: [1,3,2,7,6,5,4]
 * 
 * Inverted Tree:
 *         1
 *        / \
 *       3   2
 *      / \ / \
 *     7  6 5  4
 * 
 * Example 2:
 * Input: root = [3,2,1]
 * 
 * Original Tree:
 *         3
 *        / \
 *       2   1
 * 
 * Output: [3,1,2]
 * 
 * Inverted Tree:
 *         3
 *        / \
 *       1   2
 * 
 * Example 3:
 * Input: root = []
 * Output: []
 * 
 * Constraints:
 * - 0 <= The number of nodes in the tree <= 100
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

export function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return root

    // Store the reference to the current left subtree
    const left = root.left

    // Recursively invert the right subtree and assign it to the left child of the current root
    root.left = invertTree(root.right)
    // Recursively invert the stored left subtree and assign it to the right child of the current root
    root.right = invertTree(left)

    return root;
}

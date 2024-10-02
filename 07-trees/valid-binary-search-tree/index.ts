/**
 * Valid Binary Search Tree - Medium
 * 
 * https://neetcode.io/problems/valid-binary-search-tree
 * 
 * Given the root of a binary tree, return true if it is a valid binary search tree, otherwise return false.
 * 
 * A valid binary search tree satisfies the following constraints:
 * - The left subtree of every node contains only nodes with keys less than the node's key.
 * - The right subtree of every node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees are also binary search trees.
 * 
 * Example 1:
 * Input: root = [2, 1, 3]
 * 
 * Visual representation:
 *           2
 *          / \
 *         1   3
 * 
 * Output: true
 * Explanation: The left child (1) is less than the root (2), and the right child (3) is greater than the root.
 * 
 * Example 2:
 * Input: root = [1, 2, 3]
 * 
 * Correct Visual representation:
 *           1
 *          / \
 *         2   3
 * 
 * Output: false
 * Explanation: The root node's value is 1, but its left child's value is 2, which is greater than 1. This violates the BST property.
 * 
 * Constraints:
 * - 1 <= The number of nodes in the tree <= 1000
 * - -1000 <= Node.val <= 1000
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



export function isValidBST(root: TreeNode | null): boolean {
    return false
}
/**
 * Balanced Binary Tree - Easy
 * 
 * https://neetcode.io/problems/balanced-binary-tree
 * 
 * Given a binary tree, return true if it is height-balanced and false otherwise.
 * 
 * A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 * 
 * Example 1:
 * Input: root = [1,2,3,null,null,4]
 * 
 * Visual representation:
 *         1
 *        / \
 *       2   3
 *        \
 *         4
 * 
 * Output: true
 * 
 * Example 2:
 * Input: root = [1,2,3,null,null,4,null,5]
 * 
 * Visual representation:
 *         1
 *        / \
 *       2   3
 *        \
 *         4
 *          \
 *           5
 * 
 * Output: false
 * 
 * Example 3:
 * Input: root = []
 * Output: true
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 1000].
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

export function isBalanced(root: TreeNode | null): boolean {
    return false
}

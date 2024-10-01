/**
 * Level Order Traversal of Binary Tree - Medium
 * 
 * https://neetcode.io/problems/level-order-traversal
 * 
 * Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.
 * 
 * Example 1:
 * Input: root = [1, 2, 3, 4, 5, 6, 7]
 * 
 * Visual representation:
 *           1
 *         /   \
 *        2     3
 *       / \   / \
 *      4  5  6   7
 * 
 * Output: [[1], [2, 3], [4, 5, 6, 7]]
 * 
 * Example 2:
 * Input: root = [1]
 * 
 * Visual representation:
 *         1
 * 
 * Output: [[1]]
 * 
 * Example 3:
 * Input: root = []
 * Output: []
 * 
 * Constraints:
 * - 0 <= The number of nodes in both trees <= 1000
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

export function levelOrder(root: TreeNode | null): number[][] {
    return []
}

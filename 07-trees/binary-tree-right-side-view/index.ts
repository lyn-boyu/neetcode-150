/**
 * Binary Tree Right Side View - Medium
 * 
 * https://neetcode.io/problems/binary-tree-right-side-view
 * 
 * You are given the root of a binary tree. Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.
 * 
 * Example 1:
 * Input: root = [1, 2, 3]
 * 
 * Visual representation:
 *         1
 *        / \
 *       2   3
 * 
 * Output: [1, 3]
 * Explanation: From the right side, we can see nodes 1 and 3.
 * 
 * Example 2:
 * Input: root = [1, 2, 3, 4, 5, 6, 7]
 * 
 * Visual representation:
 *           1
 *         /   \
 *        2     3
 *       / \   / \
 *      4  5  6   7
 * 
 * Output: [1, 3, 7]
 * Explanation: From the right side, we can see nodes 1, 3, and 7.
 * 
 * Constraints:
 * - 0 <= number of nodes in the tree <= 100
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

export function rightSideView(root: TreeNode | null): number[] {
   return []
}

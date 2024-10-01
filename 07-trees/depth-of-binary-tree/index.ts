/**
 * Depth of Binary Tree - Easy
 * 
 * https://neetcode.io/problems/depth-of-binary-tree
 * 
 * Given the root of a binary tree, return its depth.
 * 
 * The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * Example 1:
 * Input: root = [1,2,3,null,null,4]
 * 
 * Visual representation:
 *         1
 *        / \
 *       2   3
 *          /
 *         4
 * 
 * Output: 3
 * 
 * Example 2:
 * Input: root = []
 * Output: 0
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

export function maxDepth(root: TreeNode | null): number {
    return -1
}

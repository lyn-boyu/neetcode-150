/**
 * Kth Smallest Integer in BST - Medium
 * https://neetcode.io/problems/kth-smallest-integer-in-bst
 * 
 * Given the root of a binary search tree, and an integer `k`, return the `kth` smallest value (1-indexed) in the tree.
 * 
 * A binary search tree (BST) satisfies the following constraints:
 * - The left subtree of every node contains only nodes with keys less than the node's key.
 * - The right subtree of every node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees are also binary search trees.
 * 
 * Example 1:
 * Input: root = [2,1,3], k = 1
 * Output: 1
 * Explanation: The smallest value in the tree is 1, which is the 1st smallest.
 * 
 * Example 2:
 * Input: root = [4,3,5,2,null], k = 4
 * Output: 5
 * Explanation: The 4th smallest value in the tree is 5.
 * 
 * Constraints:
 * - 1 <= k <= The number of nodes in the tree <= 1000.
 * - 0 <= Node.val <= 1000
 */

// Definition for a binary tree node.
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

export function kthSmallest(root: TreeNode | null, k: number): number {
    return 0;
}


export { TreeNode };
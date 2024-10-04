/**
 * Lowest Common Ancestor in Binary Search Tree - Easy
 * 
 * https://neetcode.io/problems/lowest-common-ancestor-in-bst
 * 
 * Given a binary search tree (BST) where all node values are unique, and two nodes from the tree p and q, return the lowest common ancestor (LCA) of the two nodes.
 * 
 * The lowest common ancestor between two nodes p and q is the lowest node in a tree T such that both p and q are descendants. The ancestor is allowed to be a descendant of itself.
 * 
 * Example 1:
 * Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8
 * 
 * Visual representation:
 *           5
 *          / \
 *         3   8
 *        / \  / \
 *       1  4 7   9
 *        \
 *         2
 * 
 * Output: 5
 * Explanation: The LCA of nodes 3 and 8 is 5.
 * 
 * Example 2:
 * Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 4
 * 
 * Visual representation:
 *           5
 *          / \
 *         3   8
 *        / \  / \
 *       1  4 7   9
 *        \
 *         2
 * 
 * Output: 3
 * Explanation: The LCA of nodes 3 and 4 is 3, since a node can be a descendant of itself.
 * 
 * Constraints:
 * - 2 <= The number of nodes in the tree <= 100
 * - -100 <= Node.val <= 100
 * - p != q
 * - p and q will both exist in the BST
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

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    return null
}

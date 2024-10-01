/**
 * Subtree of a Binary Tree - Medium
 * 
 * https://neetcode.io/problems/subtree-of-a-binary-tree
 * 
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
 * 
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
 * 
 * Example 1:
 * Input: root = [1,2,3,4,5], subRoot = [2,4,5]
 * 
 * Visual representation:
 *      Tree root
 *          1
 *         / \
 *        2   3
 *       / \
 *      4   5
 * 
 *      Subtree subRoot
 *        2
 *       / \
 *      4   5
 * 
 * Output: true
 * Explanation: The subtree starting at node 2 in the root matches subRoot.
 * 
 * Example 2:
 * Input: root = [1,2,3,4,5,null,null,6], subRoot = [2,4,5]
 * 
 * Visual representation:
 *      Tree root
 *          1
 *         / \
 *        2   3
 *       / \
 *      4   5
 *     /
 *    6
 * 
 *      Subtree subRoot
 *        2
 *       / \
 *      4   5
 * 
 * Output: false
 * Explanation: The structure under node 2 in the root does not match subRoot due to the extra node 6.
 * 
 * Constraints:
 * - 0 <= The number of nodes in both trees <= 100
 * - -100 <= root.val, subRoot.val <= 100
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

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    return false
}


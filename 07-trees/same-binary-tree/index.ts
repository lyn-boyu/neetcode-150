/**
 * Same Binary Tree - Easy
 * 
 * https://neetcode.io/problems/same-binary-tree
 * 
 * Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.
 * 
 * Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.
 * 
 * Example 1:
 * Input: p = [1,2,3], q = [1,2,3]
 * 
 * Visual representation:
 *      Tree p        Tree q
 *        1             1
 *       / \           / \
 *      2   3         2   3
 * 
 * Output: true
 * Explanation: Both trees have the same structure and the same node values.
 * 
 * Example 2:
 * Input: p = [4,7], q = [4,null,7]
 * 
 * Visual representation:
 *      Tree p        Tree q
 *        4             4
 *       /             \
 *      7               7
 * 
 * Output: false
 * Explanation: The trees have different structures.
 * 
 * Example 3:
 * Input: p = [1,2,3], q = [1,3,2]
 * 
 * Visual representation:
 *      Tree p        Tree q
 *        1             1
 *       / \           / \
 *      2   3         3   2
 * 
 * Output: false
 * Explanation: The node values are different.
 * 
 * Constraints:
 * - 0 <= The number of nodes in both trees <= 100
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

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return false
}

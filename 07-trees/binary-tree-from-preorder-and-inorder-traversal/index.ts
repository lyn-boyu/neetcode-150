/**
 * Binary Tree from Preorder and Inorder Traversal - Medium
 * https://neetcode.io/problems/binary-tree-from-preorder-and-inorder-traversal
 * 
 * You are given two integer arrays `preorder` and `inorder` representing the preorder and inorder traversal of a binary tree.
 * Both arrays are of the same size and consist of unique values.
 * Rebuild the binary tree from the preorder and inorder traversals and return its root.
 * 
 * Example 1:
 * Input: preorder = [1, 2, 3, 4], inorder = [2, 1, 3, 4]
 * Output: [1, 2, 3, null, null, null, 4]
 * Explanation: The tree structure is:
 *      1
 *     / \
 *    2   3
 *         \
 *          4
 * 
 * Example 2:
 * Input: preorder = [1], inorder = [1]
 * Output: [1]
 * Explanation: The tree structure is a single node:
 *      1
 * 
 * Constraints:
 * - 1 <= inorder.length <= 1000
 * - inorder.length == preorder.length
 * - -1000 <= preorder[i], inorder[i] <= 1000
 */

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

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    return  null
}

export { TreeNode };

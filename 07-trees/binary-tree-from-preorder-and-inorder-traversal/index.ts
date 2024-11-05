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
    // Step 1: Handle base case
    // 1.1 If there are no elements in preorder or inorder, return null (empty tree)
    if (!preorder.length || !inorder.length) {
        return null
    }

    // Step 2: Create root node 
    // 2.1 Root node is the first element in preorder
    const rootValue = preorder[0]
    const root = new TreeNode(rootValue)

    // Step3: Recursively build left and right subtrees
    // 3.1 find root idx in inorder lists
    const mid = inorder.indexOf(rootValue)

    // 3.2 Build the left subtree from the left part of preorder and inorder arrays
    root.left = buildTree(
        preorder.slice(1, mid + 1),  // Left subtree in preorder (skip root)
        inorder.slice(0, mid)        // Left subtree in inorder
    );

    // 3.3 Build the right subtree from the right part of preorder and inorder arrays
    root.right = buildTree(
        preorder.slice(mid + 1), // Right subtree in preorder
        inorder.slice(mid + 1)   // Right subtree in preorder
    )

    // Return the constructed root node
    return root
}

export { TreeNode };

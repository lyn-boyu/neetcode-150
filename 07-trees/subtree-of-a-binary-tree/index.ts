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

// Function to check if two binary trees are identical
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // 1. Edge cases: handle null nodes
    // 1.1 If both nodes are null, they are considered identical
    if (p === null && q === null) {
        return true;
    }

    // 1.2 If only one of the nodes is null, they are not identical
    if (p === null || q === null) {
        return false;
    }

    // 2. Value check: compare the values of the current nodes
    if (p.val !== q.val) {
        return false;
    }

    // 3. Recursive check: verify the left and right subtrees are identical
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Function to check if subRoot is a subtree of root
export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // 1. Edge cases: handle null nodes
    // 1.1 If subRoot is null, it is a subtree of any tree
    if (subRoot === null) {
        return true;
    }

    // 1.2 If root is null and subRoot is not, subRoot cannot be a subtree
    if (root === null) {
        return false;
    }

    // 2. Match check: check if the current subtree matches subRoot
    if (isSameTree(root, subRoot)) {
        return true;
    }

    // 3. Recursive check: verify if subRoot is a subtree of the left or right subtree of root
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

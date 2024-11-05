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
    // Step1:  Set up variables for in-order traversal
    const stack = []
    let currentNode = root

    // Step2: perform in-order traverse the tree  
    while (currentNode || stack.length > 0) {

        // 2.1 Traverse left subtree by pushing node onto stack
        while (currentNode) {
            // push current node to the stack
            stack.push(currentNode);
            currentNode = currentNode.left
        }

        // 2.2 process the node on the top of the stack *
        currentNode = stack.pop()!
        k--;

        // 2.3 if k reachs 0, we have found the kth smallest tree node
        if (k === 0) {
            return currentNode.val
        }

        // 2.4 move to the right subtree
        currentNode = currentNode.right
    }

    // Step3: return 0 as a fallback
    return 0;
}


export { TreeNode };
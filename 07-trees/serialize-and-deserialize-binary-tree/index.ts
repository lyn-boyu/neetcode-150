/**
 * Serialize and Deserialize Binary Tree - Hard
 * https://neetcode.io/problems/serialize-and-deserialize-binary-tree
 * 
 * Implement an algorithm to serialize and deserialize a binary tree.
 * Serialization is the process of converting an in-memory structure into a sequence of bits
 * so that it can be stored or sent across a network to be reconstructed later in another computer environment.
 * 
 * The goal is to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 * 
 * Example 1:
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
 * Explanation:
 *          1
 *         / \
 *        2   3
 *           / \
 *          4   5
 * 
 * Example 2:
 * Input: root = []
 * Output: []
 * Explanation: An empty tree represented by an empty array.
 * 
 * Constraints:
 * - 0 <= The number of nodes in the tree <= 1000.
 * - -1000 <= Node.val <= 1000
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export class Codec {
    serialize(root: TreeNode | null): string {
      return ''
    }

    deserialize(data: string): TreeNode | null {
        return null
    }
}

export { TreeNode };

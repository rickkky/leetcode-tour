/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number;
    left: TreeNode | undefined;
    right: TreeNode | undefined;
    constructor(val?: number, left?: TreeNode, right?: TreeNode) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? undefined : left;
        this.right = right === undefined ? undefined : right;
    }
}

// @lc code=start
function levelOrder(root: TreeNode | undefined): number[][] {
    if (!root) {
        return [];
    }
    // a queue to store unhandled nodes
    const queue: TreeNode[] = [root];
    const result: number[][] = [];
    while (queue.length > 0) {
        // store the sequences of the current level
        const sequences: number[] = [];
        // number of nodes in the current level
        const length = queue.length;
        for (let i = 0; i < length; ++i) {
            const node = queue.shift() as TreeNode;
            sequences.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(sequences);
    }
    return result;
}
// @lc code=end

export { levelOrder };

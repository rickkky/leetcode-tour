/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/
 */

/**
 * Definition for a binary tree node.
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

// @lc code=start
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    const ret: number[][] = [];
    // Store unhandled nodes.
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const seq: number[] = [];
        const len = queue.length;
        for (let i = 0; i < len; ++i) {
            const node = queue.shift()!;
            seq.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        ret.push(seq);
    }
    return ret;
}
// @lc code=end

export { levelOrder };

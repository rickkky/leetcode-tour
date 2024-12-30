/*
 * @lc app=leetcode id=103 lang=typescript
 *
 * https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/
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
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    const ret: number[][] = [];
    // A double-ended queue to store unhandled nodes.
    const dequeue: TreeNode[] = [root];
    let reverse = false;
    while (dequeue.length > 0) {
        const seq = [];
        const len = dequeue.length;
        for (let i = 0; i < len; i++) {
            const node = dequeue.shift()!;
            if (reverse) {
                seq.unshift(node.val);
            } else {
                seq.push(node.val);
            }
            if (node.left) {
                dequeue.push(node.left);
            }
            if (node.right) {
                dequeue.push(node.right);
            }
        }
        ret.push(seq);
        reverse = !reverse;
    }
    return ret;
}
// @lc code=end

export { zigzagLevelOrder };

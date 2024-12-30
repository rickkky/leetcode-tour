/*
 * @lc app=leetcode.cn id=662 lang=typescript
 *
 * https://leetcode.cn/problems/maximum-width-of-binary-tree/
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
function widthOfBinaryTree(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    // The Number.MAX_SAFE_INTEGER is `2^53 - 1`,
    // and there are test cases with a tree more than 53 levels deep.
    // Use BigInt instead to avoid number overflow.
    let queue: [TreeNode, bigint][] = [[root, 0n]];
    let maxWidth = 1;
    while (queue.length > 0) {
        maxWidth = Math.max(
            maxWidth,
            Number(queue[queue.length - 1][1] - queue[0][1] + 1n),
        );
        const nextQueue: [TreeNode, bigint][] = [];
        for (const [node, index] of queue) {
            if (node.left) {
                nextQueue.push([node.left, index * 2n]);
            }
            if (node.right) {
                nextQueue.push([node.right, index * 2n + 1n]);
            }
        }
        queue = nextQueue;
    }
    return maxWidth;
}
// @lc code=end

export { widthOfBinaryTree };

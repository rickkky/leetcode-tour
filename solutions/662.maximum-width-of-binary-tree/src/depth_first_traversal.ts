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
function dft(
    node: TreeNode | null,
    level: number,
    index: bigint,
    levelToMin: Map<number, bigint>,
): number {
    if (!node) {
        return 0;
    }
    // Record the min index of each level.
    if (!levelToMin.has(level)) {
        levelToMin.set(level, index);
    }
    return Math.max(
        Number(index - levelToMin.get(level)! + 1n),
        dft(node.left, level + 1, index * 2n, levelToMin),
        dft(node.right, level + 1, index * 2n + 1n, levelToMin),
    );
}

function widthOfBinaryTree(root: TreeNode | null): number {
    return dft(root, 0, 0n, new Map<number, bigint>());
}
// @lc code=end

export { widthOfBinaryTree };

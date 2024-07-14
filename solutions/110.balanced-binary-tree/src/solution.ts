/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * https://leetcode.cn/problems/balanced-binary-tree/
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
function height(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    const leftHeight = height(root.left);
    if (leftHeight < 0) {
        return -1;
    }
    const rightHeight = height(root.right);
    if (rightHeight < 0) {
        return -1;
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
    return height(root) >= 0;
}
// @lc code=end

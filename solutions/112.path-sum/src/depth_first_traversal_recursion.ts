/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * https://leetcode.cn/problems/path-sum/
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
function hasPathSum(root: TreeNode | null, target: number): boolean {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return root.val === target;
    }
    return (
        hasPathSum(root.left, target - root.val) ||
        hasPathSum(root.right, target - root.val)
    );
}
// @lc code=end

export { hasPathSum };

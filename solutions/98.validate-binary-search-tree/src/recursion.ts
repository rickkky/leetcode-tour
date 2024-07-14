/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * https://leetcode.cn/problems/validate-binary-search-tree/
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
function isTreeInRange(
    root: TreeNode | null,
    min: number,
    max: number,
): boolean {
    if (!root) {
        return true;
    }
    if (root.val <= min || root.val >= max) {
        return false;
    }
    return (
        isTreeInRange(root.left, min, root.val) &&
        isTreeInRange(root.right, root.val, max)
    );
}

function isValidBST(root: TreeNode | null): boolean {
    return isTreeInRange(root, -Infinity, Infinity);
}
// @lc code=end

export { isValidBST };

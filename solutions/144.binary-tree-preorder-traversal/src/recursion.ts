/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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
function dft(root: TreeNode | null, ret: number[]) {
    if (!root) {
        return;
    }
    ret.push(root.val);
    dft(root.left, ret);
    dft(root.right, ret);
}

function preorderTraversal(root: TreeNode | null): number[] {
    const ret: number[] = [];
    dft(root, ret);
    return ret;
}
// @lc code=end

export { preorderTraversal };

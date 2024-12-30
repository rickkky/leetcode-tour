/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
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
    dft(root.left, ret);
    ret.push(root.val);
    dft(root.right, ret);
}

function inorderTraversal(root: TreeNode | null): number[] {
    const ret: number[] = [];
    dft(root, ret);
    return ret;
}
// @lc code=end

export { inorderTraversal };

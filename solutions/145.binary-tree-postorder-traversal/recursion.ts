/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal
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
function postorderTraversalRecursive(
    root: TreeNode | null,
    sequences: number[],
): void {
    if (!root) {
        return;
    }
    postorderTraversalRecursive(root.left, sequences);
    postorderTraversalRecursive(root.right, sequences);
    sequences.push(root.val);
}

function postorderTraversal(root: TreeNode | null): number[] {
    const sequences: number[] = [];
    postorderTraversalRecursive(root, sequences);
    return sequences;
}
// @lc code=end

export {};

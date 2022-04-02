/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal
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
function preorderTraversalRecursive(
    root: TreeNode | null,
    sequences: number[],
) {
    if (!root) {
        return;
    }
    sequences.push(root.val);
    preorderTraversalRecursive(root.left, sequences);
    preorderTraversalRecursive(root.right, sequences);
}

function preorderTraversal(root: TreeNode | null): number[] {
    const sequences: number[] = [];
    preorderTraversalRecursive(root, sequences);
    return sequences;
}
// @lc code=end

export {};

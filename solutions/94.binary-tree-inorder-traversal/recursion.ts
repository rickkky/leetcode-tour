/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal
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
function inorderTraversalRecursive(root: TreeNode | null, result: number[]) {
    if (!root) {
        return;
    }
    inorderTraversalRecursive(root.left, result);
    result.push(root.val);
    inorderTraversalRecursive(root.right, result);
}

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    inorderTraversalRecursive(root, result);
    return result;
}
// @lc code=end

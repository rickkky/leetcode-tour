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
function preorderTraversalRecursive(root: TreeNode | null, seqences: number[]) {
    if (!root) {
        return;
    }
    seqences.push(root.val);
    preorderTraversalRecursive(root.left, seqences);
    preorderTraversalRecursive(root.right, seqences);
}

function preorderTraversal(root: TreeNode | null): number[] {
    const seqences: number[] = [];
    preorderTraversalRecursive(root, seqences);
    return seqences;
}
// @lc code=end

export default preorderTraversal;

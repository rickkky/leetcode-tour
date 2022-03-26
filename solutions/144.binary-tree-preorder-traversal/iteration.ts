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
function preorderTraversal(root: TreeNode | null): number[] {
    const sequences: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;
    while (current || stack.length > 0) {
        while (current) {
            sequences.push(current.val);
            stack.push(current);
            current = current.left;
        }
        current = stack.pop() as TreeNode;
        current = current.right;
    }
    return sequences;
}
// @lc code=end

export default preorderTraversal;

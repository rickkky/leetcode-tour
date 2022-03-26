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
function postorderTraversal(root: TreeNode | null): number[] {
    const stack: TreeNode[] = [];
    const sequences: number[] = [];
    // the last node pushed to the sequences
    let prev: TreeNode | null = null;
    let current: TreeNode | null = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop() as TreeNode;
        if (!current.right || current.right === prev) {
            sequences.push(current.val);
            prev = current;
            current = null;
        } else {
            stack.push(current);
            current = current.right;
        }
    }
    return sequences;
}
// @lc code=end

export default postorderTraversal;

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
function preorderTraversal(root: TreeNode | null): number[] {
    const ret: number[] = [];
    // Pushing to the stack: preorder.
    // Popping from the stack: inorder.
    const stack: TreeNode[] = [];
    let curr: TreeNode | null = root;
    while (curr || stack.length > 0) {
        while (curr) {
            ret.push(curr.val);
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop()!;
        curr = curr.right;
    }
    return ret;
}
// @lc code=end

export { preorderTraversal };

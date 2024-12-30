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
function inorderTraversal(root: TreeNode | null): number[] {
    const ret: number[] = [];
    // Pushing to the stack: preorder.
    // Popping from the stack: inorder.
    const stack: TreeNode[] = [];
    let curr: TreeNode | null = root;
    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop()!;
        ret.push(curr.val);
        curr = curr.right;
    }
    return ret;
}
// @lc code=end

export { inorderTraversal };

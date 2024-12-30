/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
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
    const ret: number[] = [];
    const stack: TreeNode[] = [];
    // The latest visited node in the postorder traversal.
    let prev: TreeNode | null = null;
    let curr: TreeNode | null = root;
    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.at(-1)!;
        // For a sub tree like:
        //      p
        //     / \
        //    l   r
        //  ...   ...
        // the relative visited order will be:
        // l's subtree, l, r's subtree, r, p, ...
        // So the parent is always visited next to its right child.
        if (!curr.right || curr.right === prev) {
            stack.pop();
            ret.push(curr.val);
            prev = curr;
            curr = null;
        } else {
            curr = curr.right;
        }
    }
    return ret;
}
// @lc code=end

export { postorderTraversal };

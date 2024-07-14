/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * https://leetcode.cn/problems/validate-binary-search-tree/
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
function isValidBST(root: TreeNode | null): boolean {
    let prev = -Infinity;
    let stack: TreeNode[] = [];
    let node = root;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop()!;
        if (node.val <= prev) {
            return false;
        }
        prev = node.val;
        node = node.right;
    }
    return true;
}
// @lc code=end

export { isValidBST };

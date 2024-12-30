/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * https://leetcode.cn/problems/path-sum/
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
function hasPathSum(root: TreeNode | null, target: number): boolean {
    if (!root) {
        return false;
    }
    // Store unhandled nodes.
    const nodeStack = [root];
    // Store patch numbers for the corresponding nodes in the node stack..
    const patchStack = [target];
    while (nodeStack.length > 0) {
        const node = nodeStack.pop()!;
        const patch = patchStack.pop()!;
        if (!node.left && !node.right && patch === node.val) {
            return true;
        }
        if (node.left) {
            nodeStack.push(node.left);
            patchStack.push(patch - node.val);
        }
        if (node.right) {
            nodeStack.push(node.right);
            patchStack.push(patch - node.val);
        }
    }
    return false;
}
// @lc code=end

export { hasPathSum };

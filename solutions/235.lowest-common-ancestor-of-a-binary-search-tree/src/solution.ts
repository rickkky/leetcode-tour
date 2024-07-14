/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
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
function lowestCommonAncestor(
    root: TreeNode,
    p: TreeNode,
    q: TreeNode,
): TreeNode | null {
    let ancestor = root;
    while (true) {
        if (p.val < ancestor.val && q.val < ancestor.val) {
            ancestor = ancestor.left!;
        } else if (p.val > ancestor.val && q.val > ancestor.val) {
            ancestor = ancestor.right!;
        } else {
            break;
        }
    }
    return ancestor;
}
// @lc code=end

export { lowestCommonAncestor };

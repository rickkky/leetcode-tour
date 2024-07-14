/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
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
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const root = new TreeNode(preorder[0]);
    // Store tree nodes whose right child is not handled yet.
    const stack: TreeNode[] = [root];
    let inorderIndex = 0;
    for (let i = 1; i < preorder.length; i++) {
        let node = stack.at(-1)!;
        if (node.val !== inorder[inorderIndex]) {
            node.left = new TreeNode(preorder[i]);
            stack.push(node.left);
        } else {
            while (
                stack.length &&
                stack.at(-1)!.val === inorder[inorderIndex]
            ) {
                node = stack.pop()!;
                inorderIndex += 1;
            }
            node.right = new TreeNode(preorder[i]);
            stack.push(node.right);
        }
    }
    return root;
}
// @lc code=end

export { buildTree };

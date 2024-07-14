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
function buildSubTree(
    preorder: number[],
    inorderMap: Map<number, number>,
    preorderLeftIndex: number,
    preorderRightIndex: number,
    inorderLeftIndex: number,
    inorderRightIndex: number,
) {
    if (preorderLeftIndex > preorderRightIndex) {
        return null;
    }
    const preorderRootIndex = preorderLeftIndex;
    const inorderRootIndex = inorderMap.get(preorder[preorderRootIndex])!;
    const root = new TreeNode(preorder[preorderRootIndex]);
    const leftSubTreeSize = inorderRootIndex - inorderLeftIndex;
    root.left = buildSubTree(
        preorder,
        inorderMap,
        preorderLeftIndex + 1,
        preorderLeftIndex + leftSubTreeSize,
        inorderLeftIndex,
        inorderRootIndex - 1,
    );
    root.right = buildSubTree(
        preorder,
        inorderMap,
        preorderLeftIndex + leftSubTreeSize + 1,
        preorderRightIndex,
        inorderRootIndex + 1,
        inorderRightIndex,
    );
    return root;
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inorderMap = new Map<number, number>();
    for (const [index, value] of inorder.entries()) {
        inorderMap.set(value, index);
    }
    return buildSubTree(
        preorder,
        inorderMap,
        0,
        preorder.length - 1,
        0,
        inorder.length - 1,
    );
}
// @lc code=end

export { buildTree };

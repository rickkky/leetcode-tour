/*
 * @lc app=leetcode.cn id=133 lang=typescript
 *
 * https://leetcode.cn/problems/clone-graph/
 */

/**
 * Definition for Node.
 */
class Node {
    val: number;
    neighbors: Node[];
    constructor(val?: number, neighbors?: Node[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

// @lc code=start
function clone(node: Node, visited: Map<Node, Node>): Node {
    if (visited.has(node)) {
        return visited.get(node)!;
    }
    const copy = new Node(node.val);
    visited.set(node, copy);
    for (const neighbor of node.neighbors) {
        copy.neighbors.push(clone(neighbor, visited));
    }
    return copy;
}

function cloneGraph(node: Node | null): Node | null {
    if (!node) {
        return null;
    }
    return clone(node, new Map());
}
// @lc code=end

export { cloneGraph };

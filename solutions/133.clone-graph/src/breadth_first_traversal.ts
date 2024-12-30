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
function cloneGraph(node: Node | null): Node | null {
    if (!node) {
        return null;
    }
    const visited = new Map<Node, Node>();
    const queue = [node];
    visited.set(node, new Node(node.val));
    while (queue.length) {
        const curr = queue.shift()!;
        const copy = visited.get(curr)!;
        for (const neighbor of curr.neighbors) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.set(neighbor, new Node(neighbor.val));
            }
            copy.neighbors.push(visited.get(neighbor)!);
        }
    }
    return visited.get(node)!;
}
// @lc code=end

export { cloneGraph };

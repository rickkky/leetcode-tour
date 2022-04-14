/*
 * @lc app=leetcode.cn id=430 lang=typescript
 *
 * https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list
 */

/**
 * Definition for node.
 */
class Node {
    val: number;
    prev: Node | null;
    next: Node | null;
    child: Node | null;
    constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
        this.val = val === undefined ? 0 : val;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
        this.child = child === undefined ? null : child;
    }
}

// @lc code=start
function flattenRecursive(prev: Node, curr: Node | null): Node {
    if (!curr) {
        return prev;
    }
    curr.prev = prev;
    prev.next = curr;
    const next = curr.next;
    const tail = flattenRecursive(curr, curr.child);
    curr.child = null;
    return flattenRecursive(tail, next);
}

function flatten(head: Node | null): Node | null {
    if (!head) {
        return null;
    }
    const dummy = new Node();
    flattenRecursive(dummy, head);
    head.prev = null;
    return head;
}
// @lc code=end

export {};

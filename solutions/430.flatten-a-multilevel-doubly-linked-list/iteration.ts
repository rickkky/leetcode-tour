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
function flatten(head: Node | null): Node | null {
    if (!head) {
        return null;
    }
    const stack = [head];
    const dummy = new Node();
    let prev = dummy;
    while (stack.length) {
        const curr = stack.pop() as Node;
        prev.next = curr;
        curr.prev = prev;
        prev = curr;
        if (curr.next) {
            stack.push(curr.next);
        }
        if (curr.child) {
            stack.push(curr.child);
            curr.child = null;
        }
    }
    // free dummy
    head.prev = null;
    return head;
}
// @lc code=end

export {};

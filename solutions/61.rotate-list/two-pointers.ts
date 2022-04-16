/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * https://leetcode-cn.com/problems/rotate-list
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// @lc code=start
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) {
        return null;
    }
    const dummy = new ListNode(0, head);
    // fulfilled: original tail
    let p1 = dummy;
    // fulfilled: new tail
    let p2 = dummy;
    for (let i = 0; i < k; ++i) {
        p1 = p1.next!;
        // If p1 points to the original tail after this for-loop,
        // p2 will point to dummy node finally.
        // The dummy node cannot be the new tail node,
        // so we need to skip this case.
        if (!p1.next) {
            p1 = dummy;
        }
    }
    while (p1.next) {
        p1 = p1.next;
        p2 = p2.next!;
    }
    const result = p2.next || head;
    p1.next = head;
    p2.next = null;
    return result;
}
// @lc code=end

export {};

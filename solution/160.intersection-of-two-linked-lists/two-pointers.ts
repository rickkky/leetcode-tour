/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists
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
function getIntersectionNode(
    l1: ListNode | null,
    l2: ListNode | null,
): ListNode | null {
    let p1: ListNode | null = l1;
    let p2: ListNode | null = l2;
    while (p1 !== p2) {
        p1 = p1 ? p1.next : l2;
        p2 = p2 ? p2.next : l1;
    }
    return p1;
}
// @lc code=end

export {};

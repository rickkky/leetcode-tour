/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists
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
function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null,
): ListNode | null {
    const dummy = new ListNode();
    let current = dummy;
    let p1 = l1;
    let p2 = l2;
    while (p1 && p2) {
        if (p1.val <= p2.val) {
            current.next = p1;
            p1 = p1.next;
        } else {
            current.next = p2;
            p2 = p2.next;
        }
        current = current.next;
    }
    if (p1) {
        current.next = p1;
    } else {
        current.next = p2;
    }
    return dummy.next;
}
// @lc code=end

export {};

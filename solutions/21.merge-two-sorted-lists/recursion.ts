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
function mergeTwoListsRecursive(
    p1: ListNode | null,
    p2: ListNode | null,
): ListNode | null {
    if (!p1) {
        return p2;
    } else if (!p2) {
        return p1;
    }
    if (p1.val <= p2.val) {
        p1.next = mergeTwoListsRecursive(p1.next, p2);
        return p1;
    } else {
        p2.next = mergeTwoListsRecursive(p1, p2.next);
        return p2;
    }
}

function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null,
): ListNode | null {
    return mergeTwoListsRecursive(l1, l2);
}
// @lc code=end

export {};

/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * https://leetcode.cn/problems/merge-k-sorted-lists/
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
    let p = dummy;
    let p1 = l1;
    let p2 = l2;
    while (p1 && p2) {
        if (p1.val <= p2.val) {
            p.next = p1;
            p1 = p1.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    if (p1) {
        p.next = p1;
    } else {
        p.next = p2;
    }
    return dummy.next;
}

function mergeKLists(lists: ListNode[]): ListNode | null {
    let result: ListNode | null = lists[0] || null;
    for (let i = 1; i < lists.length; i++) {
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
}
// @lc code=end

export { mergeKLists };

/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * https://leetcode.cn/problems/reverse-linked-list/
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
function reverseListRecursive(
    curr: ListNode | null,
    prev: ListNode | null,
): ListNode | null {
    if (!curr) {
        return prev;
    }
    const next = curr.next;
    curr.next = prev;
    return reverseListRecursive(next, curr);
}

function reverseList(head: ListNode | null): ListNode | null {
    return reverseListRecursive(head, null);
}
// @lc code=end

export { reverseList };

/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
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
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    // finally: left = target.prev
    let left = dummy;
    // finally: right = tail
    let right = dummy;
    for (let i = 0; i < n; ++i) {
        right = right.next!;
    }
    while (right.next) {
        right = right.next;
        left = left.next!;
    }
    left.next = left.next!.next;
    return dummy.next;
}
// @lc code=end

export { removeNthFromEnd };

/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * https://leetcode.cn/problems/reverse-linked-list-ii/
 */

// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// @lc code=start
function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number,
): ListNode | null {
    const dummy = new ListNode(0, head);
    let subPrev = dummy;
    for (let i = 0; i < left - 1; i++) {
        subPrev = subPrev.next!;
    }
    const subHead = subPrev.next!;
    let prev: ListNode | null = null;
    let curr: ListNode | null = subHead;
    for (let i = left; i <= right; i++) {
        const next: ListNode | null = curr!.next;
        curr!.next = prev;
        prev = curr;
        curr = next;
    }
    subPrev.next = prev;
    subHead.next = curr;
    return dummy.next;
}
// @lc code=end

export { reverseBetween };

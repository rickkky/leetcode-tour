/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
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
    // Finally points to the tail.
    let p1 = dummy;
    // Finally points to target.prev.
    let p2 = dummy;
    for (let i = 0; i < n; ++i) {
        p1 = p1.next!;
    }
    while (p1.next) {
        p1 = p1.next;
        p2 = p2.next!;
    }
    p2.next = p2.next!.next;
    return dummy.next;
}
// @lc code=end

export { removeNthFromEnd };

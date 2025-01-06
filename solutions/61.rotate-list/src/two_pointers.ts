/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * https://leetcode.cn/problems/rotate-list/
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
    // Finally points to the original tail.
    let p1 = dummy;
    // Finally points to the new tail.
    let p2 = dummy;
    // Firstly, p1 moves k steps.
    // The actual valid number of steps is k % n.
    for (let i = 0; i < k; ++i) {
        p1 = p1.next!;
        if (!p1.next) {
            p1 = dummy;
        }
    }
    // Then, p1 and p2 move n - (k % n) steps until p1 reaches the end.
    while (p1.next) {
        p1 = p1.next;
        p2 = p2.next!;
    }
    const ret = p2.next || head;
    p1.next = head;
    p2.next = null;
    return ret;
}
// @lc code=end

export { rotateRight };

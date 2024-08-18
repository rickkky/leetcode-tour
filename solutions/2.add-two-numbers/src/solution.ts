/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * https://leetcode.cn/problems/add-two-numbers/
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
function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null,
): ListNode | null {
    const dummy = new ListNode();
    let p = dummy;
    let p1 = l1;
    let p2 = l2;
    let carry = 0;
    while (p1 || p2 || carry) {
        const n1 = p1 ? p1.val : 0;
        p1 = p1 ? p1.next : null;
        const n2 = p2 ? p2.val : 0;
        p2 = p2 ? p2.next : null;
        const sum = n1 + n2 + carry;
        carry = Math.floor(sum / 10);
        p.next = new ListNode(sum % 10);
        p = p.next;
    }
    return dummy.next;
}
// @lc code=end

export { addTwoNumbers };

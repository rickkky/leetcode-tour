/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * https://leetcode-cn.com/problems/add-two-numbers
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
    let current = dummy;
    let p1 = l1;
    let p2 = l2;
    // carry - {0, 1}
    let carry = 0;
    while (p1 || p2 || carry) {
        const num1 = p1 ? p1.val : 0;
        const num2 = p2 ? p2.val : 0;
        const sum = num1 + num2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        p1 = p1 ? p1.next : null;
        p2 = p2 ? p2.next : null;
    }
    return dummy.next;
}
// @lc code=end

export {};

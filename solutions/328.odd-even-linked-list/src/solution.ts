/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * https://leetcode.cn/problems/odd-even-linked-list/
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
function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    const evenHead = head.next;
    let odd = head;
    let even = evenHead;
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}
// @lc code=end

export { oddEvenList };

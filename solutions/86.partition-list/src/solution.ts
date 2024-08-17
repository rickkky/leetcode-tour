/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * https://leetcode.cn/problems/partition-list/
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
function partition(head: ListNode | null, x: number): ListNode | null {
    const samllHead = new ListNode(0, null);
    let samll = samllHead;
    const largeHead = new ListNode(0, null);
    let large = largeHead;
    let curr = head;
    while (curr) {
        if (curr.val < x) {
            samll.next = curr;
            samll = samll.next;
        } else {
            large.next = curr;
            large = large.next;
        }
        curr = curr.next;
    }
    large.next = null;
    samll.next = largeHead.next;
    return samllHead.next;
}
// @lc code=end

export { partition };

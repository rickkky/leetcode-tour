/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
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
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    let prev = head;
    let curr = head.next;
    while (curr) {
        if (prev.val === curr.val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return head;
}
// @lc code=end

export { deleteDuplicates };

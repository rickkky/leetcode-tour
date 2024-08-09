/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/
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
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let curr: ListNode | null = head;
    while (curr) {
        let duplicated = false;
        while (curr.next && curr.val === curr.next.val) {
            curr = curr.next;
            duplicated = true;
        }
        if (duplicated) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = prev.next;
    }
    return dummy.next;
}
// @lc code=end

export { deleteDuplicates };

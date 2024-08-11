/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * https://leetcode.cn/problems/reorder-list/
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
function reorderList(head: ListNode | null): void {
    // Find the middle node.
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Reverse the second half.
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Merge the two halves.
    let first: ListNode | null = head;
    let second: ListNode | null = prev;
    while (second && second.next) {
        const firstNext = first!.next;
        const secondNext = second.next;
        first!.next = second;
        second.next = firstNext;
        first = firstNext;
        second = secondNext;
    }
}
// @lc code=end

export { reorderList };

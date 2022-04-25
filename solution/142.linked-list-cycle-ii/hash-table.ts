/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii
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
function detectCycle(head: ListNode | null): ListNode | null {
    const set = new Set<ListNode>();
    let current: ListNode | null = head;
    while (current) {
        if (set.has(current)) {
            return current;
        }
        set.add(current);
        current = current.next;
    }
    return null;
}
// @lc code=end

export {};

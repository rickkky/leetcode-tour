/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * https://leetcode-cn.com/problems/linked-list-cycle
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
function hasCycle(head: ListNode | null): boolean {
    const set = new Set<ListNode>();
    let current: ListNode | null = head;
    while (current) {
        if (set.has(current)) {
            return true;
        }
        set.add(current);
        current = current.next;
    }
    return false;
}
// @lc code=end

export {};

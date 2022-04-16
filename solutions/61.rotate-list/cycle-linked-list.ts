/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * https://leetcode-cn.com/problems/rotate-list
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
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) {
        return null;
    }
    let curr = head;
    let count = 1;
    // find tail node and count length
    while (curr.next) {
        curr = curr.next;
        count += 1;
    }
    // make list cycle
    curr.next = head;
    // reset current pointer
    curr = head;
    // the index of the new tail node from head
    const index = count - 1 - (k % count);
    // find the new tail node
    for (let i = 0; i < index; ++i) {
        curr = curr.next as ListNode;
    }
    // get the new head
    const result = curr.next;
    // break the cycle list
    curr.next = null;
    return result;
}
// @lc code=end

export {};

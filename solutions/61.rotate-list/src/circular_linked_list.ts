/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * https://leetcode.cn/problems/rotate-list/
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
    // Find the tail node and count the length of the list.
    while (curr.next) {
        curr = curr.next;
        count += 1;
    }
    // Make the list circular.
    curr.next = head;
    // Reset curr pointer to head.
    curr = head;
    // Compute the index of the new tail node.
    const index = count - 1 - (k % count);
    // Find the new tail node.
    for (let i = 0; i < index; ++i) {
        curr = curr.next as ListNode;
    }
    // Get the new head.
    const ret = curr.next;
    // Break the circular link.
    curr.next = null;
    return ret;
}
// @lc code=end

export { rotateRight };

/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/
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
function getIntersectionNode(
    l1: ListNode | null,
    l2: ListNode | null,
): ListNode | null {
    const set = new Set<ListNode>();
    let p1: ListNode | null = l1;
    let p2: ListNode | null = l2;
    while (p1 || p2) {
        if (p1) {
            if (set.has(p1)) {
                return p1;
            } else {
                set.add(p1);
                p1 = p1.next;
            }
        }
        if (p2) {
            if (set.has(p2)) {
                return p2;
            } else {
                set.add(p2);
                p2 = p2.next;
            }
        }
    }
    return null;
}
// @lc code=end

export { getIntersectionNode };

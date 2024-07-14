/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/
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
function reverse(head: ListNode, tail: ListNode): [ListNode, ListNode] {
    let prev = tail.next;
    let curr = head;
    while (prev !== tail) {
        const next = curr.next!;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return [tail, head];
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    while (head) {
        let tail: ListNode | null = prev;
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (!tail) {
                return dummy.next;
            }
        }
        [head, tail] = reverse(head, tail);
        prev.next = head;
        prev = tail;
        head = tail.next;
    }
    return dummy.next;
}
// @lc code=end

export { reverseKGroup };

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

function findFirstEncounter(head: ListNode | null) {
    if (!head) {
        return null;
    }
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next as ListNode;
        fast = fast.next.next;
        if (slow === fast) {
            return slow;
        }
    }
    return null;
}

function findCycleEntry(head: ListNode | null) {
    const encounter = findFirstEncounter(head);
    if (!encounter) {
        return null;
    }
    let p1 = head as ListNode;
    let p2: ListNode | null = encounter;
    while (p2) {
        if (p1 === p2) {
            return p1;
        }
        p1 = p1.next as ListNode;
        p2 = p2.next;
    }
    return null;
}

function detectCycle(head: ListNode | null): ListNode | null {
    return findCycleEntry(head);
}

// @lc code=end

export {};

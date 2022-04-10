/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list
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
function reverseList(head: ListNode | null) {
    let curr = head;
    let prev: ListNode | null = null;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return true;
    }
    // fulfilled: first node of right part (list length is even)
    //           or middle node of the list (odd)
    let slow: ListNode = head;
    // fulfilled: null (list length is even) or tail (odd)
    let fast: ListNode | null = head;
    // find the right part of the linked list
    while (fast && fast.next) {
        slow = slow.next as ListNode;
        fast = fast.next.next;
    }
    // reverse right part of the list and get the original tail
    const tail = reverseList(slow);
    let p1: ListNode | null = head;
    let p2 = tail;
    let answer = true;
    while (p1 && p2) {
        if (p1.val !== p2.val) {
            answer = false;
            break;
        }

        p1 = p1.next;
        p2 = p2.next;
    }
    // restore the list
    reverseList(tail);
    return answer;
}
// @lc code=end

export {};

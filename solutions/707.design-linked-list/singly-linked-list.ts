/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * https://leetcode-cn.com/problems/design-linked-list
 */

// @lc code=start
interface ListNode {
    val: number;
    next: ListNode | null;
}

class MyLinkedList {
    private head: ListNode | null = null;

    // If the index is invalid, return -1.
    get(index: number): number {
        if (index < 0 || !this.head) {
            return -1;
        }
        let current = this.head;
        for (let i = 0; i < index; ++i) {
            if (!current.next) {
                return -1;
            }
            current = current.next;
        }
        return current.val;
    }

    addAtHead(val: number): void {
        this.head = { val, next: this.head };
    }

    addAtTail(val: number): void {
        if (!this.head) {
            return this.addAtHead(val);
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = { val, next: null };
    }

    addAtIndex(index: number, val: number): void {
        if (index === 0) {
            return this.addAtHead(val);
        } else if (index < 0 || !this.head) {
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; ++i) {
            if (!current.next) {
                return;
            }
            current = current.next;
        }
        current.next = { val, next: current.next };
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || !this.head) {
            return;
        } else if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; ++i) {
            if (!current.next) {
                return;
            }
            current = current.next;
        }
        if (!current.next) {
            return;
        }
        current.next = current.next.next;
    }
}
// @lc code=end

export default MyLinkedList;

/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * https://leetcode-cn.com/problems/design-linked-list
 */

// @lc code=start
interface ListNode {
    val: number;
    prev: ListNode | null;
    next: ListNode | null;
}

class MyLinkedList {
    private head: ListNode | null = null;
    private tail: ListNode | null = null;
    private length = 0;

    private getNode(index: number) {
        if (index < 0 || index > this.length - 1) {
            return null;
        }
        // determine traverse ascending or descending
        return index < this.length / 2
            ? this.getNodeAsc(index)
            : this.getNodeDesc(index);
    }

    // The index is valid
    private getNodeAsc(index: number) {
        let current = this.head as ListNode;
        for (let i = 0; i < index; ++i) {
            if (!current.next) {
                return null;
            }
            current = current.next;
        }
        return current;
    }

    // The index is valid
    private getNodeDesc(index: number) {
        let current = this.tail as ListNode;
        for (let i = 0; i < this.length - 1 - index; ++i) {
            if (!current.prev) {
                return null;
            }
            current = current.prev;
        }
        return current;
    }

    // If the index is invalid, return -1.
    get(index: number): number {
        const node = this.getNode(index);
        return node ? node.val : -1;
    }

    addAtHead(val: number): void {
        const oldHead = this.head;
        this.head = { val, prev: null, next: oldHead };
        if (oldHead) {
            oldHead.prev = this.head;
        } else {
            this.tail = this.head;
        }
        this.length += 1;
    }

    addAtTail(val: number): void {
        const oldTail = this.tail;
        this.tail = { val, prev: oldTail, next: null };
        if (oldTail) {
            oldTail.next = this.tail;
        } else {
            this.head = this.tail;
        }
        this.length += 1;
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.length) {
            return;
        } else if (index === 0) {
            return this.addAtHead(val);
        } else if (index === this.length) {
            return this.addAtTail(val);
        }
        const nextNode = this.getNode(index) as ListNode;
        const prevNode = nextNode.prev as ListNode;
        const node = { val, prev: prevNode, next: nextNode };
        nextNode.prev = node;
        prevNode.next = node;
        this.length += 1;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index > this.length - 1) {
            return;
        } else if (index === 0) {
            // delete head
            const target = this.head as ListNode;
            this.head = target.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.length - 1) {
            // delete tail
            const target = this.tail as ListNode;
            this.tail = target.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }
        } else {
            const target = this.getNode(index) as ListNode;
            const prevNode = target.prev as ListNode;
            const nextNode = target.next as ListNode;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        this.length -= 1;
    }
}
// @lc code=end

export default MyLinkedList;

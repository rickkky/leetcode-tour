/*
 * @lc app=leetcode.cn id=622 lang=typescript
 *
 * https://leetcode-cn.com/problems/design-circular-queue
 */

// @lc code=start

class MyCircularQueue {
    private capacity: number;
    private list: number[] = [];
    private front: number = 0;
    private rear: number = 0;

    // Initialize your data structure here.
    constructor(k: number) {
        this.capacity = k + 1;
        this.list.length = this.capacity;
    }

    // Insert an element into the circular queue.
    // Return true if the operation is successful.
    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        this.list[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        return true;
    }

    // Delete an element from the circular queue.
    // Return true if the operation is successful.
    deQueue(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        this.front = (this.front + 1) % this.capacity;
        return true;
    }

    // Get the front item from the queue.
    // If the queue is empty, return -1.
    Front(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.list[this.front];
    }

    // Get the last item from the queue.
    // If the queue is empty, return -1.
    Rear(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.list[(this.rear - 1 + this.capacity) % this.capacity];
    }

    // Checks whether the circular queue is empty or not.
    isEmpty(): boolean {
        return this.front === this.rear;
    }

    // Checks whether the circular queue is full or not.
    isFull(): boolean {
        return (this.rear + 1) % this.capacity === this.front;
    }
}
// @lc code=end

export {};

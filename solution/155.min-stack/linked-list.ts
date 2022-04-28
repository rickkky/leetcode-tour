/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * https://leetcode-cn.com/problems/min-stack
 */

// @lc code=start
class StackNode {
    value: number;
    min: number;
    next: StackNode | undefined;
    constructor(value: number, min: number, next?: StackNode) {
        this.value = value;
        this.min = min;
        this.next = next;
    }
}

class MinStack {
    private head: StackNode | undefined;

    push(x: number): void {
        if (!this.head) {
            this.head = new StackNode(x, x);
        } else {
            this.head = new StackNode(x, Math.min(x, this.head.min), this.head);
        }
    }

    // stack is not empty
    pop(): void {
        this.head = this.head!.next;
    }

    // stack is not empty
    top(): number {
        return this.head!.value;
    }

    // stack is not empty
    getMin(): number {
        return this.head!.min;
    }
}
// @lc code=end

export {};

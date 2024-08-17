/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * https://leetcode-cn.com/problems/min-stack/
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
        this.head = new StackNode(
            x,
            Math.min(this.head ? this.head.min : x, x),
            this.head,
        );
    }

    pop(): void {
        this.head = this.head!.next;
    }

    top(): number {
        return this.head!.value;
    }

    getMin(): number {
        return this.head!.min;
    }
}
// @lc code=end

export { MinStack };

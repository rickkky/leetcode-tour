/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * https://leetcode-cn.com/problems/min-stack
 */

// @lc code=start
class MinStack {
    private stack: number[] = [];
    private auxStack: number[] = [];

    push(x: number): void {
        this.stack.push(x);

        if (this.auxStack.length === 0) {
            this.auxStack.push(x);
        } else {
            this.auxStack.push(
                Math.min(x, this.auxStack[this.auxStack.length - 1]),
            );
        }
    }

    // stack is not empty
    pop(): void {
        this.stack.pop();
        this.auxStack.pop();
    }

    // stack is not empty
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    // stack is not empty
    getMin(): number {
        return this.auxStack[this.auxStack.length - 1];
    }
}
// @lc code=end

export {};

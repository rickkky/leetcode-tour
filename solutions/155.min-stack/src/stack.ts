/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * https://leetcode.cn/problems/min-stack/
 */

// @lc code=start
class MinStack {
    private data: number[] = [];

    private minData: number[] = [];

    push(x: number): void {
        this.data.push(x);
        this.minData.push(
            Math.min(this.minData.length > 0 ? this.getMin() : x, x),
        );
    }

    pop(): void {
        this.data.pop();
        this.minData.pop();
    }

    top(): number {
        return this.data[this.data.length - 1];
    }

    getMin(): number {
        return this.minData[this.minData.length - 1];
    }
}
// @lc code=end

export { MinStack };

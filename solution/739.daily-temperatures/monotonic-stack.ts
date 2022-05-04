/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * https://leetcode-cn.com/problems/daily-temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = [];
    const stack: number[] = [];
    for (const [i, t] of temperatures.entries()) {
        while (stack.length > 0) {
            const i0 = stack[stack.length - 1];
            const t0 = temperatures[i0];
            if (t <= t0) {
                break;
            }
            stack.pop();
            result[i0] = i - i0;
        }
        stack.push(i);
    }
    while (stack.length > 0) {
        result[stack.pop()!] = 0;
    }
    return result;
}
// @lc code=end

export {};

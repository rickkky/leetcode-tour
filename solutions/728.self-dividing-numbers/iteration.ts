/*
 * @lc app=leetcode.cn id=728 lang=typescript
 *
 * https://leetcode-cn.com/problems/self-dividing-numbers
 */

// @lc code=start
function isSelfDividing(num: number): boolean {
    let quotient = num;
    while (quotient > 0) {
        const digit = quotient % 10;
        if (digit === 0 || num % digit !== 0) {
            return false;
        }
        quotient = Math.floor(quotient / 10);
    }
    return true;
}

function selfDividingNumbers(left: number, right: number): number[] {
    const result: number[] = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }
    return result;
}
// @lc code=end

export default selfDividingNumbers;

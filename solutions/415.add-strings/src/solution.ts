/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * https://leetcode.cn/problems/add-strings/
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
    let nums = [];
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        const n1 = i >= 0 ? parseInt(num1[i]) : 0;
        const n2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = n1 + n2 + carry;
        carry = sum >= 10 ? 1 : 0;
        nums.push(sum % 10);
        i--;
        j--;
    }
    if (carry) {
        nums.push(carry);
    }
    return nums.reverse().join('');
}
// @lc code=end

export { addStrings };

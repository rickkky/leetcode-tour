/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * https://leetcode.cn/problems/integer-to-roman/
 */

// @lc code=start
const pairs = [
    { val: 1000, sym: 'M' },
    { val: 900, sym: 'CM' },
    { val: 500, sym: 'D' },
    { val: 400, sym: 'CD' },
    { val: 100, sym: 'C' },
    { val: 90, sym: 'XC' },
    { val: 50, sym: 'L' },
    { val: 40, sym: 'XL' },
    { val: 10, sym: 'X' },
    { val: 9, sym: 'IX' },
    { val: 5, sym: 'V' },
    { val: 4, sym: 'IV' },
    { val: 1, sym: 'I' },
];

function intToRoman(num: number): string {
    const roman = [];
    for (const pair of pairs) {
        while (num >= pair.val) {
            num -= pair.val;
            roman.push(pair.sym);
        }
        if (num === 0) {
            break;
        }
    }
    return roman.join('');
}
// @lc code=end

export { intToRoman };

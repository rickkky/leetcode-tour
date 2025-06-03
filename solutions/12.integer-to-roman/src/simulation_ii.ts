/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * https://leetcode.cn/problems/integer-to-roman/
 */

// @lc code=start
const thousands = ['', 'M', 'MM', 'MMM'];
const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function intToRoman(num: number): string {
    return (
        thousands[Math.floor(num / 1000)] +
        hundreds[Math.floor((num % 1000) / 100)] +
        tens[Math.floor((num % 100) / 10)] +
        ones[num % 10]
    );
}
// @lc code=end

export { intToRoman };

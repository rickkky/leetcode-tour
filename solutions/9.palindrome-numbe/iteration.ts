/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * https://leetcode-cn.com/problems/palindrome-numbe
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    let reversed = 0;
    let quotient = x;
    while (quotient > 0) {
        reversed = reversed * 10 + (quotient % 10);
        quotient = Math.floor(quotient / 10);
    }
    return reversed === x;
}
// @lc code=end

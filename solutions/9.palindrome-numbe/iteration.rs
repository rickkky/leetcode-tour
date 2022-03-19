/*
 * @lc app=leetcode.cn id=9 lang=rust
 *
 * https://leetcode-cn.com/problems/palindrome-numbe
 */

// @lc code=start
impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 {
            return false;
        }
        let mut reversed = 0;
        let mut quotient = x;
        while quotient > 0 {
            reversed = reversed * 10 + quotient % 10;
            quotient /= 10;
        }
        reversed == x
    }
}
// @lc code=end

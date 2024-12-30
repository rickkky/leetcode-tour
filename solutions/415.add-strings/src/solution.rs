/*
 * @lc app=leetcode.cn id=415 lang=rust
 *
 * https://leetcode.cn/problems/add-strings/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn add_strings(num1: String, num2: String) -> String {
        let num_1: Vec<char> = num1.chars().collect();
        let num_2: Vec<char> = num2.chars().collect();
        let mut nums = vec![];
        let mut carry = 0;
        let mut i = num1.len() as i32 - 1;
        let mut j = num2.len() as i32 - 1;
        while i >= 0 || j >= 0 {
            let n_1 = if i >= 0 {
                num_1[i as usize].to_digit(10).unwrap_or(0)
            } else {
                0
            };
            let n_2 = if j >= 0 {
                num_2[j as usize].to_digit(10).unwrap_or(0)
            } else {
                0
            };
            let sum = n_1 + n_2 + carry;
            carry = sum / 10;
            nums.push(std::char::from_digit(sum % 10, 10).unwrap());
            i -= 1;
            j -= 1;
        }
        if carry > 0 {
            nums.push(std::char::from_digit(carry, 10).unwrap());
        }
        nums.reverse();
        return nums.into_iter().collect();
    }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=402 lang=rust
 *
 * https://leetcode.cn/problems/remove-k-digits/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn remove_kdigits(s: String, mut k: i32) -> String {
        let mut stack = vec![];
        for c in s.chars() {
            while k > 0 && !stack.is_empty() && stack.last().unwrap() > &c {
                stack.pop();
                k -= 1;
            }
            stack.push(c);
        }
        while k > 0 {
            stack.pop();
            k -= 1;
        }
        let mut res = stack
            .into_iter()
            .collect::<String>()
            .trim_start_matches('0')
            .to_string();
        if res.is_empty() {
            res = "0".to_string();
        }
        res
    }
}
// @lc code=end

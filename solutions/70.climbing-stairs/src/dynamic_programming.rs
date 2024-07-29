/*
 * @lc app=leetcode.cn id=70 lang=rust
 *
 * https://leetcode.cn/problems/climbing-stairs/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        let mut prev = 0;
        let mut prev_count = 1;
        let mut curr = 1;
        let mut curr_count = 1;
        for _ in 2..=n {
            let next = prev + curr;
            let next_count = prev_count + curr_count;
            prev = curr;
            prev_count = curr_count;
            curr = next;
            curr_count = next_count;
        }
        curr_count
    }
}
// @lc code=end

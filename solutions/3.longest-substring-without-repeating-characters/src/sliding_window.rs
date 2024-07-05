/*
 * @lc app=leetcode.cn id=3 lang=rust
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 */

pub struct Solution;

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut map = HashMap::new();
        let mut start = 0;
        let mut max_len = 0;
        for (i, c) in s.chars().enumerate() {
            if let Some(&prev) = map.get(&c) {
                start = start.max(prev + 1);
            }
            max_len = max_len.max(i - start + 1);
            map.insert(c, i);
        }
        max_len as i32
    }
}
// @lc code=end

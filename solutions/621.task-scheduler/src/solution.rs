/*
 * @lc app=leetcode.cn id=621 lang=rust
 *
 * https://leetcode.cn/problems/task-scheduler/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn least_interval(tasks: Vec<char>, n: i32) -> i32 {
        let mut freq = vec![0; 26];
        for &task in &tasks {
            freq[(task as u8 - b'A') as usize] += 1;
        }
        let mut max_freq = 0;
        let mut max_freq_count = 0;
        for f in freq {
            if f > max_freq {
                max_freq = f;
                max_freq_count = 1;
            } else if f == max_freq {
                max_freq_count += 1;
            }
        }
        i32::max(
            tasks.len() as i32,
            (max_freq - 1) * (n + 1) + max_freq_count,
        )
    }
}
// @lc code=end

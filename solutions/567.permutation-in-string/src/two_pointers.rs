/*
 * @lc app=leetcode.cn id=567 lang=rust
 *
 * https://leetcode.cn/problems/permutation-in-string/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn check_inclusion(s_1: String, s_2: String) -> bool {
        let s_1: Vec<char> = s_1.chars().collect();
        let s_2: Vec<char> = s_2.chars().collect();
        let n_1 = s_1.len();
        let n_2 = s_2.len();
        if n_1 > n_2 {
            return false;
        }
        let mut counts = [0; 26];
        for i in 0..n_1 {
            counts[s_1[i] as usize - 'a' as usize] += 1;
        }
        let mut left = 0;
        for right in 0..n_2 {
            let r = s_2[right] as usize - 'a' as usize;
            counts[r] -= 1;
            while counts[r] < 0 {
                let l = s_2[left] as usize - 'a' as usize;
                counts[l] += 1;
                left += 1;
            }
            if right - left + 1 == n_1 {
                return true;
            }
        }
        false
    }
}
// @lc code=end

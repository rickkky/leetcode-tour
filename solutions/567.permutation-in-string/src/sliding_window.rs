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
            counts[s_2[i] as usize - 'a' as usize] -= 1;
        }
        let mut diff = counts.iter().filter(|&&x| x != 0).count();
        if diff == 0 {
            return true;
        }
        for i in n_1..n_2 {
            let l = s_2[i - n_1] as usize - 'a' as usize;
            let r = s_2[i] as usize - 'a' as usize;
            if l == r {
                continue;
            }
            if counts[l] == 0 {
                diff += 1;
            }
            counts[l] += 1;
            if counts[l] == 0 {
                diff -= 1;
            }
            if counts[r] == 0 {
                diff += 1;
            }
            counts[r] -= 1;
            if counts[r] == 0 {
                diff -= 1;
            }
            if diff == 0 {
                return true;
            }
        }
        false
    }
}
// @lc code=end

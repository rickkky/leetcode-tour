/*
 * @lc app=leetcode.cn id=15 lang=rust
 *
 * https://leetcode.cn/problems/3sum/
 */
pub struct Solution;

// @lc code=start
impl Solution {
    pub fn three_sum(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort_unstable();
        let mut ret = Vec::new();
        for i in 0..nums.len() - 2 {
            if i > 0 && nums[i] == nums[i - 1] {
                continue;
            }
            let mut j = i + 1;
            let mut k = nums.len() - 1;
            while j < k {
                let sum = nums[i] + nums[j] + nums[k];
                if sum == 0 {
                    ret.push(vec![nums[i], nums[j], nums[k]]);
                    while j < k && nums[j] == nums[j + 1] {
                        j += 1;
                    }
                    j += 1;
                    while j < k && nums[k] == nums[k - 1] {
                        k -= 1;
                    }
                    k -= 1;
                } else if sum < 0 {
                    while j < k && nums[j] == nums[j + 1] {
                        j += 1;
                    }
                    j += 1;
                } else {
                    while j < k && nums[k] == nums[k - 1] {
                        k -= 1;
                    }
                    k -= 1;
                }
            }
        }
        ret
    }
}
// @lc code=end

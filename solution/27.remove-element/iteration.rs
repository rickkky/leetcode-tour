/*
 * @lc app=leetcode.cn id=27 lang=rust
 *
 * https://leetcode-cn.com/problems/remove-element
 */

// @lc code=start
impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut i = 0;
        for j in 0..nums.len() {
            if nums[j] != val {
                nums[i] = nums[j];
                i += 1;
            }
        }
        i as i32
    }
}
// @lc code=end

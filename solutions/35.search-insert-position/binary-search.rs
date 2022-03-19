/*
 * @lc app=leetcode.cn id=35 lang=rust
 *
 * https://leetcode-cn.com/problems/search-insert-position
 */

// @lc code=start
impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let mut left = 0;
        let mut right = nums.len() as i32 - 1;
        while left <= right {
            let middle = (right - left) / 2 + left;
            let value = nums[middle as usize];
            if value == target {
                return middle;
            } else if value > target {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        left
    }
}
// @lc code=end

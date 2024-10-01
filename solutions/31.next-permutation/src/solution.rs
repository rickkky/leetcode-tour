/*
 * @lc app=leetcode.cn id=31 lang=rust
 *
 * https://leetcode.cn/problems/next-permutation/
 */

 pub struct Solution;

// @lc code=start
impl Solution {
    pub fn next_permutation(nums: &mut Vec<i32>) {
        let mut i = nums.len() - 1;
        // For a decreasing subsequence, there is no next permutation.
        // So we need to find the first element
        // where there are larger elements on the right.
        while i > 0 && nums[i - 1] >= nums[i] {
            i -= 1;
        }
        if i > 0 {
            let mut j = nums.len() - 1;
            // Find the first larger element.
            while j > i - 1 && nums[j] <= nums[i - 1] {
                j -= 1;
            }
            nums.swap(i - 1, j);
        }
        // Reverse the right subsequence to make it increasing
        // so that the subsequence dictionary order is the smallest.
        nums[i..].reverse();
    }
}
// @lc code=end

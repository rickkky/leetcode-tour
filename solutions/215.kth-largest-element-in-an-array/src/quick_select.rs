/*
 * @lc app=leetcode.cn id=215 lang=rust
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn median_three(nums: &[i32], left: usize, right: usize) -> usize {
        let mid = left + (right - left) / 2;
        let l = nums[left];
        let m = nums[mid];
        let r = nums[right];
        if (l <= m && m <= r) || (r <= m && m <= l) {
            mid
        } else if (m <= l && l <= r) || (r <= l && l <= m) {
            left
        } else {
            right
        }
    }

    pub fn partition(nums: &mut [i32], left: usize, right: usize) -> usize {
        nums.swap(Solution::median_three(nums, left, right), left);
        let base = nums[left];
        let mut i = left;
        let mut j = right;
        while i < j {
            while i < j && nums[j] >= base {
                j -= 1;
            }
            while i < j && nums[i] <= base {
                i += 1;
            }
            nums.swap(i, j);
        }
        nums.swap(i, left);
        i
    }

    // Find the kth (0-indexed) smallest element in the array.
    pub fn quick_select(mut nums: Vec<i32>, k: usize) -> i32 {
        let mut left = 0;
        let mut right = nums.len() - 1;
        while left < right {
            let pivot = Solution::partition(&mut nums, left, right);
            if pivot == k {
                return nums[k];
            } else if pivot < k {
                left = pivot + 1;
            } else {
                right = pivot - 1;
            }
        }
        nums[k]
    }

    pub fn find_kth_largest(nums: Vec<i32>, k: i32) -> i32 {
        // Convert 1-indexed kth largest to 0-indexed kth smallest.
        let k = nums.len() - k as usize;
        return Solution::quick_select(nums, k) as i32;
    }
}
// @lc code=end

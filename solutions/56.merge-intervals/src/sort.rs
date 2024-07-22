/*
 * @lc app=leetcode.cn id=56 lang=rust
 *
 * https://leetcode.cn/problems/merge-intervals/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    fn is_intersected(a: &Vec<i32>, b: &Vec<i32>) -> bool {
        (a[0] <= b[0] && a[1] >= b[0]) || (b[0] <= a[0] && b[1] >= a[0])
    }

    fn merge_two(a: &Vec<i32>, b: &Vec<i32>) -> Vec<i32> {
        vec![i32::min(a[0], b[0]), i32::max(a[1], b[1])]
    }

    pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut intervals = intervals;
        intervals.sort_unstable_by(|a, b| a[0].cmp(&b[0]));
        let mut result = Vec::new();
        let mut curr = intervals[0].clone();
        for interval in intervals.iter().skip(1) {
            if Self::is_intersected(&curr, interval) {
                curr = Self::merge_two(&curr, interval);
            } else {
                result.push(curr);
                curr = interval.clone();
            }
        }
        result.push(curr);
        result
    }
}

// @lc code=end

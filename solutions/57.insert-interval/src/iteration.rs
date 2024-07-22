/*
 * @lc app=leetcode.cn id=57 lang=rust
 *
 * https://leetcode.cn/problems/insert-interval/
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

    pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        let mut new_interval = new_interval;
        let mut inserted = false;
        for interval in intervals {
            if inserted {
                result.push(interval);
            } else if Self::is_intersected(&interval, &new_interval) {
                new_interval = Self::merge_two(&interval, &new_interval);
            } else if interval[0] < new_interval[0] {
                result.push(interval);
            } else {
                result.push(new_interval.clone());
                result.push(interval);
                inserted = true;
            }
        }
        if !inserted {
            result.push(new_interval);
        }
        result
    }
}
// @lc code=end

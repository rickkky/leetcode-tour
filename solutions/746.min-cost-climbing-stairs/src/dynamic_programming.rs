/*
 * @lc app=leetcode.cn id=746 lang=rust
 *
 * https://leetcode.cn/problems/min-cost-climbing-stairs/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        let mut i_cost = cost[0];
        let mut j_cost = cost[1];
        for k in 2..cost.len() {
            let k_cost = cost[k] + i32::min(i_cost, j_cost);
            i_cost = j_cost;
            j_cost = k_cost;
        }
        i32::min(i_cost, j_cost)
    }
}
// @lc code=end

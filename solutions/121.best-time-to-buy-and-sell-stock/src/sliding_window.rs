/*
 * @lc app=leetcode.cn id=121 lang=rust
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut min_price = i32::MAX;
        let mut max_profit = 0;
        for price in prices {
            if price <= min_price {
                min_price = price;
            } else {
                max_profit = max_profit.max(price - min_price);
            }
        }
        max_profit
    }
}
// @lc code=end

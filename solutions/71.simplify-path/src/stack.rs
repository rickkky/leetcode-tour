/*
 * @lc app=leetcode.cn id=71 lang=rust
 *
 * https://leetcode.cn/problems/simplify-path/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn simplify_path(path: String) -> String {
        let mut stack = vec![];
        for p in path.split("/") {
            match p {
                "" | "." => {}
                ".." => {
                    stack.pop();
                }
                _ => {
                    stack.push(p);
                }
            }
        }
        "/".to_string() + &stack.join("/")
    }
}
// @lc code=end

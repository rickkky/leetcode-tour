/*
 * @lc app=leetcode.cn id=22 lang=rust
 *
 * https://leetcode.cn/problems/generate-parentheses/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    fn backtrack(
        n: i32,
        left_count: i32,
        right_count: i32,
        seq: &mut Vec<char>,
        ret: &mut Vec<String>,
    ) {
        if left_count == n && right_count == n {
            ret.push(seq.iter().collect());
            return;
        }
        if left_count < n {
            seq.push('(');
            Self::backtrack(n, left_count + 1, right_count, seq, ret);
            seq.pop();
        }
        if right_count < left_count {
            seq.push(')');
            Self::backtrack(n, left_count, right_count + 1, seq, ret);
            seq.pop();
        }
    }

    pub fn generate_parenthesis(n: i32) -> Vec<String> {
        let mut ret = vec![];
        Self::backtrack(n, 0, 0, &mut vec![], &mut ret);
        ret
    }
}
// @lc code=end

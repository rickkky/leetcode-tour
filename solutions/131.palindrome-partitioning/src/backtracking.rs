/*
 * @lc app=leetcode.cn id=131 lang=rust
 *
 * https://leetcode.cn/problems/palindrome-partitioning/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    fn is_palindrome(s: &Vec<char>, i: usize, j: usize, memory: &mut Vec<Vec<i32>>) -> bool {
        if memory[i][j] != 0 {
            return memory[i][j] > 0;
        }
        if i >= j {
            memory[i][j] = 1;
            return true;
        }
        if s[i] != s[j] {
            memory[i][j] = -1;
            return false;
        }
        Self::is_palindrome(s, i + 1, j - 1, memory)
    }

    fn depth_first_travel(
        s: &mut Vec<char>,
        i: usize,
        memory: &mut Vec<Vec<i32>>,
        state: &mut Vec<String>,
        result: &mut Vec<Vec<String>>,
    ) {
        if i == s.len() {
            result.push(state.clone());
            return;
        }
        for j in i..s.len() {
            if Self::is_palindrome(s, i, j, memory) {
                state.push(s[i..=j].iter().collect::<String>());
                Self::depth_first_travel(s, j + 1, memory, state, result);
                state.pop();
            }
        }
    }

    pub fn partition(s: String) -> Vec<Vec<String>> {
        let mut s: Vec<char> = s.chars().collect();
        let mut memory = vec![vec![0; s.len()]; s.len()];
        let mut state: Vec<String> = vec![];
        let mut result = vec![];
        Self::depth_first_travel(&mut s, 0, &mut memory, &mut state, &mut result);
        result
    }
}
// @lc code=end

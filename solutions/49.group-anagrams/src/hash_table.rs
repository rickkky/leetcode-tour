/*
 * @lc app=leetcode.cn id=49 lang=rust
 *
 * https://leetcode.cn/problems/group-anagrams/
 */

pub struct Solution;

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut map: HashMap<[i32; 26], Vec<String>> = HashMap::new();
        for s in strs {
            let mut count = [0; 26];
            for c in s.chars() {
                count[(c as u8 - b'a') as usize] += 1;
            }
            map.entry(count).or_insert(vec![]).push(s);
        }
        map.into_iter().map(|(_, v)| v).collect()
    }
}
// @lc code=end

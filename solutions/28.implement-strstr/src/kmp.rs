/*
 * @lc app=leetcode.cn id=28 lang=rust
 *
 * https://leetcode.cn/problems/implement-strstr/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        let m = haystack.len();
        let n = needle.len();
        if m < n {
            return -1;
        }
        let haystack: Vec<char> = haystack.chars().collect();
        let needle: Vec<char> = needle.chars().collect();
        // The pi table (partial match table) stores the longest length
        // of the same prefix and suffix of needle[0..=i].
        let mut pi = vec![0; n];
        let mut k = 0;
        // Compute the pi table.
        for i in 1..n {
            // If the k-th char doesn't match,
            // find a previous case that [0..=k - 1] matches [i - k..=i - 1].
            while k > 0 && needle[k] != needle[i] {
                k = pi[k - 1];
            }
            if needle[k] == needle[i] {
                k += 1;
            }
            pi[i] = k;
        }
        let mut k = 0;
        // Search for the needle in the haystack.
        for i in 0..m {
            while k > 0 && needle[k] != haystack[i] {
                k = pi[k - 1];
            }
            if needle[k] == haystack[i] {
                k += 1;
            }
            if k == n {
                return i as i32 - n as i32 + 1;
            }
        }
        -1
    }
}
// @lc code=end

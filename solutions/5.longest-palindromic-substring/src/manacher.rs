/*
 * @lc app=leetcode.cn id=5 lang=rust
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        // Manacher's Algorithm.
        // Insert '#' between characters for easier handling of
        // both odd and even length palindromes.
        // The beginning '$' and ending '!' are sentinels for easier
        // boundary checking.
        // i.e. "abba" -> "$#a#b#b#a#!"
        let mut chars = vec!['$', '#'];
        for c in s.chars() {
            chars.push(c);
            chars.push('#');
        }
        chars.push('!');

        // The rads[i] is the radius of the longest palindrome centered at i.
        let mut rads = vec![0; chars.len()];
        // Record the center and right boundary of the current rightest palindrome.
        let mut center = 1;
        let mut right = 1;
        // Record the start and end index of the longest palindrome.
        let mut start = 0;
        let mut end = 0;

        for i in 1..chars.len() - 1 {
            // If i is within the right boundary, init rads[i] with the mirror value.
            // We can't ensure the palindromic beyond the current rightest palindrome,
            // so here we take a minimum value.
            if i < right {
                rads[i] = usize::min(rads[2 * center - i], right - i);
            }

            // Expand the palindrome centered at i.
            while chars[i + rads[i] + 1] == chars[i - rads[i] - 1] {
                rads[i] += 1;
            }

            // Update the center and right boundary for the rightest palindrome.
            if i + rads[i] > right {
                center = i;
                right = i + rads[i];
            }

            // Update the start and end index of the longest palindrome.
            if rads[i] * 2 + 1 > end - start + 1 {
                start = i - rads[i];
                end = i + rads[i];
            }
        }

        let mut result = String::new();
        for i in start..=end {
            if chars[i] != '#' {
                result.push(chars[i]);
            }
        }
        result
    }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=647 lang=rust
 *
 * https://leetcode.cn/problems/palindromic-substrings/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn count_substrings(s: String) -> i32 {
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
        // Record the total count of palindromes.
        let mut count = 0;

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

            count += (rads[i] + 1) / 2;
        }

        count as i32
    }
}
// @lc code=end

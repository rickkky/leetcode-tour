/*
 * @lc app=leetcode.cn id=552 lang=rust
 *
 * https://leetcode.cn/problems/student-attendance-record-ii/
 */

pub struct Solution;

// @lc code=start
static MOD: u64 = 1_000_000_007;

impl Solution {
    fn multiply(a: &Vec<Vec<u64>>, b: &Vec<Vec<u64>>) -> Vec<Vec<u64>> {
        // a: r x n
        let r = a.len();
        // b: n x c
        let c = b[0].len();
        let n = a[0].len();
        let mut m = vec![vec![0; c]; r];
        for i in 0..r {
            for j in 0..c {
                for k in 0..n {
                    m[i][j] = m[i][j] + (a[i][k] * b[k][j]) % MOD;
                }
            }
        }
        m
    }

    fn pow(mut a: Vec<Vec<u64>>, mut n: i32) -> Vec<Vec<u64>> {
        let r = a.len();
        let mut m = vec![vec![0; r]; r];
        for i in 0..r {
            m[i][i] = 1;
        }
        while n > 0 {
            if n & 1 == 1 {
                m = Solution::multiply(&m, &a);
            }
            a = Solution::multiply(&a, &a);
            n >>= 1;
        }
        m
    }

    pub fn check_record(n: i32) -> i32 {
        let m = vec![
            vec![1, 1, 0, 1, 0, 0],
            vec![1, 0, 1, 1, 0, 0],
            vec![1, 0, 0, 1, 0, 0],
            vec![0, 0, 0, 1, 1, 0],
            vec![0, 0, 0, 1, 0, 1],
            vec![0, 0, 0, 1, 0, 0],
        ];
        (Self::pow(m, n)[0].iter().sum::<u64>() % MOD) as i32
    }
}
// @lc code=end

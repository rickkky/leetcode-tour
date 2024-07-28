/*
 * @lc app=leetcode.cn id=207 lang=rust
 *
 * https://leetcode.cn/problems/course-schedule/
 */

pub struct Solution;

// @lc code=start
use std::collections::VecDeque;

impl Solution {
    pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {
        // Store the post courses for each course.
        let mut post_list = vec![vec![]; num_courses as usize];
        // Store the number of pre courses for each course.
        let mut pre_count = vec![0; num_courses as usize];
        for pair in prerequisites {
            let post_course = pair[0];
            let course = pair[1];
            post_list[course as usize].push(post_course);
            pre_count[post_course as usize] += 1;
        }
        let mut queue = VecDeque::new();
        for course in 0..num_courses {
            if pre_count[course as usize] == 0 {
                queue.push_back(course);
            }
        }
        let mut visited_count = 0;
        while let Some(course) = queue.pop_front() {
            visited_count += 1;
            for &post_course in &post_list[course as usize] {
                pre_count[post_course as usize] -= 1;
                if pre_count[post_course as usize] == 0 {
                    queue.push_back(post_course);
                }
            }
        }
        visited_count == num_courses
    }
}
// @lc code=end

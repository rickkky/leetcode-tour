/*
 * @lc app=leetcode.cn id=207 lang=rust
 *
 * https://leetcode.cn/problems/course-schedule/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    fn depth_first_travel(pre_list: &Vec<Vec<i32>>, course: i32, states: &mut Vec<i32>) -> bool {
        if states[course as usize] == 1 {
            return true;
        }
        if states[course as usize] == 0 {
            return false;
        }
        states[course as usize] = 0;
        for &pre_course in &pre_list[course as usize] {
            if !Self::depth_first_travel(pre_list, pre_course, states) {
                return false;
            }
        }
        states[course as usize] = 1;
        true
    }

    pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {
        // Store the pre courses for each course.
        let mut pre_list = vec![vec![]; num_courses as usize];
        for pair in prerequisites {
            let course = pair[0];
            let pre_course = pair[1];
            pre_list[course as usize].push(pre_course);
        }
        // Store the states of each course.
        // -1: not visited
        //  0: visiting
        //  1: visited
        let mut states = vec![-1; num_courses as usize];
        for course in 0..num_courses {
            if !Self::depth_first_travel(&pre_list, course, &mut states) {
                return false;
            }
        }
        true
    }
}
// @lc code=end

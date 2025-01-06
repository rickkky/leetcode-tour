/*
 * @lc app=leetcode.cn id=19 lang=rust
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
 */

pub struct Solution;

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

// @lc code=start
impl Solution {
    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
        let mut dummy = Box::new(ListNode { val: 0, next: head });
        let mut p_1 = &dummy as *const Box<ListNode>;
        let mut p_2 = &mut dummy as *mut Box<ListNode>;
        unsafe {
            for _ in 0..n {
                if let Some(node) = &(*p_1).next {
                    p_1 = node;
                } else {
                    return dummy.next;
                }
            }
            while let Some(node) = &(*p_1).next {
                p_1 = node;
                p_2 = (*p_2).next.as_mut().unwrap();
            }
            (*p_2).next = (*p_2).next.as_mut().unwrap().next.take();
        }
        dummy.next
    }
}
// @lc code=end

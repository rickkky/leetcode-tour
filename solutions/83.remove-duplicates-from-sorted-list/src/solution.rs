/*
 * @lc app=leetcode.cn id=83 lang=rust
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 */

pub struct Solution;

// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

// @lc code=start
impl Solution {
    pub fn delete_duplicates(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() {
            return None;
        }
        let mut prev = head.as_mut();
        let mut curr = prev.as_mut().unwrap().next.take();
        while let Some(mut curr_node) = curr {
            if prev.as_ref().unwrap().val == curr_node.val {
                prev.as_mut().unwrap().next = curr_node.next.take();
            } else {
                prev.as_mut().unwrap().next = Some(curr_node);
                prev = prev.unwrap().next.as_mut();
            }
            curr = prev.as_mut().unwrap().next.take();
        }
        head
    }
}
// @lc code=end

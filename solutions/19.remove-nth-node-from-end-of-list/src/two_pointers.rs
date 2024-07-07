/*
 * @lc app=leetcode.cn id=19 lang=rust
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
 */

pub struct Solution;

//  Definition for singly-linked list.
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
        let mut dummy = Some(Box::new(ListNode { val: 0, next: head }));
        let mut left = &mut dummy;
        let mut right = &left.clone();
        for _ in 0..=n {
            if let Some(node) = right {
                right = &node.next;
            } else {
                return None;
            }
        }
        while right.is_some() {
            right = &right.as_ref().unwrap().next;
            left = &mut left.as_mut().unwrap().next;
        }
        if let Some(node) = left {
            node.next = node.next.as_mut().unwrap().next.take();
        }
        dummy.unwrap().next
    }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=206 lang=rust
 *
 * https://leetcode.cn/problems/reverse-linked-list/
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
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

// @lc code=start
impl Solution {
    fn reverse_list_recursive(
        curr: Option<Box<ListNode>>,
        prev: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        match curr {
            Some(mut curr) => {
                let next = curr.next;
                curr.next = prev;
                Self::reverse_list_recursive(next, Some(curr))
            }
            None => prev,
        }
    }

    pub fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        Self::reverse_list_recursive(head, None)
    }
}
// @lc code=end

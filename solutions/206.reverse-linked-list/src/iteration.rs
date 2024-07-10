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
    pub fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut curr = head;
        let mut prev = None;
        while let Some(mut node) = curr {
            let next = node.next;
            node.next = prev;
            prev = Some(node);
            curr = next;
        }
        prev
    }
}
// @lc code=end

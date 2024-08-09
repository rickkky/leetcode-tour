/*
 * @lc app=leetcode.cn id=25 lang=rust
 *
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/
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
    pub fn reverse(
        start: Option<Box<ListNode>>,
        tail: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut prev = tail;
        let mut curr = start;
        while let Some(mut curr_node) = curr {
            let mut next = curr_node.next.take();
            curr_node.next = prev.take();
            prev = Some(curr_node);
            curr = next.take();
        }
        prev
    }

    pub fn reverse_k_group(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        let mut dummy = Some(Box::new(ListNode { val: 0, next: head }));
        let mut head = dummy.as_mut();
        'outer: loop {
            let mut start = head.as_mut().unwrap().next.take();
            if start.is_none() {
                break 'outer;
            }
            let mut end = start.as_mut();
            for _ in 0..k - 1 {
                end = end.unwrap().next.as_mut();
                if end.is_none() {
                    head.as_mut().unwrap().next = start;
                    break 'outer;
                }
            }
            let tail = end.as_mut().unwrap().next.take();
            // BEFORE: head -> start -> 123456... -> end   -> tail
            // AFTER:  head -> end   -> ...654321 -> start -> tail
            let end = Solution::reverse(start, tail);
            head.as_mut().unwrap().next = end;
            for _ in 0..k {
                head = head.unwrap().next.as_mut();
            }
        }
        dummy.unwrap().next
    }
}
// @lc code=end

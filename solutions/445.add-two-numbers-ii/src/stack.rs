/*
 * @lc app=leetcode.cn id=445 lang=rust
 *
 * https://leetcode.cn/problems/add-two-numbers-ii/
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
    pub fn add_two_numbers(
        l_1: Option<Box<ListNode>>,
        l_2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut s_1 = vec![];
        let mut s_2 = vec![];
        let mut p_1 = l_1;
        let mut p_2 = l_2;
        while let Some(node) = p_1 {
            s_1.push(node.val);
            p_1 = node.next;
        }
        while let Some(node) = p_2 {
            s_2.push(node.val);
            p_2 = node.next;
        }
        let mut head = None;
        let mut carry = 0;
        while !s_1.is_empty() || !s_2.is_empty() || carry != 0 {
            let n_1 = s_1.pop().unwrap_or(0);
            let n_2 = s_2.pop().unwrap_or(0);
            let sum = n_1 + n_2 + carry;
            carry = sum / 10;
            let mut node = ListNode::new(sum % 10);
            node.next = head;
            head = Some(Box::new(node));
        }
        head
    }
}
// @lc code=end

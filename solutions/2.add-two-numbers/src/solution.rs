/*
 * @lc app=leetcode.cn id=2 lang=rust
 *
 * https://leetcode.cn/problems/add-two-numbers/
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
        let mut dummy = ListNode::new(0);
        let mut p = &mut dummy;
        let mut p_1 = l_1;
        let mut p_2 = l_2;
        let mut carry = 0;
        while p_1.is_some() || p_2.is_some() || carry != 0 {
            let n_1 = match p_1 {
                Some(node) => {
                    p_1 = node.next;
                    node.val
                }
                None => 0,
            };
            let n_2 = match p_2 {
                Some(node) => {
                    p_2 = node.next;
                    node.val
                }
                None => 0,
            };
            let sum = n_1 + n_2 + carry;
            carry = sum / 10;
            p.next = Some(Box::new(ListNode::new(sum % 10)));
            p = p.next.as_mut().unwrap();
        }
        dummy.next
    }
}
// @lc code=end

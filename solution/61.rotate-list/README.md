# [61. 旋转链表](https://leetcode-cn.com/problems/rotate-list)

## [循环链表法](./cycle-linked-list.ts)

思路：

1. 遍历链表结点，找到尾结点并计算链表长度；
2. 连接尾结点与头结点，使链表变为循环链表；
3. 根据 `k` 与链表长度计算新的尾结点在原链表中的位置；
4. 找到新的尾结点并断开循环链表。

## [双指针法](./two-pointers.ts)

双指针法的解题思路参考 [19.remove-nth-node-from-end-of-list](../19.remove-nth-node-from-end-of-list/two-pointers.ts) 的解法。

该方法的时间复杂度为 O(max(n, k))。因此如果 `k` 的值较大，会导致运行时间变长。

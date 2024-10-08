# [160. 相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/)

## [双指针法](./src/two_pointers.ts)

假设两个链表相交，它们的长度分别为 `a + c` 和 `b + c`，相交部分的长度为 `c`。

设置两个指针，分别从两个链表的头节点开始出发向前移动，速度为 1。当指针到达当前链表的末尾时，则从另一个链表的头节点开始出发继续向前移动。

-   若 `a = b`，则两个指针经过 `a` 次移动后第一次相遇。
-   若 `a != b`，则两个指针经过 `a + b + c` 次移动后第一次相遇。

两个指针的相遇位置即为两个链表的相交位置。

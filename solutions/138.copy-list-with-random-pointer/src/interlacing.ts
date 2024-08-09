/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer
 */

/**
 * Definition for Node.
 */
class Node {
    val: number;
    next: Node | null;
    random: Node | null;
    constructor(val?: number, next?: Node, random?: Node) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

// @lc code=start
function copyRandomList(head: Node | null): Node | null {
    if (!head) {
        return null;
    }
    let curr: Node | null = head;
    // Clone nodes and insert into original list.
    while (curr) {
        const node: Node = new Node(curr.val);
        node.next = curr.next;
        curr.next = node;
        curr = node.next;
    }
    // Get the head node of the copy list.
    const result = head.next;
    // Reset current pointer.
    curr = head;
    // Copy random pointers.
    while (curr) {
        const copy: Node = curr.next!;
        if (curr.random) {
            copy.random = curr.random.next;
        }
        curr = copy.next;
    }
    // Reset current pointer.
    curr = head;
    // Reset next pointers of all nodes.
    while (curr.next) {
        const next: Node = curr.next;
        curr.next = next.next;
        curr = next;
    }
    return result;
}
// @lc code=end

export { copyRandomList };

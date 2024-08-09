/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * https://leetcode.cn/problems/copy-list-with-random-pointer/
 */

// Definition for _Node.
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
    // Mapping from source node to copied node.
    const map = new Map<Node, Node>([[head, new Node(head.val)]]);
    let curr: Node | null = head;
    while (curr) {
        const node = map.get(curr)!;
        if (curr.next) {
            if (!map.has(curr.next)) {
                map.set(curr.next, new Node(curr.next.val));
            }
            node.next = map.get(curr.next)!;
        }
        if (curr.random) {
            if (!map.has(curr.random)) {
                map.set(curr.random, new Node(curr.random.val));
            }
            node.random = map.get(curr.random)!;
        }
        curr = curr.next;
    }
    return map.get(head)!;
}
// @lc code=end

export { copyRandomList };

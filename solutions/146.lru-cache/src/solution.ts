/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * https://leetcode.cn/problems/lru-cache/
 */

// @lc code=start
class DoubleLinkedNode {
    key: number;

    value: number;

    prev: DoubleLinkedNode | null = null;

    next: DoubleLinkedNode | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    #capacity: number;

    #size: number = 0;

    #cache: Map<number, DoubleLinkedNode> = new Map();

    #head: DoubleLinkedNode;

    #tail: DoubleLinkedNode;

    constructor(capacity: number) {
        this.#capacity = capacity;
        this.#head = new DoubleLinkedNode(NaN, NaN);
        this.#tail = new DoubleLinkedNode(NaN, NaN);
        this.#head.next = this.#tail;
        this.#tail.prev = this.#head;
    }

    get(key: number): number {
        if (!this.#cache.has(key)) {
            return -1;
        }
        const node = this.#cache.get(key)!;
        this.#moveToHead(node);
        return node.value;
    }

    put(key: number, value: number): void {
        if (this.#cache.has(key)) {
            const node = this.#cache.get(key)!;
            node.value = value;
            this.#moveToHead(node);
            return;
        }
        const node = new DoubleLinkedNode(key, value);
        this.#cache.set(key, node);
        this.#appendToHead(node);
        this.#size += 1;
        if (this.#size > this.#capacity) {
            const removed = this.#removeTail();
            this.#cache.delete(removed.key);
            this.#size -= 1;
        }
    }

    #removeNode(node: DoubleLinkedNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    #appendToHead(node: DoubleLinkedNode): void {
        node.prev = this.#head;
        node.next = this.#head.next;
        this.#head.next!.prev = node;
        this.#head.next = node;
    }

    #moveToHead(node: DoubleLinkedNode): void {
        this.#removeNode(node);
        this.#appendToHead(node);
    }

    #removeTail(): DoubleLinkedNode {
        const node = this.#tail.prev!;
        this.#removeNode(node);
        return node;
    }
}
// @lc code=end

export { LRUCache };

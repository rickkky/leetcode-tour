/*
 * @lc app=leetcode.cn id=295 lang=typescript
 *
 * https://leetcode.cn/problems/find-median-from-data-stream/
 */

// @lc code=start
/**
 * If parent compare to child is greater than 0, will persist the sequence.
 * If parent compare to child is less than 0, will swap the parent and child.
 *
 * For example:
 * - `(a, b) => a - b`: max heap.
 * - `(a, b) => b - a`: min heap.
 */
class Heap<T> {
    private data: T[] = [];

    private comppare: (a: T, b: T) => number;

    constructor(data: T[], compare: (a: T, b: T) => number) {
        this.data = data;
        this.comppare = compare;
        this.heapify();
    }

    get size() {
        return this.data.length;
    }

    heapify() {
        for (let i = this.size - 1; i >= 0; i--) {
            this.siftDown(i);
        }
    }

    peek(): T | undefined {
        return this.data[0];
    }

    push(value: T) {
        this.data.push(value);
        this.siftUp(this.size - 1);
    }

    pop(): T | undefined {
        if (this.size === 0) {
            return undefined;
        }
        this.swap(0, this.size - 1);
        const value = this.data.pop();
        this.siftDown(0);
        return value;
    }

    private siftUp(i: number) {
        while (i > 0) {
            const p = this.parent(i);
            if (this.comppare(this.data[p], this.data[i]) >= 0) {
                break;
            }
            this.swap(i, p);
            i = p;
        }
    }

    private siftDown(i: number) {
        while (i < this.size) {
            const l = this.left(i);
            const r = this.right(i);
            let j = i;
            if (
                l < this.size &&
                this.comppare(this.data[j], this.data[l]) < 0
            ) {
                j = l;
            }
            if (
                r < this.size &&
                this.comppare(this.data[j], this.data[r]) < 0
            ) {
                j = r;
            }
            if (j === i) {
                break;
            }
            this.swap(i, j);
            i = j;
        }
    }

    private left(i: number) {
        return i * 2 + 1;
    }

    private right(i: number) {
        return i * 2 + 2;
    }

    private parent(i: number) {
        return Math.floor((i - 1) / 2);
    }

    private swap(i: number, j: number) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
}

class MedianFinder {
    /**
     * Use two heaps to store the data:
     * - maxHeap: store the smaller half of the data.
     * - minHeap: store the larger half of the data.
     *
     * For finding the median:
     * - If the data count is odd, the median is the top of the maxHeap.
     * - Otherwise, the median is the average of the top of the maxHeap and the minHeap.
     */

    private maxHeap = new Heap<number>([], (a, b) => a - b);

    private minHeap = new Heap<number>([], (a, b) => b - a);

    addNum(num: number): void {
        if (this.maxHeap.size === this.minHeap.size) {
            if (this.minHeap.size === 0 || num <= this.minHeap.peek()!) {
                this.maxHeap.push(num);
            } else {
                this.maxHeap.push(this.minHeap.pop()!);
                this.minHeap.push(num);
            }
        } else {
            if (num >= this.maxHeap.peek()!) {
                this.minHeap.push(num);
            } else {
                this.minHeap.push(this.maxHeap.pop()!);
                this.maxHeap.push(num);
            }
        }
    }

    findMedian(): number {
        if (this.maxHeap.size === this.minHeap.size) {
            return (this.maxHeap.peek()! + this.minHeap.peek()!) / 2;
        } else {
            return this.maxHeap.peek()!;
        }
    }
}
// @lc code=end

export { MedianFinder };

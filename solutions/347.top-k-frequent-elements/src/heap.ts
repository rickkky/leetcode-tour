/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * https://leetcode.cn/problems/top-k-frequent-elements/
 */

// @lc code=start
class Heap<T> {
    private data: T[] = [];

    private comppare: (a: T, b: T) => number;

    constructor(data: T[], compare: (a: T, b: T) => number) {
        this.data = [...data];
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

    peek() {
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

    map<V>(callback: (value: T) => V): V[] {
        return this.data.map(callback);
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
                this.comppare(this.data[l], this.data[j]) > 0
            ) {
                j = l;
            }
            if (
                r < this.size &&
                this.comppare(this.data[r], this.data[j]) > 0
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

function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    const heap = new Heap<[number, number]>([], (a, b) => b[1] - a[1]);
    for (const [num, count] of freq) {
        if (heap.size < k) {
            heap.push([num, count]);
        } else if (count > heap.peek()[1]) {
            heap.pop();
            heap.push([num, count]);
        }
    }
    return heap.map(([num]) => num);
}
// @lc code=end

export { topKFrequent };

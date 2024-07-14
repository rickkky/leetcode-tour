/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * https://leetcode.cn/problems/kth-largest-element-in-a-stream/
 */

// @lc code=start
class MiniHeap {
    #data: number[] = [];

    #compare = (a: number, b: number) => a - b;

    get size() {
        return this.#data.length;
    }

    constructor(data: number[] = []) {
        this.#data = data;
        this.heapify();
    }

    heapify() {
        for (let i = 0; i < this.size; i++) {
            this.bubbleUp(i);
        }
    }

    peek() {
        return this.#data[0];
    }

    offer(value: number) {
        this.#data.push(value);
        this.bubbleUp(this.size - 1);
    }

    poll() {
        if (this.size === 0) {
            return null;
        }
        const result = this.#data[0];
        const last = this.#data.pop()!;
        if (this.size > 0) {
            this.#data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }

    bubbleUp(index: number) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.#compare(this.#data[index], this.#data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index: number) {
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (
                leftIndex < this.size &&
                this.#compare(this.#data[leftIndex], this.#data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex < this.size &&
                this.#compare(this.#data[rightIndex], this.#data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            if (findIndex !== index) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(i: number, j: number) {
        [this.#data[i], this.#data[j]] = [this.#data[j], this.#data[i]];
    }
}

class KthLargest {
    #k: number;

    #heap: MiniHeap;

    constructor(k: number, nums: number[]) {
        this.#k = k;
        this.#heap = new MiniHeap();
        for (const num of nums) {
            this.add(num);
        }
    }

    add(val: number): number {
        this.#heap.offer(val);
        if (this.#heap.size > this.#k) {
            this.#heap.poll();
        }
        return this.#heap.peek();
    }
}
// @lc code=end

export { KthLargest };

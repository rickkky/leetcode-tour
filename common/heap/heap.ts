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

export { Heap };

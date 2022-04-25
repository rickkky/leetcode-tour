/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * https://leetcode-cn.com/problems/number-of-islands
 */

// @lc code=start
class DisjointSet {
    private parent: number[] = [];
    private count: number = 0;

    constructor(grid: string[][]) {
        const rowNum = grid.length;
        const colNum = grid[0].length;
        for (let row = 0; row < rowNum; ++row) {
            for (let col = 0; col < colNum; ++col) {
                if (grid[row][col] === '1') {
                    this.parent.push(row * colNum + col);
                    this.count += 1;
                } else {
                    this.parent.push(-1);
                }
            }
        }
    }

    find(i: number): number {
        if (this.parent[i] !== i) {
            // compress path
            this.parent[i] = this.find(this.parent[i]);
        }
        return this.parent[i];
    }

    unite(x: number, y: number): void {
        const rootx = this.find(x);
        const rooty = this.find(y);
        if (rootx === rooty) {
            return;
        }
        this.parent[rooty] = rootx;
        this.count -= 1;
    }

    getCount(): number {
        return this.count;
    }
}

function numIslands(grid: string[][]): number {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    const rowNum = grid.length;
    const colNum = grid[0].length;
    const disjointSet = new DisjointSet(grid);
    for (let row = 0; row < rowNum; ++row) {
        for (let col = 0; col < colNum; ++col) {
            if (grid[row][col] === '0') {
                continue;
            }
            // down
            if (row + 1 < rowNum && grid[row + 1][col] === '1') {
                disjointSet.unite(row * colNum + col, (row + 1) * colNum + col);
            }
            // right
            if (col + 1 < colNum && grid[row][col + 1] === '1') {
                disjointSet.unite(row * colNum + col, row * colNum + col + 1);
            }
        }
    }
    return disjointSet.getCount();
}
// @lc code=end

export {};

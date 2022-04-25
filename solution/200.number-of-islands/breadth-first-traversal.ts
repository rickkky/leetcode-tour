/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * https://leetcode-cn.com/problems/number-of-islands
 */

// @lc code=start
function clearIsland(grid: string[][], row: number, col: number) {
    // store unhandled elements of the island
    // element: [rowIndex, colIndex]
    const queue: [number, number][] = [];
    // clear grid element and push it to queue
    const handle = (row: number, col: number) => {
        grid[row][col] = '0';
        queue.push([row, col]);
    };
    handle(row, col);
    while (queue.length > 0) {
        const rc = queue.shift()!;
        const r = rc[0];
        const c = rc[1];
        // up
        if (r - 1 >= 0 && grid[r - 1][c] === '1') {
            handle(r - 1, c);
        }
        // down
        if (r + 1 < grid.length && grid[r + 1][c] === '1') {
            handle(r + 1, c);
        }
        // left
        if (c - 1 >= 0 && grid[r][c - 1] === '1') {
            handle(r, c - 1);
        }
        // right
        if (c + 1 < grid[0].length && grid[r][c + 1] === '1') {
            handle(r, c + 1);
        }
    }
}

function numIslands(grid: string[][]): number {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let islandNum = 0;
    for (let row = 0; row < grid.length; ++row) {
        for (let col = 0; col < grid[0].length; ++col) {
            if (grid[row][col] === '1') {
                islandNum += 1;
                clearIsland(grid, row, col);
            }
        }
    }
    return islandNum;
}
// @lc code=end

export {};

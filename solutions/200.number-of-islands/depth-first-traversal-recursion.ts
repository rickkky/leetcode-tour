/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * https://leetcode-cn.com/problems/number-of-islands
 */

// @lc code=start
function clearIslandRecursive(grid: string[][], row: number, col: number) {
    grid[row][col] = '0';
    // up
    if (row - 1 >= 0 && grid[row - 1][col] === '1') {
        clearIslandRecursive(grid, row - 1, col);
    }
    // down
    if (row + 1 < grid.length && grid[row + 1][col] === '1') {
        clearIslandRecursive(grid, row + 1, col);
    }
    // left
    if (col - 1 >= 0 && grid[row][col - 1] === '1') {
        clearIslandRecursive(grid, row, col - 1);
    }
    // right
    if (col + 1 < grid[0].length && grid[row][col + 1] === '1') {
        clearIslandRecursive(grid, row, col + 1);
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
                clearIslandRecursive(grid, row, col);
            }
        }
    }
    return islandNum;
}
// @lc code=end

export {};

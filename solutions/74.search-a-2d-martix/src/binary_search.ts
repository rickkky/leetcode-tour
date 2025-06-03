/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * https://leetcode.cn/problems/search-a-2d-matrix/
 */

// @lc code=start
function searchMatrix(martix: number[][], target: number): boolean {
    const rows = martix.length;
    const cols = martix[0].length;
    let left = 0;
    let right = rows * cols - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        const x = martix[Math.floor(mid / cols)][mid % cols];
        if (x < target) {
            left = mid + 1;
        } else if (x > target) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}
// @lc code=end

export { searchMatrix };

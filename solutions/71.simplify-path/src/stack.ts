/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * https://leetcode.cn/problems/simplify-path/
 */

// @lc code=start
function simplifyPath(path: string): string {
    const stack: string[] = [];
    for (const part of path.split('/')) {
        if (part === '..') {
            stack.pop();
        } else if (part !== '.' && part !== '') {
            stack.push(part);
        }
    }
    return '/' + stack.join('/');
}
// @lc code=end

export { simplifyPath };

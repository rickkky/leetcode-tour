/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * https://leetcode.cn/problems/valid-palindrome/
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    let chars = [...s].filter((c) => c.match(/[a-zA-Z0-9]/));
    if (chars.length < 2) {
        return true;
    }
    let i = 0;
    let j = chars.length - 1;
    while (i < j) {
        if (chars[i].toLowerCase() !== chars[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
// @lc code=end

export { isPalindrome };

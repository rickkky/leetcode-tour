/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const map = new Map<string, number>();
    let start = 0;
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (map.has(c)) {
            start = Math.max(start, map.get(c)! + 1);
        }
        maxLen = Math.max(maxLen, i - start + 1);
        map.set(c, i);
    }
    return maxLen;
}
// @lc code=end

export { lengthOfLongestSubstring };

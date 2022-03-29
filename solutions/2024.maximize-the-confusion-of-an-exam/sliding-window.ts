/*
 * @lc app=leetcode.cn id=2024 lang=typescript
 *
 * https://leetcode-cn.com/problems/maximize-the-confusion-of-an-exam
 */

// @lc code=start
function maxConsecutiveCharacters(
    answerKey: string,
    k: number,
    item: string,
): number {
    let result = 0;
    for (
        let left = 0, right = 0, sum = 0;
        right < answerKey.length;
        right += 1
    ) {
        sum += answerKey.charAt(right) !== item ? 1 : 0;
        while (sum > k) {
            sum -= answerKey.charAt(left) !== item ? 1 : 0;
            left += 1;
        }
        result = Math.max(result, right - left + 1);
    }
    return result;
}

function maxConsecutiveAnswers(answerKey: string, k: number): number {
    return Math.max(
        maxConsecutiveCharacters(answerKey, k, 'T'),
        maxConsecutiveCharacters(answerKey, k, 'F'),
    );
}
// @lc code=end

export default maxConsecutiveAnswers;

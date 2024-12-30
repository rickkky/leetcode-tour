/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * https://leetcode.cn/problems/top-k-frequent-elements/
 */

// @lc code=start
function swap<T>(list: T[], i: number, j: number) {
    [list[i], list[j]] = [list[j], list[i]];
}

function medianThree(list: [number, number][], left: number, right: number) {
    const mid = (left + right) >> 1;
    const l = list[left][1];
    const m = list[mid][1];
    const r = list[right][1];
    if ((l <= m && m <= r) || (r <= m && m <= l)) {
        return mid;
    } else if ((m <= l && l <= r) || (r <= l && l <= m)) {
        return left;
    } else {
        return right;
    }
}

function partition(
    list: [number, number][],
    left: number,
    right: number,
): number {
    swap(list, medianThree(list, left, right), left);
    const base = list[left];
    let i = left;
    let j = right;
    while (i < j) {
        while (i < j && list[j][1] <= base[1]) {
            j--;
        }
        while (i < j && list[i][1] >= base[1]) {
            i++;
        }
        if (i < j) {
            swap(list, i, j);
        }
    }
    swap(list, left, i);
    return i;
}

function quickSort(
    list: [number, number][],
    left: number,
    right: number,
    k: number,
    result: number[],
) {
    const pviot = partition(list, left, right);
    if (pviot - left + 1 <= k) {
        for (let i = left; i <= pviot; i++) {
            result.push(list[i][0]);
        }
        if (pviot - left + 1 < k) {
            quickSort(list, pviot + 1, right, k - (pviot - left + 1), result);
        }
    } else {
        quickSort(list, left, pviot - 1, k, result);
    }
}

function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    const list = [...freq.entries()];
    const result: number[] = [];
    quickSort(list, 0, list.length - 1, k, result);
    return result;
}
// @lc code=end

export { topKFrequent };

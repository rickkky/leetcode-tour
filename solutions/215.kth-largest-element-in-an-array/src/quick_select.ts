/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/
 */

// @lc code=start
function medianThree(nums: number[], left: number, right: number) {
    const mid = (left + right) >> 1;
    const l = nums[left];
    const m = nums[mid];
    const r = nums[right];
    if ((l <= m && m <= r) || (r <= m && m <= l)) {
        return mid;
    } else if ((m <= l && l <= r) || (r <= l && l <= m)) {
        return left;
    } else {
        return right;
    }
}

function partition(nums: number[], left: number, right: number) {
    const medianIndex = medianThree(nums, left, right);
    [nums[medianIndex], nums[left]] = [nums[left], nums[medianIndex]];
    const base = nums[left];
    let i = left;
    let j = right;
    while (i < j) {
        while (i < j && nums[j] >= base) {
            j -= 1;
        }
        while (i < j && nums[i] <= base) {
            i += 1;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    [nums[left], nums[i]] = [nums[i], nums[left]];
    return i;
}

// Find the kth (0-indexed) smallest element.
function quickSelect(nums: number[], k: number) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const pivot = partition(nums, left, right);
        if (pivot === k) {
            return nums[k];
        } else if (pivot < k) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return nums[k];
}

function findKthLargest(nums: number[], k: number): number {
    // Convert 1-indexed kth largest to 0-indexed kth smallest.
    k = nums.length - k;
    return quickSelect(nums, k);
}
// @lc code=end

export { findKthLargest };

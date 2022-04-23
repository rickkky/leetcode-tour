/*
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * https://leetcode-cn.com/problems/open-the-lock
 */

// @lc code=start
/**
 * @param state - lock state
 * @param index - int, [0, 3]
 * @param operand - int, {-1, 1}
 * @returns - lock state after operation
 */
function getNextLockState(state: string, index: number, operand: number) {
    let num = parseInt(state[index]) + operand;
    if (num > 9) {
        num = 0;
    } else if (num < 0) {
        num = 9;
    }
    return state.slice(0, index) + num + state.slice(index + 1);
}

function openLock(deadends: string[], target: string): number {
    // store deadend states
    const deadendSet = new Set(deadends.values());
    // store visited states
    const visitedSet = new Set<string>();
    // store unhandled states
    const queue: string[] = [];
    // result
    let depth = 0;
    const visit = (state: string) => {
        queue.push(state);
        visitedSet.add(state);
    };
    visit('0000');
    while (queue.length > 0) {
        // the queue.length may change in the for-loop
        const len = queue.length;
        for (let n = 0; n < len; ++n) {
            const state = queue.shift()!;
            if (state === target) {
                return depth;
            }
            // skip while it's a deadend
            if (deadendSet.has(state)) {
                continue;
            }
            for (let i = 0; i < 4; ++i) {
                for (let op = -1; op <= 1; op += 2) {
                    const nextState = getNextLockState(state, i, op);
                    // skip while nextState is visited
                    if (visitedSet.has(nextState)) {
                        continue;
                    }
                    visit(nextState);
                }
            }
        }
        depth += 1;
    }
    return -1;
}
// @lc code=end

export {};

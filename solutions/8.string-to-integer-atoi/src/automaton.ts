/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * https://leetcode.cn/problems/string-to-integer-atoi/
 */

// @lc code=start
enum State {
    START,
    SIGN,
    DIGIT,
    END,
}

const INT_MAX = 2 ** 31 - 1;

const INT_MIN = -(2 ** 31);

class Automaton {
    private state: State = State.START;

    private table: Map<State, State[]> = new Map([
        [State.START, [State.START, State.SIGN, State.DIGIT, State.END]],
        [State.SIGN, [State.END, State.END, State.DIGIT, State.END]],
        [State.DIGIT, [State.END, State.END, State.DIGIT, State.END]],
        [State.END, [State.END, State.END, State.END, State.END]],
    ]);

    private sign: number = 1;

    private num: number = 0;

    private getCol(c: string): number {
        if (c === ' ') {
            return 0;
        } else if (c === '+' || c === '-') {
            return 1;
        } else if (c >= '0' && c <= '9') {
            return 2;
        } else {
            return 3;
        }
    }

    push(c: string) {
        const row = this.table.get(this.state)!;
        const col = this.getCol(c);
        this.state = row[col];
        if (this.state === State.SIGN) {
            this.sign = c === '-' ? -1 : 1;
        } else if (this.state === State.DIGIT) {
            const digit = parseInt(c);
            if (
                (this.sign < 0 && this.num > -(INT_MIN + digit) / 10) ||
                (this.sign > 0 && this.num > (INT_MAX - digit) / 10)
            ) {
                this.num = this.sign < 0 ? -INT_MIN : INT_MAX;
            } else {
                this.num = this.num * 10 + digit;
            }
        }
    }

    value() {
        return this.sign * this.num;
    }
}

function myAtoi(str: string): number {
    const automaton = new Automaton();
    for (const c of str) {
        automaton.push(c);
    }
    return automaton.value();
}
// @lc code=end

console.log(myAtoi('-2147483649')); // 2147483647

export { myAtoi };

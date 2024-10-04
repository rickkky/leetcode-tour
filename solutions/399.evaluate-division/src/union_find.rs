/*
 * @lc app=leetcode.cn id=399 lang=rust
 *
 * https://leetcode.cn/problems/evaluate-division/
 */

pub struct Solution;

// @lc code=start
use std::collections::HashMap;

struct UnionFind {
    parent: Vec<usize>,

    // weight[x] = var(x) / var(parent[x])
    weight: Vec<f64>,
}

impl UnionFind {
    fn new(n: usize) -> Self {
        UnionFind {
            parent: (0..n).collect(),
            weight: vec![1.0; n],
        }
    }

    /**
     * The find() method will compress the path to the root node.
     *
     * For example:
     * x -> parent[x] -> parent[parent[x]] -> ... -> root_x
     *
     * After calling find(x), the path will be compressed to:
     * x -> root_x
     *
     * weight[x]
     * = ( var(x) / var(parent[x]) ) * ( var(parent[x]) / var(parent[parent[x]]) ) * ...
     * = weight[x] * weight[parent[x]] * ...
     */
    fn find(&mut self, x: usize) -> usize {
        if self.parent[x] != x {
            let parent = self.parent[x];
            self.parent[x] = self.find(self.parent[x]);
            self.weight[x] *= self.weight[parent];
        }
        self.parent[x]
    }

    /**
     * With the path compression in the find() method,
     * the diagram of the graph will be like:
     *
     *     root_x -- weight[root_x] --> root_y
     *      /\                            /\
     *     /                             /
     *  weight[x]                     weight[y]
     *   /                             /
     *  /                             /
     * x --------- value ----------> y
     *
     * After the union() operation, the tree will be like:
     *
     *             root_y
     *            /\   /\
     *           /       \
     *  weight[root_x]  weight[y]
     *         /           \
     *        /             \
     *     root_x            y
     *      /\
     *     /
     * weight[x]
     *   /
     *  /
     * x
     *
     */
    fn union(&mut self, x: usize, y: usize, value: f64) {
        let root_x = self.find(x);
        let root_y = self.find(y);
        if root_x == root_y {
            return;
        }
        self.parent[root_x] = root_y;
        self.weight[root_x] = self.weight[y] * value / self.weight[x];
    }

    /**
     * var(x) / var(y)
     * = ( var(x) / var(root) ) / ( var(y) / var(root) )
     * = weight[x] / weight[y]
     */
    fn quotient(&mut self, x: usize, y: usize) -> f64 {
        let root_x = self.find(x);
        let root_y = self.find(y);
        if root_x == root_y {
            self.weight[x] / self.weight[y]
        } else {
            -1.0
        }
    }
}

impl Solution {
    pub fn calc_equation(
        equations: Vec<Vec<String>>,
        values: Vec<f64>,
        queries: Vec<Vec<String>>,
    ) -> Vec<f64> {
        let mut union_find = UnionFind::new(equations.len() * 2);
        let mut graph: HashMap<String, usize> = HashMap::new();
        let mut index = 0;
        for (i, equation) in equations.iter().enumerate() {
            let value = values[i];
            let x = *graph.entry(equation[0].clone()).or_insert_with(|| {
                index += 1;
                index - 1
            });
            let y = *graph.entry(equation[1].clone()).or_insert_with(|| {
                index += 1;
                index - 1
            });
            union_find.union(x, y, value);
        }
        let mut answers = Vec::new();
        for query in queries {
            match (graph.get(&query[0]), graph.get(&query[1])) {
                (Some(&x), Some(&y)) => {
                    answers.push(union_find.quotient(x, y));
                }
                _ => {
                    answers.push(-1.0);
                }
            }
        }
        answers
    }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=399 lang=rust
 *
 * https://leetcode.cn/problems/evaluate-division/
 */

pub struct Solution;

// @lc code=start
use std::collections::HashMap;

impl Solution {
    fn depth_first_traverse(
        graph: &HashMap<String, HashMap<String, f64>>,
        visited: &mut HashMap<String, bool>,
        start: &String,
        end: &String,
    ) -> f64 {
        if !graph.contains_key(start) || !graph.contains_key(end) {
            return -1.0;
        }
        if start == end {
            return 1.0;
        }
        let neighbors = graph.get(start).unwrap();
        if neighbors.contains_key(end) {
            return neighbors.get(end).unwrap().clone();
        }
        visited.insert(start.clone(), true);
        for (next, value) in neighbors {
            if visited.contains_key(next) {
                continue;
            }
            let result = Self::depth_first_traverse(graph, visited, next, end);
            if result > 0.0 {
                return value * result;
            }
        }
        -1.0
    }

    pub fn calc_equation(
        equations: Vec<Vec<String>>,
        values: Vec<f64>,
        queries: Vec<Vec<String>>,
    ) -> Vec<f64> {
        let mut graph: HashMap<String, HashMap<String, f64>> = HashMap::new();
        for (i, equation) in equations.iter().enumerate() {
            let a = &equation[0];
            let b = &equation[1];
            let value = values[i];
            graph
                .entry(a.clone())
                .or_insert(HashMap::new())
                .insert(b.clone(), value);
            graph
                .entry(b.clone())
                .or_insert(HashMap::new())
                .insert(a.clone(), 1.0 / value);
        }
        let mut answers = Vec::new();
        for query in queries {
            let a = &query[0];
            let b = &query[1];
            let mut visited = HashMap::new();
            let result = Self::depth_first_traverse(&graph, &mut visited, a, b);
            answers.push(result);
        }
        answers
    }
}
// @lc code=end

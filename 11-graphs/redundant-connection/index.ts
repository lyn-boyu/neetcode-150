/**
 * Redundant Connection - Medium
 * https://neetcode.io/problems/redundant-connection
 * 
 * You are given a connected undirected graph with `n` nodes labeled from `1` to `n`.
 * Initially, it contained no cycles and consisted of `n - 1` edges.
 * 
 * We have now added one additional edge to the graph. The edge has two different vertices chosen from `1` to `n`,
 * and was not an edge that previously existed in the graph.
 * 
 * The graph is represented as an array `edges` of length `n` where `edges[i] = [ai, bi]` represents an edge
 * between nodes `ai` and `bi` in the graph.
 * 
 * Return an edge that can be removed so that the graph is still a connected non-cyclical graph.
 * If there are multiple answers, return the edge that appears last in the input edges.
 * 
 * Example 1:
 * Input: edges = [[1, 2], [1, 3], [3, 4], [2, 4]]
 * Output: [2, 4]
 * 
 * Example 2:
 * Input: edges = [[1, 2], [1, 3], [1, 4], [3, 4], [4, 5]]
 * Output: [3, 4]
 * 
 * Constraints:
 * - n == edges.length
 * - 3 <= n <= 100
 * - 1 <= edges[i][0] < edges[i][1] <= n
 * - No repeated edges and no self-loops in the input.
 */
export function findRedundantConnection(edges: number[][]): number[] {
    // Step 1: Initialize the union-find data structure
    const parent = Array.from({ length: edges.length + 1 }, (_, i) => i);

    // Step 2: Define the find function for path compression
    function find(node: number): number {
        if (parent[node] !== node) {
            parent[node] = find(parent[node]); // Path compression
        }
        return parent[node];
    }

    // Step 3: Iterate over each edge and check for cycles
    for (let [u, v] of edges) {
        const rootU = find(u);
        const rootV = find(v);

        // If both nodes have the same root, they are in the same connected component,
        // and connecting them would create a cycle.
        if (rootU === rootV) {
            return [u, v]; // This edge is redundant and creates a cycle
        }

        // Union operation: connect the components by linking rootU to rootV
        parent[rootU] = rootV;
    }

    // No redundant connection found (should not reach here based on problem constraints)
    return [];
}

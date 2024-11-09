/**
 * Count Connected Components - Medium
 * https://neetcode.io/problems/count-connected-components
 * 
 * Given an undirected graph with `n` nodes labeled from `0` to `n - 1` and an array `edges`,
 * where `edges[i] = [a, b]` represents an edge between node `a` and node `b`,
 * return the total number of connected components in the graph.
 * 
 * Example 1:
 * Input:
 * n = 3
 * edges = [[0, 1], [0, 2]]
 * 
 * Output:
 * 1
 * 
 * Explanation:
 * - All nodes are connected, so there is only one connected component.
 * 
 * Example 2:
 * Input:
 * n = 6
 * edges = [[0, 1], [1, 2], [2, 3], [4, 5]]
 * 
 * Output:
 * 2
 * 
 * Explanation:
 * - There are two connected components: {0, 1, 2, 3} and {4, 5}.
 * 
 * Constraints:
 * - 1 <= n <= 100
 * - 0 <= edges.length <= n * (n - 1) / 2
 */
/**
 * Count Connected Components - Medium
 * https://neetcode.io/problems/count-connected-components
 * 
 * Given an undirected graph with `n` nodes labeled from `0` to `n - 1` and an array `edges`,
 * where `edges[i] = [a, b]` represents an edge between node `a` and node `b`,
 * return the total number of connected components in the graph.
 * 
 * Example 1:
 * Input:
 * n = 3
 * edges = [[0, 1], [0, 2]]
 * Output: 1
 * 
 * Example 2:
 * Input:
 * n = 6
 * edges = [[0, 1], [1, 2], [2, 3], [4, 5]]
 * Output: 2
 * 
 * Constraints:
 * - 1 <= n <= 100
 * - 0 <= edges.length <= n * (n - 1) / 2
 */

export function countComponents(n: number, edges: number[][]): number {
    // Step 1: Create an adjacency list to represent the graph
    const adjacencyList = new Map<number, number[]>();
    for (let i = 0; i < n; i++) {
        adjacencyList.set(i, []);
    }

    // 1.1 Add each edge to the adjacency list
    for (const [u, v] of edges) {
        adjacencyList.get(u)?.push(v);
        adjacencyList.get(v)?.push(u);
    }

    // Step 2: Define the DFS function to traverse the graph
    const visited = new Set<number>();

    function dfs(node: number) {
        if (visited.has(node)) return; // Base case: node already visited
        visited.add(node); // Mark node as visited

        // Recursively visit all unvisited neighbors
        for (const neighbor of adjacencyList.get(node) ?? []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    // Step 3: Traverse all nodes to count connected components
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            count++; // Increment count when finding a new connected component
            dfs(i); // Start DFS from the current node
        }
    }

    return count; // Return the total number of connected components
}

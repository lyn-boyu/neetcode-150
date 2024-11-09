/**
 * Valid Tree - Medium
 * https://neetcode.io/problems/valid-tree
 * 
 * Given `n` nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
 * write a function to check whether these edges make up a valid tree.
 * 
 * Example 1:
 * Input:
 * n = 5
 * edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
 * 
 * Output:
 * true
 * 
 * Explanation:
 * - This graph is connected and does not contain any cycles.
 * 
 * Example 2:
 * Input:
 * n = 5
 * edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
 * 
 * Output:
 * false
 * 
 * Explanation:
 * - This graph contains a cycle, so it is not a tree.
 * 
 * Constraints:
 * - 1 <= n <= 100
 * - 0 <= edges.length <= n * (n - 1) / 2
 */
/**
 * Valid Tree - Medium
 * https://neetcode.io/problems/valid-tree
 * 
 * Given `n` nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
 * write a function to check whether these edges make up a valid tree.
 * 
 * Example 1:
 * Input:
 * n = 5
 * edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
 * Output: true
 * 
 * Example 2:
 * Input:
 * n = 5
 * edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
 * Output: false
 * 
 * Constraints:
 * - 1 <= n <= 100
 * - 0 <= edges.length <= n * (n - 1) / 2
 */

export function validTree(n: number, edges: number[][]): boolean {
    // Step 1: Check if the number of edges is correct (a valid tree should have exactly n - 1 edges)
    if (edges.length !== n - 1) return false;

    // Step 2: Create an adjacency list representation of the graph
    const adjacencyList: Map<number, number[]> = new Map();
    for (let i = 0; i < n; i++) {
        adjacencyList.set(i, []);
    }
    for (let [u, v] of edges) {
        adjacencyList.get(u)?.push(v);
        adjacencyList.get(v)?.push(u);
    }

    // Step 3: Traverse the graph using DFS or BFS to check connectivity
    const stack = [0]; // Start traversal from node 0
    const visited = new Set<number>();

    while (stack.length > 0) {
        const node = stack.shift()!; // Get the current node
        if (visited.has(node)) continue; // Skip if the node is already visited

        visited.add(node); // Mark the node as visited
        for (let neighbor of adjacencyList.get(node) ?? []) {
            if (visited.has(neighbor)) continue; // Skip already visited neighbors
            stack.push(neighbor); // Add unvisited neighbors to the stack
        }
    }

    // Step 4: Check if all nodes are visited (the graph should be connected)
    return visited.size === n;
}

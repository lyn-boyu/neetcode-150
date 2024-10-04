/**
 * Cheapest Flight Path - Medium
 * 
 * https://neetcode.io/problems/cheapest-flight-path
 * 
 * There are n airports, labeled from 0 to n - 1, which are connected by some flights.
 * You are given an array flights where flights[i] = [from_i, to_i, price_i] represents a one-way flight 
 * from airport from_i to airport to_i with cost price_i. You may assume there are no duplicate flights 
 * and no flights from an airport to itself.
 * 
 * You are also given three integers src, dst, and k where:
 * - src is the starting airport.
 * - dst is the destination airport.
 * - k is the maximum number of stops you can make (not including src and dst).
 * 
 * Return the cheapest price from src to dst with at most k stops, or return -1 if it is impossible.
 * 
 * Example 1:
 * Input: n = 4, flights = [[0,1,200],[1,2,100],[1,3,300],[2,3,100]], src = 0, dst = 3, k = 1
 * Output: 500
 * Explanation:
 * The optimal path with at most 1 stop from airport 0 to 3 is shown in red, with total cost 200 + 300 = 500.
 * Note that the path [0 -> 1 -> 2 -> 3] costs only 400, and thus is cheaper, but it requires 2 stops, 
 * which is more than k.
 * 
 * Example 2:
 * Input: n = 3, flights = [[1,0,100],[1,2,200],[0,2,100]], src = 1, dst = 2, k = 1
 * Output: 200
 * Explanation:
 * The optimal path with at most 1 stop from airport 1 to 2 is shown in red and has cost 200.
 * 
 * Constraints:
 * - 1 <= n <= 100
 * - fromi != toi
 * - 1 <= pricei <= 1000
 * - 0 <= src, dst, k < n
 */

export function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    // Step 1: Build graph using adjacent list representation
    const graph = new Map<number, [number, number][]>();
    for (let [from, to, price] of flights) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from)!.push([to, price]);
    }

    // Step 2: Build queue for BFS [airport, currentCost, stops]
    const queue: [number, number, number][] = [[src, 0, 0]];
    const minCosts: number[] = new Array(n).fill(Infinity);
    minCosts[src] = 0;

    // Step 3: BFS to explore all flights starting from src
    while (queue.length > 0) {
        const [currentNode, currentCost, stops] = queue.shift()!;

        // Step 3.1: If the number of stops exceeds the allowed value, skip this path
        if (stops > k) {
            continue; // Skip processing this node and go to the next one in the queue
        }

        // Step 3.2: If valid, explore neighbors
        if (graph.has(currentNode)) {
            for (let [to, price] of graph.get(currentNode)!) {
                const newCost = currentCost + price;

                // If a cheaper path to `to` is found, update and continue BFS
                if (newCost < minCosts[to]) {
                    minCosts[to] = newCost;
                    queue.push([to, newCost, stops + 1]);
                }
            }
        }
    }

    // Step 4: Check if destination is reachable
    return minCosts[dst] === Infinity ? -1 : minCosts[dst];
}

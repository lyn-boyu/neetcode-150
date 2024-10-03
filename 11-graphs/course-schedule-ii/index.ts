/**
 * Course Schedule II - Medium
 * 
 * https://neetcode.io/problems/course-schedule-ii
 * 
 * You are given an array `prerequisites` where `prerequisites[i] = [a, b]` indicates that you must take course `b` first if you want to take course `a`.
 * 
 * There are a total of `numCourses` courses you are required to take, labeled from `0` to `numCourses - 1`.
 * 
 * Return a valid ordering of courses you can take to finish all courses. If there are many valid answers, return any of them. 
 * If it's not possible to finish all courses, return an empty array.
 * 
 * Example 1:
 * Input: numCourses = 3, prerequisites = [[1, 0]]
 * Output: [0, 1, 2]
 * Explanation: We must ensure that course 0 is taken before course 1.
 * 
 * Example 2:
 * Input: numCourses = 3, prerequisites = [[0, 1], [1, 2], [2, 0]]
 * Output: []
 * Explanation: It's impossible to finish all courses.
 * 
 * Constraints:
 * - 1 <= numCourses <= 1000
 * - 0 <= prerequisites.length <= 1000
 * - All prerequisite pairs are unique.
 */

export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    // Step 1: Build the graph
    // 1.1 Initialize adjacency list and indegree array
    const adjList: number[][] = Array.from({ length: numCourses }, () => []);
    const indegree: number[] = new Array(numCourses).fill(0);

    // 1.2 Fill the graph based on the prerequisites
    for (let [a, b] of prerequisites) {
        adjList[b].push(a);  // Add child node `a` to `b`
        indegree[a]++;       // Increase the indegree of node `a`
    }

    // Step 2: Find all nodes with indegree = 0 (courses without prerequisites)
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);  // These courses can be taken first
        }
    }

    // Step 3: Process nodes in topological order
    const courseOrder: number[] = [];
    while (queue.length > 0) {
        const currentCourse = queue.shift()!;
        courseOrder.push(currentCourse);  // Add course to finished order

        // Decrease the indegree of all child nodes (neighbors)
        for (let neighbor of adjList[currentCourse]) {
            indegree[neighbor]--;

            // If the indegree becomes zero, add it to the queue
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Step 4: Check if all courses can be completed
    return courseOrder.length === numCourses ? courseOrder : [];
}

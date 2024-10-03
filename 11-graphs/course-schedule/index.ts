/**
 * Course Schedule - Medium
 * 
 * https://neetcode.io/problems/course-schedule
 * 
 * You are given an array `prerequisites` where prerequisites[i] = [a, b] indicates that you must take course `b` first if you want to take course `a`.
 * 
 * The pair [0, 1] indicates that you must take course 1 before taking course 0.
 * 
 * There are a total of `numCourses` courses you are required to take, labeled from 0 to numCourses - 1.
 * 
 * Return true if it is possible to finish all courses, otherwise return false.
 * 
 * Example 1:
 * Input: numCourses = 2, prerequisites = [[0, 1]]
 * Output: true
 * Explanation: First take course 1 (no prerequisites), and then take course 0.
 * 
 * Example 2:
 * Input: numCourses = 2, prerequisites = [[0, 1], [1, 0]]
 * Output: false
 * Explanation: In order to take course 1 you must take course 0, and to take course 0 you must take course 1. So it is impossible.
 * 
 * Constraints:
 * - 1 <= numCourses <= 1000
 * - 0 <= prerequisites.length <= 1000
 * - All prerequisite pairs are unique.
 */
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // Step 1: Initialize adjacency list and in-degree array
    const adjList: number[][] = Array.from({ length: numCourses }, () => [] as number[]);
    const indegree: number[] = new Array(numCourses).fill(0);

    // Step 2: Build the graph
    for (let [a, b] of prerequisites) {
        adjList[b].push(a);
        indegree[a]++;
    }

    // Step 3: Find all nodes with zero in-degree and add them to the queue
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    // Step 4: Process nodes in topological order
    let courseTaken = 0;
    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        courseTaken++;

        // Visit all downstream nodes (courses dependent on current course)
        for (let neighbor of adjList[currentNode]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Step 5: Check if all courses have been taken
    return courseTaken === numCourses;
}
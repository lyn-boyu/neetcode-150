/**
 * Task Scheduling - Medium
 * 
 * https://neetcode.io/problems/task-scheduling
 * 
 * You are given an array of CPU tasks `tasks`, where `tasks[i]` is an uppercase English character from A to Z. 
 * You are also given an integer `n`.
 * 
 * Each CPU cycle allows the completion of a single task, and tasks may be completed in any order.
 * 
 * The only constraint is that identical tasks must be separated by at least `n` CPU cycles, to cool down the CPU.
 * 
 * Return the minimum number of CPU cycles required to complete all tasks.
 * 
 * Example 1:
 * 
 * Input: tasks = ["X", "X", "Y", "Y"], n = 2
 * 
 * Explanation: 
 * A possible sequence is: X -> Y -> idle -> X -> Y
 * 
 * Step-by-step representation:
 * 1. X (complete the first task)
 * 2. Y (complete the second task)
 * 3. idle (cooldown for X)
 * 4. X (complete the next instance of X)
 * 5. Y (complete the next instance of Y)
 * 
 * Output: 5
 * 
 * Example 2:
 * 
 * Input: tasks = ["A", "A", "A", "B", "C"], n = 3
 * 
 * Explanation: 
 * A possible sequence is: A -> B -> C -> Idle -> A -> Idle -> Idle -> Idle -> A
 * 
 * Step-by-step representation:
 * 1. A (complete the first instance of A)
 * 2. B (complete B)
 * 3. C (complete C)
 * 4. Idle (cooldown for A)
 * 5. A (complete the second instance of A)
 * 6. Idle (cooldown for A)
 * 7. Idle (cooldown for A)
 * 8. Idle (cooldown for A)
 * 9. A (complete the third instance of A)
 * 
 * Output: 9
 * 
 * Constraints:
 * - 1 <= tasks.length <= 1000
 * - 0 <= n <= 100
 */

export function leastInterval(tasks: string[], n: number): number {
    return -1
}

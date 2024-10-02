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
    // Step 1: Count Task Frequency
    // 1.1: Initialize an array of length 26 to store task frequencies ('A' to 'Z')
    const taskCount: number[] = new Array(26).fill(0);

    // 1.2: Calculate the frequency of each task
    for (let task of tasks) {
        const idx = task.charCodeAt(0) - 'A'.charCodeAt(0);
        taskCount[idx]++;
    }

    // 1.3: Sort frequencies in descending order to prioritize high-frequency tasks
    taskCount.sort((a, b) => b - a);

    // Step 2: Calculate Initial Idle Slots
    // 2.1: Get the highest task frequency
    const maxFrequency = taskCount[0];

    // 2.2: Calculate initial idle slots needed based on the most frequent task
    // (maxFrequency - 1) groups, each requiring n idle slots
    let idleSlots = (maxFrequency - 1) * n;

    // Step 3: Update Idle Slots
    // 3.1: Use other tasks to fill idle slots
    for (let i = 1; i < taskCount.length && idleSlots > 0; i++) {
        const currentTaskCount = taskCount[i];
        const maxFillableSlots = maxFrequency - 1;

        // Fill idle slots with as many of the current task as possible
        if (currentTaskCount >= maxFillableSlots) {
            idleSlots -= maxFillableSlots;
        } else {
            idleSlots -= currentTaskCount;
        }
    }

    // 3.2: Ensure idle slots are not negative
    idleSlots = Math.max(idleSlots, 0);

    // Step 4: Return total time needed to complete all tasks
    return tasks.length + idleSlots;
}

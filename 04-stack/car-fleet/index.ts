/**
 * Car Fleet - Medium
 * 
 * https://neetcode.io/problems/car-fleet
 * 
 * There are n cars traveling to the same destination on a one-lane highway.
 * You are given two arrays of integers position and speed, both of length n.
 * 
 * - position[i] is the position of the ith car (in miles)
 * - speed[i] is the speed of the ith car (in miles per hour)
 * 
 * The destination is at position target miles.
 * 
 * A car can not pass another car ahead of it. It can only catch up to another car 
 * and then drive at the same speed as the car ahead of it.
 * 
 * A car fleet is a non-empty set of cars driving at the same position and same speed.
 * A single car is also considered a car fleet.
 * 
 * If a car catches up to a car fleet the moment the fleet reaches the destination, 
 * then the car is considered to be part of the fleet.
 * 
 * Return the number of different car fleets that will arrive at the destination.
 * 
 * Example 1:
 * Input: target = 10, position = [1,4], speed = [3,2]
 * Output: 1
 * Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, 
 * meeting each other at 10, the destination.
 * 
 * Example 2:
 * Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]
 * Output: 3
 * Explanation: The cars starting at 4 and 7 become a fleet at position 10. 
 * The cars starting at 1 and 0 never catch up to the car ahead of them. 
 * Thus, there are 3 car fleets that will arrive at the destination.
 * 
 * Constraints:
 * - n == position.length == speed.length.
 * - 1 <= n <= 1000
 * - 0 < target <= 1000
 * - 0 < speed[i] <= 100
 * - 0 <= position[i] < target
 * - All the values of position are unique.
 */


export function carFleet(target: number, position: number[], speed: number[]): number {
    // Combine position and speed into a single array where each element is [position, speed]
    const cars = position.map((pos, idx) => [pos, speed[idx]]);

    // Sort cars by their position in descending order so that we start processing from the car closest to the target
    cars.sort((a, b) => b[0] - a[0]);

    let fleets = 0;  // Initialize the number of car fleets
    let timeToReachTarget = 0;  // Time taken by the current fleet to reach the target

    // Iterate through the sorted cars array
    for (let car of cars) {
        const [pos, spd] = car;
        // Calculate the time needed for the current car to reach the target
        const time = (target - pos) / spd;

        // If the current car's time to reach the target is greater than the timeToReachTarget of the last fleet,
        // it means this car cannot catch up with the previous fleet and forms a new fleet
        if (time > timeToReachTarget) {
            fleets++;  // Increment the fleet count since a new fleet is formed
            timeToReachTarget = time;  // Update the time for the new fleet to reach the target
        }
    }

    // Return the total number of fleets that will reach the target
    return fleets;
}

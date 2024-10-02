/**
 * K Closest Points to Origin - Medium
 * 
 * https://neetcode.io/problems/k-closest-points-to-origin
 * 
 * You are given a 2-D array `points` where `points[i] = [xi, yi]` represents the coordinates of a point on an X-Y axis plane. 
 * You are also given an integer `k`.
 * 
 * Return the k closest points to the origin (0, 0).
 * 
 * The distance between two points is defined as the Euclidean distance (`sqrt((x1 - x2)^2 + (y1 - y2)^2)`).
 * 
 * You may return the answer in any order.
 * 
 * Example 1:
 * 
 * Input: points = [[0,2],[2,2]], k = 1
 * 
 * Visual representation:
 *     y
 *     |
 *  2  |    A(2,2)
 *     |    
 *  1  |        
 *     |
 *  0  |---A(0,2)----2----x
 * 
 * Explanation: The distance between (0, 2) and the origin (0, 0) is 2. The distance between (2, 2) and the origin is sqrt(2^2 + 2^2) = 2.82842. So the closest point to the origin is (0, 2).
 * 
 * Output: [[0,2]]
 * 
 * Example 2:
 * 
 * Input: points = [[0,2],[2,0],[2,2]], k = 2
 * 
 * Visual representation:
 *     y
 *     |
 *  2  |    A(2,2)
 *     |    
 *  1  |        
 *     |
 *  0  |---A(0,2)----A(2,0)----2----x
 * 
 * Output: [[0,2],[2,0]]
 * Explanation: The output [2,0],[0,2] would also be accepted.
 * 
 * Constraints:
 * - 1 <= k <= points.length <= 1000
 * - -100 <= points[i][0], points[i][1] <= 100
 */



export function kClosest(points: number[][], k: number): number[][] {
    // Step 1: Sort points based on their distance from the origin in ascending order
    const sortedPoints = points.sort((a, b) => {
        // Calculate Euclidean distance for point a from the origin (0, 0)
        const distanceA = a[0] * a[0] + a[1] * a[1];
        // Calculate Euclidean distance for point b from the origin (0, 0)
        const distanceB = b[0] * b[0] + b[1] * b[1];

        return distanceA - distanceB; // Sort in ascending order based on distance
    });

    // Step 2: Return the first k points from the sorted list
    return sortedPoints.slice(0, k);
}

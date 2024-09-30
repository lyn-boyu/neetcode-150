/**
 * Time Based Key-Value Store - Medium
 * 
 * https://neetcode.io/problems/time-based-key-value-store
 * 
 * Implement a time-based key-value data structure that supports:
 * - Storing multiple values for the same key at specified timestamps.
 * - Retrieving the key's value at a specified timestamp.
 * 
 * Implement the TimeMap class:
 * 
 * - TimeMap() Initializes the object.
 * - void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
 * - String get(String key, int timestamp) Returns the most recent value of key if set was previously called on it and the most recent timestamp for that key prev_timestamp is less than or equal to the given timestamp (prev_timestamp <= timestamp). If there are no values, it returns "".
 * 
 * Note: For all calls to set, the timestamps are in strictly increasing order.
 * 
 * Example 1:
 * 
 * Input:
 * ["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]
 * 
 * Output:
 * [null, null, "happy", "happy", null, "sad"]
 * 
 * Explanation:
 * TimeMap timeMap = new TimeMap();
 * timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
 * timeMap.get("alice", 1);           // return "happy"
 * timeMap.get("alice", 2);           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
 * timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
 * timeMap.get("alice", 3);           // return "sad"
 */

type TimeValue = {
    timestamp: number;
    value: string;
};

export class TimeMap {
    private store: Map<string, TimeValue[]>;

    constructor() {
        this.store = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        // If the key doesn't exist, initialize it with an empty array
        if (!this.store.has(key)) {
            this.store.set(key, [])
        }
        // Add the new {timestamp, value} pair to the array for the given key
        this.store.get(key)!.push({ timestamp, value })
    }

    get(key: string, timestamp: number): string {
        // If the key does not exist, return an empty string
        if (!this.store.has(key)) return ''

        // Retrieve the array of values associated with the key
        const values = this.store.get(key) || [];

        let res = ''
        let left = 0
        let right = values?.length - 1;

        // Perform binary search to find the most recent value with timestamp <= given timestamp
        while (left <= right) {
            const mid = Math.floor((right + left) / 2)
            // If the current timestamp is less than or equal to the given timestamp
            if (values[mid].timestamp <= timestamp) {
                // Update the result with the current value, as it is a potential match
                res = values[mid].value
                // Move to the right to see if there's a more recent value
                left = mid + 1
            } else {
                // If the current timestamp is greater than the given timestamp, search the left half
                right = mid - 1
            }
        }

        return res
    }
}

/**
 * LRU Cache - Medium
 * 
 * https://neetcode.io/problems/lru-cache
 * 
 * Implement the Least Recently Used (LRU) cache class LRUCache. The class should support the following operations:
 * 
 * - LRUCache(int capacity): Initialize the LRU cache of size capacity.
 * - int get(int key): Return the value corresponding to the key if the key exists, otherwise return -1.
 * - void put(int key, int value): Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. 
 * If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.
 * 
 * A key is considered used if a get or a put operation is called on it.
 * 
 * Ensure that get and put each run in O(1) average time complexity.
 * 
 * Example 1:
 * 
 * Input:
 * ["LRUCache", [2], "put", [1, 10],  "get", [1], "put", [2, 20], "put", [3, 30], "get", [2], "get", [1]]
 * 
 * Output:
 * [null, null, 10, null, null, 20, -1]
 * 
 * Explanation:
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 10);  // cache: {1=10}
 * lRUCache.get(1);      // return 10
 * lRUCache.put(2, 20);  // cache: {1=10, 2=20}
 * lRUCache.put(3, 30);  // cache: {2=20, 3=30}, key=1 was evicted
 * lRUCache.get(2);      // returns 20 
 * lRUCache.get(1);      // return -1 (not found)
 * 
 * Constraints:
 * 
 * - 1 <= capacity <= 100
 * - 0 <= key <= 1000
 * - 0 <= value <= 1000
 */
class Node {
    key: number;
    value: number;
    next: Node | null;
    prev: Node | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    private capacity: number;
    private cache: Map<number, Node>;
    private head: Node | null; // points to the most recently used node
    private tail: Node | null; // points to the least recently used node

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, Node>();
        this.head = null;
        this.tail = null;
    }

    private removeNode(node: Node): void {
        // Detach the node from the doubly linked list

        // If node has a previous node, update its next pointer
        if (node.prev) {
            node.prev.next = node.next;
        } else {
            // If it's the head node, update the head reference
            this.head = node.next;
        }

        // If node has a next node, update its previous pointer
        if (node.next) {
            node.next.prev = node.prev;
        } else {
            // If it's the tail node, update the tail reference
            this.tail = node.prev;
        }
    }

    private insertAtFront(node: Node): void {
        // Insert the node at the front of the doubly linked list

        node.next = this.head;
        node.prev = null;

        // If head exists, update its previous pointer
        if (this.head) {
            this.head.prev = node;
        }

        // Set the new node as the head
        this.head = node;

        // If there's no tail (i.e., list was empty), set the tail to this node
        if (!this.tail) {
            this.tail = node;
        }
    }

    get(key: number): number {
        // Return -1 if the key is not in the cache
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key)!;

        // Move the accessed node to the front (most recently used)
        this.removeNode(node);
        this.insertAtFront(node);

        // Return the value of the node
        return node.value;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            // If the key exists, remove the old node and update its value
            const node = this.cache.get(key)!;
            this.removeNode(node);
            node.value = value;
            this.insertAtFront(node);
        } else {
            // If the key does not exist, create a new node
            const newNode = new Node(key, value);

            // If the cache has exceeded its capacity, remove the least recently used (tail) node
            if (this.cache.size >= this.capacity) {
                if (this.tail) {
                    this.cache.delete(this.tail.key); // Remove from cache map
                    this.removeNode(this.tail); // Remove from linked list
                }
            }

            // Add the new node to the front (most recently used)
            this.cache.set(key, newNode);
            this.insertAtFront(newNode);
        }
    }
}

export { LRUCache };

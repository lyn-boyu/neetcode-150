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
    key: number
    value: number
    next: Node | null
    prev: Node | null
    constructor(key: number, value: number) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    private capacity: number;
    private cache: Map<number, Node>;
    private head: Node | null
    // put exceed capacity will use tail to remove 
    private tail: Node | null

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, Node>();
        this.head = null
        this.tail = null
    }

    private removeNode(node: Node) {
        // remove node from  prev node
        if (node.prev) {
            node.prev.next = node.next
        } else {
            // if it is head node update this.head
            this.head = node.next
        }

        if (node.next) {
            // disconnect with next node 
            node.next.prev = node.prev
        } else {
            // if it is tail node update this.tail
            this.tail = node.prev
        }

    }

    private insertAtFront(node: Node) {
        // update node next and prev
        node.next = this.head
        node.prev = null
        // update head
        if (this.head) {
            this.head.prev = node
        }
        this.head = node

        // update if there is no tail
        if (!this.tail) {
            this.tail = node
        }

    }

    // return -1 if key is not exist in the cache
    get(key: number): number {
        // find node in map return -1 if not exist 
        if (!this.cache.has(key)) return -1

        const node = this.cache.get(key)!;
        // update linked list
        // - remove node from list
        this.removeNode(node)
        // - move node to head 
        this.insertAtFront(node)

        // return value
        return node.value
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            // if cache exist same key 
            const node = this.cache.get(key)!;
            // delete node from list
            this.removeNode(node)
            // update value
            node.value = value
            // insert node atFront
            this.insertAtFront(node)
        } else {
            const newNode = new Node(key, value)
            // if it is a new node
            if (this.cache.size >= this.capacity) {
                // case1: the capacity is exceeded
                // - remove the tail node from list
                // - remove the tail node from the map
                if (this.tail) {
                    // delete cache first
                    this.cache.delete(this.tail?.key)
                    this.removeNode(this.tail)
                }
            }
            // case2: the capacity is not exceed
            // - add to map
            this.cache.set(key, newNode)
            // - add to front
            this.insertAtFront(newNode)
        }
    }
}

export { LRUCache };

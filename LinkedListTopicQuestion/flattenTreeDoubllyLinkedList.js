// You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer.This child pointer may or may not point to a separate doubly linked list, also containing these special nodes.These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

// Given the head of the first level of the list, flatten the list so that all the nodes appear in a single - level, doubly linked list.Let curr be a node with a child list.The nodes in the child list should appear after curr and before curr.next in the flattened list.

// Return the head of the flattened list.The nodes in the list must have all of their child pointers set to null.




var flatten = function(head) {
    if (!head) return null;
    let dummyHead = new Node(0, null, head, null);

    let stack = [head];
    let current = dummyHead;
    let prev = null;

    while (stack.length != 0) {
        current = stack.pop();

        if (prev) {
            current.prev = prev;
            prev.next = current;
        }

        if (current.next != null) stack.push(current.next);
        if (current.child != null) { // has a child
            stack.push(current.child);
            current.child = null; // remove child reference
        }

        prev = current;
    }

    return dummyHead.next;
};
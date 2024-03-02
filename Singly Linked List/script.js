//Creating a Node
class Node {
    constructor(val) {
        this.val = val;
        this.next= null;
    }
};

//Creating a SinglyLinkedList
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        let previous = current;
        while(current.next) {
            previous = current;
            current = current.next;
        }

        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

const list = new SinglyLinkedList();
list.push("1");
list.push("32");

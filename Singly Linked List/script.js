//Creating a Node
class Node {
    constructor(val) {
        this.val = val;
        this.next= null;
    }
};

//Creatign a SinglyLinkedList
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
            this.length++;
        }
    }
}

const list = new SinglyLinkedList();
list.push("1");
list.push("32");
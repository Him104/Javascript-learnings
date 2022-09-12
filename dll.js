class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class dll {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data){
        var newNode = new Node(data);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    
}
shift(){
    if(this.length === 0) return undefined;
    var oldHead = this.head;
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    }else{
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
    }
    this.length--;
    return oldHead;
}
unshift(data){
    var newNode = new Node(data);
    if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
}
get(index){
    if(index < 0 || index >= this.length) return null;
    var count, current;
    if(index <= this.length/2){
        count = 0;
        current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
    } else {
        count = this.length - 1;
        current = this.tail;
        while(count !== index){
            current = current.prev;
            count--;
        }
    }
    return current;
}
set(index, data){
    var foundNode = this.get(index);
    if(foundNode != null){
        foundNode.data = data;
        return true;
    }
    return false;
}
insert(index, data){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(data);
    if(index === this.length) return !!this.push(data);

    var newNode = new Node(data);
    var beforeNode = this.get(index-1);
    var afterNode = beforeNode.next;
    
    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
}
}

let list = new dll()
list.push(0);
list.push(2);
// list.pop()
// list.shift()
list.unshift(3)
list.get(2)
list.set(2,34)
list.insert(3,54)
console.log(list);
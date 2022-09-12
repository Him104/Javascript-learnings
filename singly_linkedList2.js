class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
       this.tail = null;
        this.length = 0;
    }
    push(data){
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;        
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
           pop(){
            if(!this.head)
            return undefined;
            let current = this.head;
            let newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next 
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            return current;
           }    
           shift()  {
            if (!this.head) 
                return undefined;
                let currentHead = this.head;
                this.head = currentHead.next
                this.length--;
                return currentHead;
           }
unshift(data){
    let newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        this.tail = this.head
        
    }
    else{
        newNode.next = this.head;
        this.head = newNode;
 
    }
    this.length++
    return this;
}
get(index){
    if (index<0 || index>=this.length) {
        return null;
        
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
        current = current.next;
        counter++;
        
    }
    return current;
}

set(index,data){
let foundNode = this.get(index)
if(foundNode){
    foundNode.data = data;
    return true;
}
return false;

}

insert(index,data){
    if(index<0 || index>this.length){
        return false;
    }
    if(index=== this.length){
        return this.push(data);
    }
    if (index===0) {
        return this.unshift(data);
        
    }
    let newNode = new Node(data);
    let prev = this.get(index-1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
}
remove(index){
    if(index<0 || index>this.length) {
        return undefined;
    }
    if(index===0){
        return this.shift(data);
    }
    if (index===this.length-1) {
        return this.pop()
         }
    let previousNode = this.get(index-1);
    let remove = previousNode.next;
    previousNode.next = remove.next;
    this.length--;
    return remove;
}
reverse(){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }
    return this;
}

}
let list = new linkedList()
list.push("hey guys!!!")
list.push("goodbye!!")
list.push("goodMorning!")
// list.shift()
// list.unshift("shifting to head")
// list.get(0)
// list.pop()
// list.set(0)
// list.insert(1,"sayonara")
// list.remove(1)
list.reverse()
console.log(list)

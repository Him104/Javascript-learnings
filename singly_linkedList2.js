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
}
let list = new linkedList()
list.push("hey guys!!!")
list.push("goodbye!!")
list.push("goodMorning!")
// list.shift()
// list.unshift("shifting to head")
list.get(0)
// list.pop()
// console.log(list)
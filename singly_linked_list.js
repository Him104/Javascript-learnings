class linkedList {
    constructor(data){
            this.head = {
                value:data,
                next: null
            }
            this.tail = this.head     
    
}

insert(data){
    const secondNode = {
        value: data,
        next: null
    }
    this.tail.next = secondNode
    this.tail = secondNode;


}
insert(data){
    const thirdNode = {
        value:data,
        next:null
    }
    this.tail.next = thirdNode
    this.tail = thirdNode
}

insert(data){
    const fourthNode = {
        value:data,
        next:null
    }
    this.tail.next = fourthNode
    this.tail = fourthNode
}
}

const myList = new linkedList(10)
myList.insert(16)
myList.insert(29)
myList.insert(33)

console.log(myList);
class linkedList {
    constructor(data){
            this.head = {
                value:data,
                next: null
            }
            this.tail = this.head   
            this.length = 1;  
    
}

insert(data){
    const secondNode = {
        value: data,
        next: null
    }
    this.tail.next = secondNode
    this.tail = secondNode;
    this.length++


}


insert(data){
    const thirdNode = {
        value: data,
        next: null
    }
    this.tail.next = thirdNode
    this.tail = thirdNode
    this.length++
    
}
}

const myList = new linkedList(10)
myList.insert(16)
myList.insert(25)


console.log(myList);
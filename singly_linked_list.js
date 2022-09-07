class linkedList {
    constructor(data){
            this.head = {
                value:data,
                next: null
            }
            this.tail = this.head     
    
}
}

const myList = new linkedList(10)

console.log(myList);
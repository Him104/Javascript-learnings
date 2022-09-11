class linkedList {
    constructor(data){
            this.head = {
                value:data,
                next: null
            }
            {
            this.tail = this.head   
            this.length = 1;  
            }
}
 insert_at_tail(data){
    const secondNode = {
        value: data,
        next: null
    }
    this.tail.next = secondNode
    this.tail = secondNode;
    this.length++


}


insert_at_tail(data){
    const thirdNode = {
        value: data,
        next: null
    }
    this.tail.next = thirdNode
    this.tail = thirdNode
    this.length++
    
}

insert_at_front(data){
    const fourthNode ={
        value:data,
        next:null
    }
    fourthNode.next = this.head
    this.head = fourthNode
    this.length++
}
}

// traverse(req)
//     let counter =0;
//     let currentNode = this.head

//     while (counter != req) {
//         counter++
//       currentNode = currentNode.next 
//     } 
     


// insert_at_specific(index, data){
//     const fifthNode = {
//         value:data,
//         next:null
//     }

//     const leaderNode = this.traverse(index-1);
//     const nextNode = leaderNode.next
//     leaderNode.next = fifthNode;
//     fifthNode.next = nextNode;

// }






const myList = new linkedList(10)
myList.insert_at_tail(16)
myList.insert_at_tail(25)
myList.insert_at_front(1)
myList.insert_at_specific(1,2)

console.log(myList);
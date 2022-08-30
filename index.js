// console.log("hello world!!!");

// let a;

// console.log(a);

// -----------------------------------------------
//string Indexing

// let Name = "himanshu";

// console.log(Name[5]);

// console.log(Name.length) 

// // console.log(Name[Name.length-1])

// ------------------------------------------------

//trim()
//toUpperCase()
//toLoweCase()
//slice

// let firstName = "  Mukesh   ";

// console.log(firstName.length);
// let newString = firstName.trim()

// console.log(newString.length)

// let firstName = "Mukesh";

// let newString = firstName.toUpperCase()

// console.log(newString)

// let firstName = "MUKESH";

// let newString = firstName.toLowerCase()

// console.log(newString)

// start index

// end index

// let firstName = "MUKESH";

// let newString = firstName.slice(0,3)
// console.log(newString)

//--------------------------------------
//typeof operator
//data types (primitive data types) :-

//string
//number
//booleans
//undefined
//null
// BigInt
//symbol

// convert number to string
// convert string to number

// let age = 29;
// let firstName = "Himanshu Chauhan";

// console.log(typeof(age))

// // convert number to string
// let age = 34;
// age = 29 + "";

// console.log(typeof age)

// // convert number to string
// let age = 34;
// age = 29 + "";

// console.log(typeof age)

// // convert string to number
// let firstName = "Himanshu";
// firstName = +"Himanshu"

// console.log(typeof firstName)

// string concatenation
// let fname = "himanshu";
// let lname = "chauhan";
// let age = 25;



// let fullName = fname + " "+ lname + " "+age;

// console.log(fullName);

//ternary operator 
// let age = 15;
// let drink;

// if(age>=5){
//     drink = "Coffee";
// }
// else{
//     drink = "milk";
// }

// console.log(drink);

// let age = 4;
// let drink= age>=5 ? "coffee" : "milk";

// console.log(drink);
// function func()

// const array = [12,5,9,28,43];

//    const element = array[1];
//    element.pop()


// console.log(array)

//program to check prime number

// function prime(num){
//    if (num<=1) {
//       return "No"; 
//    }
//    for (let index = 2; index < num; index++) {
//       if (num%index===0) {
//          return "No";     
//       }   
//    }
//    return "Yes";
// }
// const result = prime(8);
// console.log(result); 

// find array of animals repeated

// function animalCount(animals){
//    let animalFrequency = {}

//    for(i of animals){
//       if(animalFrequency[i]){
//          animalFrequency[i]++;
//       }
//       else
//       {
//          animalFrequency[i]=1;
//       }
//    }
//    console.log(animalFrequency);
// }

// animalCount(["cat","dog","goat","lion","cat","dog","goat","lion","goat","lion","goat","dog"])


// Binary search algo

function binarySearch(arr,key){
   let start = 0;
   let end = arr.length;
   while (start<=end) {
      let mid = (start+end)/2;
      if(key==arr[mid])
      {
         return mid;
      }
      else if(key<arr[mid]){
         end = mid-1;
      }
      else {
         start = mid+1;
      }
   }
   return null; 
}

let arr = [1, 3, 5, 7, 8, 9];
console.log(binarySearch(arr,1));

// function greeting(name) {
//     console.log('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = ('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);
  
// function add()










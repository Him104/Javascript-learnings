// Write a function maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// function maxSubarraySum(arr,n){
//     if(n>arr.length){
//         return null;
//     }
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//    let  temp = 0;
//     for (let j = i; j < i+n; j++) {
//         temp += arr[j];
        
//     }
//     if(temp>max){
//         max = temp;
//     }
    
// }
// return max;
// }

// let arr = [ 1,4,5,2,3,8,1,7,6];

// let n = 3;

// console.log(maxSubarraySum(arr,n));



























// function max(arr,num){
//     if(arr.length<num){
//         return null;
//     }
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let temp =0;
//         for (let j = i; j < i+num; j++) {
//             temp += arr[j];
            
//         }
//         if(temp>max){
//             max = temp;
//         }
        
//     }
//     return max;
// }

// let arr = [1,3,5,7,8,9,1,2,3]
// let num = 4;

// console.log(max(arr,num));

// Write a function called sumZero which accepts a sorted array of integers :-

function sumZero(arr){
    for (let i = 0; i < arr.length; i++) {
       for (let j = i+1; j < arr.length; j++) {
        if(arr[i]+arr[j]===0)
        {
            return [arr[i],arr[j]];
        }
        
       }
         }
}

let arr = [-6,-4,-3,-2,0,1,2,4,6];

console.log(sumZero(arr));
// Implementing a function called countUniqueValues which accepts a sorted array, and counts the unique value in array :-

function unique(arr){
    if(arr.length===0){
        return 0;
    }
    let i = 0;
        for (let j = 1; j < arr.length; j++) {
            if(arr[i] !== arr[j]){
                i++;
                arr[i] = arr[j];
                // console.log(i,j)

            }
    }
    return i+1;
}
let arr = [0,0,1,1,3,4,5,6,7,8,9,9];

console.log(unique(arr));
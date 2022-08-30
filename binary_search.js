// binary search algorithm in js
function binarySearch(arr,key){
   let start = 0;
   let end = arr.length;
   while (start<=end) {
let mid = (start+end)/2;  
if (key==arr[mid]) {
   return mid;
   
}    
else if(key<arr[mid]){
   end = mid-1;

}
else{
   start = mid+1;
   
}
   }
   return null;
}

let arr = [1, 3, 5, 7, 8, 9];
console.log(binarySearch(arr,7));












function bubblesort(arr)
{
for (let i = 0; i <arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[j]>arr[j+1]){
            console.log(i,j)
            let temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1]= temp;
          }    }   
}
return arr;
}
let arr = [234, 43, 55, 63,  5, 6, 235, 547];

console.log(bubblesort(arr));

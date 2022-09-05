function insertion(arr){
for (let i = 1; i < arr.length; i++) {
    for (let j = i; j>=0;j--) {
        console.log(i,j)
        if(arr[j]<arr[j-1])
        {
        const temp = arr[j]; 
        arr[j] = arr[j-1];
        arr[j-1]= temp;
    }
}
}

    return arr;
}
let arr = [2,1,9,76,4];
console.log(insertion(arr));
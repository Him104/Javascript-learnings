function linearSearch(arr, key){
    for (let i=0;i<arr.length;i++) {
        if (arr[i]===key){
        
        return i;
        }
}
return null
}

let arr = [1,5,8,0,2,3,6,7,9];

console.log(linearSearch(arr, 7));
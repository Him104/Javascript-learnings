function select(arr){
    if(arr.length==0){
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        let low = i;
    for (let j = i+1; j < arr.length; j++) {
        console.log(i,j);

        if (arr[low]>arr[j]) 
        {
       low = j;       
     
    }
}
    
    let temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp;
        
    }
    return arr;

}

let arr = [8,1,4,7,2];

console.log(select(arr));

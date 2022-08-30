// Write a program to return true if 2nd array is squared of 1st array :- 


function same (array1, array2)
{
if(array1.length !== array2.length){
    return false;
}
for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i]**2)
    if(correctIndex === -1){
        return false;
    }
    // array2.splice(correctIndex,1)
}
return true;
}

let array1 = [1,2,3];

let array2 = [1,4,9];

console.log(same (array1, array2));
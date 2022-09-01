//write a function to determine if the second string is an anagram of the first :-

function validAnagram(string1,string2){
    if(string1.length !== string2.length){
        return false;
    }
   let letter1 = string1.split('').sort().join('');
   let letter2 = string2.split('').sort().join('');

   console.log(letter1)
   console.log(letter2)

   if(letter1 === letter2)
   {
    return true;
   }
   else{
    return false;
   }

}

let string1 = "himanshu";

let string2 = "ihuhnmas";

console.log(validAnagram(string1,string2));
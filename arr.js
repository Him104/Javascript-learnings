function fizzBizz(n) {

let  output = [];


for (let index = 0; index <=n; index++) {

    if (index % 3 === 0 && index % 5 ===0 ) {

        output.push("fizzBizz");
        
    }
    else if (index % 3 ===0) {
        output.push("Fizz");
    }
    else if (index % 5 === 0){
        output.push("Bizz");
    }
    else {
        output.push(index);
    }
    
}

return output;

}

let result = fizzBizz(100);

console.log(result);

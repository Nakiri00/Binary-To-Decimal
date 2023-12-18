// let binary = [1,0,1,1,0,1,0,0];
// let binary2 = new Array();
// let decimal=0;
let decimal2 = 0; 
let temp=0;

let binary = prompt('Input the binary code : ');
if(binary == ''){
    binary =0;
}
// let DigitBinary = prompt("Enter the total digit of binary code : ");
for(let l = 0; l<=binary.length - 1 ;l++){
//     binary2[l] = prompt(l+1 +" : ");
    while(binary[l] > 1 || isNaN(binary[l])){
        alert("Please input a binary code correctly");
        binary = prompt('Input the binary code : ');
    }
}


let i = 0;
let j = (binary.length)-1;
while(i <= j){
    for(let k = 0; k <= j-i; k++){
        temp = 2**k;
    }
    // decimal += binary[i] * temp;
    decimal2 += binary[i] * temp;
    i++;
}
// console.log("Static Input");
// console.log("Decimal Code of ["+ binary.toString()+ "] : " +decimal);
// console.log("");
console.log("Dynamic Input");
console.log("Decimal Code of "+ binary + " : " +decimal2);

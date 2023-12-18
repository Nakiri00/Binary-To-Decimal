// let binary = [1,0,1,1,0,1,0,0];
// let binary2 = new Array();
// let decimal=0;
let decimal2 = 0; 
let temp=0;

let num = 0;
num = prompt('Input the binary code : ');
let binary2 = [...num];
// let DigitBinary = prompt("Enter the total digit of binary code : ");
for(let l = 0; l<=binary2.length - 1 ;l++){
//     binary2[l] = prompt(l+1 +" : ");
    while(binary2[l] > 1 || isNaN(binary2[l])){
        alert("Please input a binary code correctly");
        num = prompt('Input the binary code : ');
        binary2 = [...num];
    }
}


let i = 0;
let j = (binary2.length)-1;
while(i <= j){
    for(let k = 0; k <= j-i; k++){
        temp = 2**k;
    }
    // decimal += binary[i] * temp;
    decimal2 += binary2[i] * temp;
    i++;
}
// console.log("Static Input");
// console.log("Decimal Code of ["+ binary.toString()+ "] : " +decimal);
// console.log("");
console.log("Dynamic Input");
console.log("Decimal Code of "+ binary2.join("")+ " : " +decimal2);

let binary = [1,0,1,1,0,1,0,0];
let binary2 = new Array();
let decimal=0;
let decimal2 = 0; 
let temp=0;

let DigitBinary = 8;
for(let l = 0; l<=DigitBinary - 1 ;l++){
    binary2[l] = prompt(l+1 +" : ");
    while(binary2[l] > 1 || binary2[l] < 0 || binary2[l].length < 1 || binary2[l].length > 1){
        alert("Please input a binary code correctly");
        binary2[l] = prompt(l+1 + " : ");
    }
}

let i = 0;
let j = (binary.length)-1;
while(i <= j){
    for(let k = 0; k <= j-i; k++){
        temp = 2**k;
    }
    decimal += binary[i] * temp;
    decimal2 += binary2[i] * temp;
    i++;
}
console.log("Static Input");
console.log("Decimal Code of ["+ binary.toString()+ "] : " +decimal);
console.log("");
console.log("Dynamic Input");
console.log("Decimal Code of ["+ binary2.toString()+ "] : " +decimal2);

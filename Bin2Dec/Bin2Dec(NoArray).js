let decimal = 0; 
let temp=0;

let binary = prompt('Input the binary code : ');
if(binary == ''){
    binary =0;
}
for(let l = 0; l<=binary.length - 1 ;l++){
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
    decimal += binary[i] * temp;
    i++;
}
console.log("Dynamic Input");
console.log("Decimal Code of "+ binary + " : " +decimal);

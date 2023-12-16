package binarytodecimal;
import java.util.Arrays;
import java.util.Scanner;
//import java.math.*;


public class Bin2Dec {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // int[] binary = {1,0,1,1,0,1,0,0};
        int digitBinary;
        System.out.println("Dynamic Input");
        System.out.print("Enter the total digit of binary code : ");
        digitBinary = in.nextInt();
        int[] binary2 = new int[digitBinary];
        System.out.println("Enter the Binary code");
        for(int l = 0; l < digitBinary ; l++){
            System.out.print(l+1 +" : ");binary2[l] = in.nextInt();
            while(binary2[l] > 1 || binary2[l] < 0){
               System.out.println("It has to be a binary code, try again");
               System.out.print(l+1 +" : ");binary2[l] = in.nextInt();
            }
        }
        // int decimal = 0;
        int decimal2 = 0;
        int temp = 0;   
        int i = 0;
        int j = binary2.length - 1;
        while(i <= j){    
            for(int k = 0;k<=j-i;k++){
                temp = (int) Math.pow(2, k);        
            }
            // decimal += binary[i] * temp;
            decimal2 += binary2[i] *temp;
            i++;
        }
        System.out.println("Binary Code  : " +Arrays.toString(binary2));
        System.out.println("Decimal Code : " + decimal2);
        System.out.println("");
        // System.out.println("Static Input");
        // System.out.println("Binary Code  : "+Arrays.toString(binary));
        // System.out.println("Decimal Code : " + decimal);
        // System.out.println("");
    }
    
}

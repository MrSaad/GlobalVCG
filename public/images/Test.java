import java.util.*;

public class Test{

  public static void main(String[] args){
    System.out.println(hasOddOnes(3));
  }
  
  public static boolean hasOddOnes(int num){
    int dividend = num; 
    int binary = 0; 
    int quotient; 
    int shift = 0; 
    int countOnes = 0; 
    while (dividend > 1){
      if (dividend % 2){
        countOnes +=1;
      }
      quotient = (dividend % 2)* pow(10,shift);
      dividend = dividend/2; 
      shift+=1; 
      binary += quotient; 
    }  
    if (countOnes % 2 != 0){
      return true; 
    }
    return false;
  } 
}
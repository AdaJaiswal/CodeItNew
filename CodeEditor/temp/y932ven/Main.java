import java.util.Scanner;  
class Main  
{  
public static void main(String args[])  
{  
int x, y, sum;  
Scanner sc = new Scanner(System.in);  
x = sc.nextInt();  
y = sc.nextInt();  
sum = sum(x, y);  
System.out.println("The sum of two numbers x and y is: " + sum);  
}  
//method that calculates the sum  
public static int sum(int a, int b)  
{  
int sum = a + b;  
return sum;  
}  
}  
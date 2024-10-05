import java.util.Scanner;

public class exercise2 {
    public static void main(String[]args){


        Scanner scan = new Scanner(System.in);
        System.out.println("Bir sayı giriniz:");
        int a = scan.nextInt();
        // nextInt sadece integer değerleri alır
        System.out.println("A değişkeninin değeri " + a);
    }

}

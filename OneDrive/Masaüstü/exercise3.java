import java.util.Locale;
import java.util.Scanner;

public class exercise3 {
    public static void main(String[]args){

        Scanner scan=new Scanner(System.in);
        scan.useLocale(Locale.US);
        // ondalık sayı gösterimi ülkelere göre değişiklik göstermekte 3.14 3,14 gibi Amerikada 3.14

        System.out.println("Bir sayı giriniz");
        double a = scan.nextDouble();
        System.out.println("a değişkeninin değeri" + a);

        System.out.println("bir yazı giriniz:");
        String b = scan.nextLine();
        System.out.println("b değişkeninin değeri" + b);
    }
}

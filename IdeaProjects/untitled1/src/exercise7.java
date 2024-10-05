import java.util.Scanner;
public class exercise7 {
    public static void main(String[]args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Bir sayı giriniz");
        int sayı = scan.nextInt();
        int faktoriyel = 1;

        while (sayı >= 1) {
            faktoriyel = faktoriyel * sayı;
            sayı--;
        }
        System.out.println("faktöriyel" + faktoriyel);
    }
}








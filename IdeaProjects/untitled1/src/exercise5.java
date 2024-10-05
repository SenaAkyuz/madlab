import java.util.Scanner;
public class exercise5 {
    public static void main(String[]args){
        /*
        Karşılaştırma Operatörleri
        a == b --> eşit mi? (eşitse true)
        a != b --> eşit değil mi (eşit değilse true)
        a>b  a<b  a<=b  a>=b
        if(koşul) {

        }
         */

        System.out.println("Sonuç:" + (4==4));
        System.out.println("Sonuç:" + (4!=4));
        System.out.println("Sonuç:" + (4!=5));

        Scanner scan= new Scanner(System.in);
        System.out.println("Lütfen notunuzu giriniz:");
        int note = scan.nextInt();

        if (note>90) {
            System.out.println("Dersten geçtiniz--AA");
        }

        else if (note>80) {
            System.out.println("Dersten geçtiniz---BA" );
        }
        else {
            System.out.println("Dersten kaldınız");
        }

    }
}

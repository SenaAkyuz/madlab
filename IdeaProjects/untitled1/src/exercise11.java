import java.util.Scanner;

public class exercise11 {
    public static void main(String[] args) {
        //Break ve Continue
        //Break döngüyü sona erdirir.
        //Continue Altındaki işlemleri yapmadan döngünün başına gider.

        while (true) {

            Scanner scan = new Scanner(System.in);
            String s;
            System.out.println("Bir karakter giriniz:");
            s = scan.nextLine();
            if (s.equals("q")) {
                System.out.println("Sistemden çıkış yapılıyor...");
                break;
            }
            System.out.println("Karakter" + s);


        }
    }
}
/* public static void main(String[]args){

        int i = 0;
        while (i<10){
            if (i==4 || i==7){
                i++;
                continue;
            }
            System.out.println("i:"+i);
            i++;
        }
    }

 */

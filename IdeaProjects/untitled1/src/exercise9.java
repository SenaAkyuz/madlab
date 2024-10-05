import java.util.Scanner;
public class exercise9 {
    public static void main(String[]args) {
        Scanner scan = new Scanner(System.in);
        int sayı = scan.nextInt();
        int toplam = 0;
        do {
            //1234 sayısının rakamlarını toplamak istersek
            toplam += sayı % 10;
            sayı = sayı / 10;

            System.out.println("toplam" + toplam + "sayı" + sayı);
        }
        while (sayı>0);

    }
}

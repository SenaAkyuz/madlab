import java.util.Scanner;
public class exercise8 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int sayi = scan.nextInt();
        int bakiye = 1000;
        int islem;

        System.out.println("1:Bakiye Görüntüleme");
        System.out.println("2:para yatırma");
        System.out.println("3:para çekme");
        System.out.println("4:Sistemden Çıkış");
        islem = scan.nextInt();

        switch (islem) {
            case 1:
                System.out.println("BAKİYENİZ" + bakiye + "tl dir");
                break;
            case 2:
                System.out.println("Yatıracağınız tutarı giriniz:");
                int miktar = scan.nextInt();
                bakiye = bakiye + miktar;
                System.out.println("BAKİYENİZ" + bakiye + "TL DİR");
                break;
            case 3:
                System.out.println("Para Çekeceğiniz Tutarı Giriniz:");
                int tutar = scan.nextInt();
                bakiye = bakiye - tutar;
                System.out.println("BAKİYENİZ" + bakiye + "Tl dir");
                break;
            case 4:
                System.out.println("Sistemden Çıkış Yapılıyor...");
                break;
            default:
                System.out.println("GEÇERSİZ İŞLEM");
                break;

        }
    }
}
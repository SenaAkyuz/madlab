import java.util.Scanner;

/*
*FONKSİYONLAR
*Erişim_belirleyici(opsiyonel) Ekstra Özellikler Dönüş_Tipi Fonksiyon-adı(Parametreler){
*
*       //Burası fonksiyon bloğu
*       //fonksiyonun yapacağı işlemler burada olacak.
*      }
*
 */
public class exercise12 {
    public static void faktoriyel(){

        Scanner scan = new Scanner(System.in);
        System.out.println("sayı:");
        int sayı = scan.nextInt();
        int faktoriyel =1;
        while(sayı>=1){
            faktoriyel*=sayı;
            sayı--;
        }
        System.out.println("faktoriyel:"+faktoriyel);
    }
    public static void main(String[]args){
        faktoriyel(); //fonksiyon çağrısı
    }
}

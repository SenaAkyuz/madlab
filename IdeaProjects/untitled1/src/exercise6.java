import java.util.Scanner;
public class exercise6 {
    public static void main(String[]args){
        //Kullanıcı Adı Girişi
        String sys_kul_adı = "yazilimbilimi";
        String parola = "12345";
        Scanner scan =new Scanner(System.in);
        System.out.println("Kullanıcı Adı:");
        String kullanıcı_adı = scan.nextLine();
        System.out.println("Parola:");
        String kul_parola=scan.nextLine();

        if (!(sys_kul_adı.equals(kullanıcı_adı)) && !(parola.equals(kul_parola))) {
            System.out.println("Kullanıcı adı ve şifresini yanlış girdiniz.");
        }
        else if (!(sys_kul_adı.equals(kullanıcı_adı)) && (parola.equals(kul_parola))) {
            System.out.println("Kullanıcı adını yanlış girdiniz.");
        }
        else if ((sys_kul_adı.equals(kullanıcı_adı)) && !(parola.equals(kul_parola))) {
            System.out.println("Yanlış şifre");

        }
        else {
            System.out.println("HOŞGELDİNİZ");
        }




    }



}

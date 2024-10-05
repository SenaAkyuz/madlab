/*
String Sınıfı ve Metodlar
 */
public class exercise22 {
    public static void main(String[] args){
        String s1= "Mustafa";
        /*
        String s3="Mustafa" dersem s1 ve s3 aynı objeyi gösterir s1==s3 doğru cıkar.ikisi aynı
        objeyi gösterir
         */
        /*
         String s3= new String("Mustafa"); dersem s3 ve s2 iki farklı obje olur fakat içeriği aynı olur
         s2==s3 yanlıs olur fakat s2.equals(s3) doğru olur(çünkü içeriği aynı)
         */
        String s2= new String("Mustafa");

        System.out.println(s2.length());

        System.out.println("0.indeks:" + s2.charAt(0));
        System.out.println("5.indeks:" + s2.charAt(5));
        System.out.println("5.indeks:" + s2.charAt(s2.length()-1));
        System.out.println(s2.startsWith("Mu"));
        System.out.println(s2.endsWith("fa"));


    }

}

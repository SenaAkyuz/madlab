public class exercise4 {
    public static void main(String[]args){
        //Aritmetik Operatörler + - * / %

        int x = 10;
        int y = 4;

        System.out.println("Sonuç" + (x/y));
        System.out.println("Sonuç" + (double)(x/y));
        System.out.println("Sonuç" + ((double)x/y));

        //Atama,Artırma ve Azaltma Operatörleri

        int a = 10;
        a = a+3; // a+=3 kısa yolu
        //a++ ve ++a ;  a+=1 demek
        System.out.println("a nın değeri:" + a);
        System.out.println("a nın değeri:" + a--); // -- ler bi sonraki komutta devreye girecek
        System.out.println("a nın değeri:" + a); // değer 12 oldu
        System.out.println("a nın değeri:" + --a);




    }
}

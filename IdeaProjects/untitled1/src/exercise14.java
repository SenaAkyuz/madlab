public class exercise14 {
    public static int toplama(int a,int b,int c){ //void yerine a b c sayı olduğu için ve dış dünyaya değer aktarmak istediğimiz için int yazdık
                                                    //void dışarıya bi değer döndürmeyen gösterimler için kullanılır.
        return(a+b+c);
    }
    public static void main(String[]args){
        System.out.println("Fonksiyondan dönen değer"+ toplama(3,4,5));
    }
}
/*
    public static int ucilecarp(int a){
    return a*3;
    }
    public static int ikitopla(int b){
    return b+2;
    }
    public static int dortcıkar(int c){
    return c-4;
    }
    public static void main(String[]args){
    System.out.println("sonuç=" + dortcıkar(ikitopla(ucilecarp(4)));
    }
 */
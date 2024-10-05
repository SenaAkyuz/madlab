//metod overloading
public class exercise15 {
    public static void toplama(int a,int b,int c){
        System.out.println("TOPLAMLARI="+(a+b+c));
    }

    public static void toplama(int a,int b,int c,int d) {
        System.out.println("TOPLAMLARI=" + (a + b + c));
    }
    public static void toplama(int a,int b) {
        System.out.println("TOPLAMLARI=" + (a + b));

    }
    public static void main(String[]args){
        toplama(40,50,60);
        toplama(3,4);
        toplama(7,8,9,10);

    }

}


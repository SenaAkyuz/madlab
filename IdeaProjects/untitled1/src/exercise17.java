public class exercise17 {
    public static void main(String[] args){
        Car2 car4=new Car2("Gümüş","Renault Megane",1.6,4);
        car4.showInfos();

        Car2 car5=car4;
        car5.showInfos();
    }
    /*
    String s1 = new String("Mustafa");
    String s2 = new String("Mustafa);

    s1==s2 doğru değildir çünkü referanslar kıyaslanıyor içerisindeki değer değil
    s1.equals(s2) eşittir içeriyi kıyaslar
     */



}

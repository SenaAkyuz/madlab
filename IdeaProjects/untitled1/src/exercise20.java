import java.util.ArrayList;

/*
ARRAYLİSTLER
 */
public class exercise20 {
    public static void main(String[] args) {

        ArrayList<String> groups = new ArrayList<String>();
        groups.add("Metallica");
        groups.add("Iron Maiden");
        groups.add("Guns' n Roses");
        groups.add("Black Sabbath");

        System.out.println("0.indeks:" + groups.get(0));
        System.out.println("2.indeks:" + groups.get(2));
        System.out.println("3.indeks:" + groups.get(3));
        System.out.println("Arraylist in uzunluğu:" + groups.size());
         /*
        ARRAYLİST ten bir elemanı çıkarmak için
         */
        groups.remove("Iron Maiden");
        groups.remove(0);
        System.out.println(groups.indexOf("Black Sabbath")); //değerin kaçıncı indexte olduğunu gösterir

        for (int i = 0; i< groups.size();i++){
            System.out.println("ELEMAN:" + groups.get(i));


        }

    }
}

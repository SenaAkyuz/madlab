import java.util.ArrayList;

/*
FOR EACH DÖNGÜSÜ
 */
public class exercise21 {
    public static void main(String[] args){
        ArrayList<String> groups = new ArrayList<String>();
        int[] arr = {10,20,30,40,50};
        groups.add("metallica");
        groups.add("ıron maiden");
        groups.add("guns roses");
        groups.add("black sabbath");
        /*
          for (int i = 0; i< groups.size();i++){
            System.out.println("ELEMAN:" + groups.get(i));
            kısa gösterimi
                |
                |
                v
         */
        for(String s:groups){
            System.out.println("Eleman:"+ s);

        }
        for(int i:arr){
            System.out.println("eleman:" + i);
        }
    }

}

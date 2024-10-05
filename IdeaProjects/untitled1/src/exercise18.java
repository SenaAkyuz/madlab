import java.util.Scanner;
/*
arrayler ve özellikleri
 */
public class exercise18 {
    public static void mean(int[] arr){
        int total = 0;
        for (int i = 0; i<arr.length;i++){
            total += arr[i];
        }
        System.out.println("oRTALAMA:" + total / arr.length);
    }
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int [] arr1 = {10,20,30,40,50};
        /*int[] arr2 = new int[5];
        arr2[0] = 1;
        arr2[1] = 2;
        arr2[2] = 3;
        arr2[3] = 4;
        arr2[4] = 5;

        System.out.println("Array 2 'nin Birinci Elemanı:" + arr2[0]);
        System.out.println("Array 1 'in İkinci Elemanı:" + arr1[1]);
        */
        /*
        for (int i = 0; i < arr1.length; i++){
        System.out.println("Eleman:" + arr1[i]);
         }
         */
        int[] arr2 = new int[5];
        System.out.println("Array2 nin değerlerini giriniz...");
        for (int i =0; i<arr2.length; i++){
            arr2[i]= scanner.nextInt();
        }
        for (int i = 0; i < arr2.length; i++) {
            System.out.println("Eleman:" + arr2[i]);


        }


        mean(arr2);
    }
}

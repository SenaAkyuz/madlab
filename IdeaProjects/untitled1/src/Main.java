public class Main {
    public static void main(String[] args){
        Car car1=new Car(); //car1 bizim referansımız

        car1.color="Gümüş";
        car1.model="Renault Megane";
        car1.engine=1.6;
        car1.doors=4;
        System.out.println("Arabanın rengi:"+ car1.color);
        System.out.println("Arabanın modeli:"+ car1.model);
        System.out.println("Arabanın motoru:"+ car1.engine);
        System.out.println("Arabanın kapı sayısı:"+ car1.doors);

    }

}
/*
car1.setColor("gümüş");
car1.setModel("renault megane");
car1.setEngine(1.6);
car1.setDoors(4);
System.out.println("Arabanın rengi"+car1.getColor()));
System.out.println("Arabanın modeli"+car1.getModel()));
System.out.println("Arabanın motoru"+car1.getEngine()));


 */
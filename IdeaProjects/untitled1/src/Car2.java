public class Car2 {
    private String color;
    private String model;
    private double engine;
    private int doors;

    public Car2(String color, String model,double engine,int doors){
        this.color=color;
        this.model=model;
        this.engine=engine;
        this.doors=doors;

    }
    /*
    public Car(){
    this.color="bilgi yok";
    this.model="bilgi yok";
    this.engine=0;
    this.doors=0;
    tüm bunların yerine kısaca ---->
    this("bilgi yok","bilgi yok",0,0);
     */
    public void setColor(String color){
        this.color=color;
    }
    public String getColor() {
        return this.color;
    }
    public String getModel(){
        return model;
    }
    public void setModel(String model){
        this.model=model;
    }
    public double getEngine(){
        return engine;
    }
    public void setEngine(double engine){
        this.engine=engine;
    }
    public int getDoors(){
        return doors;
    }
    public void setDoors(int doors){
        if (doors==2 || doors==4){
            this.doors=doors;
        }
        else{
            System.out.println("kapı sayısı sadece 2 veya 4 olabilir");
        }
    }
    public void start(){
        System.out.println("araba çalıştı...");
    }
    public void stop(){
        System.out.println("araba durdu");
    }
    public void showInfos(){
        System.out.println("ARABANIN RENGİ" + this.color);
        System.out.println("ARABANIN MODELİ" + this.model);
        System.out.println("ARABANIN MOTOR HACMİ" + this.engine);
        System.out.println("ARABANIN KAPI SAYISI" + this.doors);

    }
    }

abstract class Padre{
    abstract comunicar():void;
   }
   class Hijo extends Padre{
    comunicar():void{
    console.log("Comunicar en hijo")
    }
   }
   class Hija extends Padre{
    comunicar():void{
    console.log("Comunicar en hija");
    }
   }
   let hijo:Hijo=new Hijo();
   let hija:Hija=new Hija();
   hijo.comunicar();//Nada en hijo
   hija.comunicar();//Nada en hija
class Animal {
andar (){
   console.log("O animou andou");

}
}

class Cachorro extends Animal {
   nome: string;
   constructor (nome: string) {
      super ();
      this.nome = nome;

   }
      latir () {
         console.log ("AU AU AU");
      }


}
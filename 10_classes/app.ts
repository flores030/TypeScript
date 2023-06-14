class Carro {
   marca: string;
   aro: number;
   constructor (marca: string, aro: number){
      this.marca = marca;
      this.aro = aro;
   }

   verificarAro () {
      return `O aro do carrro é: ${this.aro}`;
   }
}

let ferrari = new Carro ("Ferrari", 20)
console.log (ferrari);
interface config {
   nome?: string;
   idade?: number;

}



function criarPessoa (config: config): {nome: string; idade: number} {
let pessoa = {nome: "Não informado", idade: 0}

if (config.nome) {
   pessoa.nome = config.nome;
}

if (config.idade) {
   pessoa.idade = config.idade;

}

return pessoa;



}

let joao = criarPessoa ({nome: "João"});

console.log (joao);
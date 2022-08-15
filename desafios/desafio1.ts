
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
let funcionario = {
    code: 10,
    name: "Vanilson"
};

let funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Joao'
}
interface Funcionario{
    codigo: number,
    nome: string
}

let funcionario3: Funcionario = {
    codigo: 200,
    nome: 'Jose'
}


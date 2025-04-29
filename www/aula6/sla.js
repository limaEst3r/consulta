class Carro {
    marca;
    modelo;
    ano;

    ligar() {
        console.log("O carro está ligado.");
    }
}

// Criando objeto (instância)
var carro1 = new Carro()
var carro2 = new Carro()
var carro3 = new Carro()

carro1.marca = "Chevrolet"
carro2.marca = "Fiat"
carro3.marca = "gol"

carro1.modelo = "popular"
carro2.modelo = "caminhonete"
carro3.modelo = "conversivel"

carro1.ano = 2015
carro2.ano = 2007
carro3.ano = 2021


console.log(carro1.marca, carro1.modelo, carro1.ano)
console.log(carro2.marca, carro2.modelo, carro2.ano)
console.log(carro3.marca, carro3.modelo, carro3.ano)













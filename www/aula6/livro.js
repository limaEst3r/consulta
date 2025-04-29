class Livro {
    titulo;
    autor;

    falar(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
        console.log("O titulo do livro é " + this.titulo)
        console.log("Nome do autor " + this.autor )
    }
}

// Criando objeto (instância)
var livro1 = new Livro()
var livro2 = new Livro()
var livro3 = new Livro()

livro1.titulo = "È assim"
livro2.titulo = "Sempre foi"
livro3.titulo = "Não é assim"

livro1.autor = "Zé Felipe"
livro2.autor = "Gustavo"
livro3.autor = "Cleiton"

console.log(livro1.titulo,"-" ,livro1.autor)
console.log(livro2.titulo,"-" , livro2.autor)
console.log(livro3.titulo,"-", livro3.autor)
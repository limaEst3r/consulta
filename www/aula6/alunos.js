class Aluno{
    idade;
    curso;
    nome;

    exibirInfo(nome,idade,curso){
        this.nome = nome
        this.idade = idade
        this.curso = curso

        console.log("Nome: " + this.nome)
        console.log("Idade: " + this.idade)
        console.log("Curso: " + this.curso)
    }
}

var aluno1 = new Aluno()
var aluno2 = new Aluno()
var aluno3 = new Aluno()

aluno1.exibirInfo("Vitor Hugo",26, "Sistemas de Informação")
aluno2.exibirInfo("Gustavo", 22, "Engenharia de Civil")
aluno3.exibirInfo("Maria", 21, "Psicologia")
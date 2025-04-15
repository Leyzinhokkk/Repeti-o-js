const prompt = require('prompt-sync')();

const numAlunos = parseInt(prompt("Digite o número de estudantes na turma: "));

let somaNotas = 0;
let maiorNota = -Infinity;
let menorNota = Infinity;

for (let i = 1; i <= numAlunos; i++) {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i}: `));

    somaNotas += nota;

    if (nota > maiorNota) {
        maiorNota = nota;
    }

    if (nota < menorNota) {
        menorNota = nota;
    }
}

const media = somaNotas / numAlunos;

console.log(`\nMédia da turma: ${media.toFixed(2)}`);
console.log(`Maior nota: ${maiorNota}`);
console.log(`Menor nota: ${menorNota}`);

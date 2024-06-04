function adicionarAluno() {
    var matricula = document.getElementById('matricula').value;
    var nome = document.getElementById('nome').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    if (!matricula || !nome || isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var media = (nota1 + nota2) / 2;
    var status = media >= 5 ? 'Aprovado' : 'Reprovado';
    adicionarLinhaTabela(matricula, nome, nota1, nota2, media.toFixed(2), status);
    document.getElementById('formNotas').reset();
}

function adicionarLinhaTabela(matricula, nome, nota1, nota2, media, status) {
    var tabela = document.getElementById('tabelaNotas').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).innerHTML = matricula;
    novaLinha.insertCell(1).innerHTML = nome;
    novaLinha.insertCell(2).innerHTML = nota1.toFixed(2);
    novaLinha.insertCell(3).innerHTML = nota2.toFixed(2);
    novaLinha.insertCell(4).innerHTML = media;
    novaLinha.insertCell(5).innerHTML = status;
}

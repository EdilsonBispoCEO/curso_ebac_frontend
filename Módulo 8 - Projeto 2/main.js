const form = document.getElementById('form-agenda');
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
    

});

function adicionaLinha() {
    const inputNumero = document.getElementById('nome');
    const inputNome = document.getElementById('numero');

    if (numeros.includes(inputNumero.value)) {
        alert(`O numero ${inputNumero.value} já foi inserida.`);
    } else {
    numeros.push(inputNumero.value) 

    numeros.push(parseFloat(inputNome.value));
    let linha = '<tr>';
    linha += `<td>${inputNumero.value}</td>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += '</tr>';

    linhas += linha;


    inputNome.value = '';
    inputNumero.value = '';

     }

}    


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

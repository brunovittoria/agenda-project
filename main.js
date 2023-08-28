const form = document.getElementById('form-agenda')
let linhas = ''
const nomes = []
const numbers = []

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha(){
    const inputNome = document.getElementById('user-nome')
    const inputNumero = document.getElementById('user-numero')

    if (nomes.includes(inputNome.value)) {
        alert(`O usuario: ${inputNome.value} ja foi inserido`)
    } else{
        nomes.push(inputNome.value)
        numbers.push(inputNumero.value)
    
        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += `</tr>`
    
        linhas += linha
    }

    inputNome.value = ''
    inputNumero.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}
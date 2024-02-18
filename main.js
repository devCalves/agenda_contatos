const form = document.getElementById('add-contact')
let linhas = ''
let topos = ''
const inputNome = document.getElementById('contact-name')
const inputTel = document.getElementById('contact-number')
const msgSucesso = `<p class="sucess-msg">Novo contato adicionado com sucesso</p>`



form.addEventListener('submit', function(e){
    e.preventDefault()
    
    adicionaTopo()
    adicionaLinha()
    atualizaTabela()
    inputNome.value = ''
    inputTel.value = ''
    
})

function adicionaTopo() {
    
    
    let topo = `<tr>`
    topo += `<th id="name">Nome</th>`
    topo += `<th id="tel">Telefone</th>`
    topo += `</tr>`
    

    topos += topo

}

function adicionaLinha() {
    
    
    let linha = `<tr>`
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTel.value}</td>`
    linha += `</tr>`
    

    linhas += linha

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    const topoTabela = document.querySelector('thead')
    const paragrafoSucess = document.querySelector('p')
    corpoTabela.innerHTML = linhas
    topoTabela.innerHTML = topos
    paragrafoSucess.innerHTML = msgSucesso
    
}
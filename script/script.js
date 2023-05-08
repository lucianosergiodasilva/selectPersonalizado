const conteudoSelect = document.querySelector('.conteudoSelect')
const containerInput = document.querySelector('.conteudoSelect .containerInput')
const options = document.getElementById('options')
const itens = document.querySelectorAll('.option')
const iconSeta = document.querySelector('#iconSetaDown')

// Mostra e esconde as opções
conteudoSelect.addEventListener('click', (e) => {
    // Mostra estado ativo do select com a setinha 
    conteudoSelect.classList.toggle('ativo')
    // Mostra as opções
    options.classList.toggle('ativo')
    // Mostra as setas para baixo e para cima
    iconSeta.classList.toggle('fa-angle-down')
    iconSeta.classList.toggle('fa-angle-up')
})

// Esconde as opções quando clica fora
document.addEventListener('click', (e) => {
    if (e.target.className === '') {
        conteudoSelect.classList.toggle('ativo')
        options.classList.toggle('ativo')
        iconSeta.classList.toggle('fa-angle-down')
        iconSeta.classList.toggle('fa-angle-up')
    }
})

// Percorre as opções
itens.forEach(item => {
    item.addEventListener('click', (e) => {
        // Previne não recarregar a página
        e.preventDefault()
        // Pega e mostra o que foi selecionado
        containerInput.innerHTML = e.currentTarget.innerHTML
        // Remove o estado ativo do select com a setinha
        conteudoSelect.classList.toggle('ativo')
        // Remove as opções
        options.classList.toggle('ativo')
        // Mostra as setas para baixo e para cima
        iconSeta.classList.toggle('fa-angle-down')
        iconSeta.classList.toggle('fa-angle-up')
    })
})
const campo = document.getElementById("campoUsuario")
const btn = document.getElementById("btnBuscar")
const resultado = document.getElementById("resultado")
let image = document.getElementById("foto")
let username = document.getElementById("nome")
let repositorio = document.getElementById("repos")

btn.addEventListener("click", () => {
  buscarUsuario(campo.value)
})




async function buscarUsuario(nome) {
    
    const resposta = await fetch(`https://api.github.com/users/${nome}`)
                
    if(resposta.ok){
            const dados = await resposta.json()
           
            username.textContent = dados.name
            username.style.marginTop = '10px'
            repositorio.textContent = dados.public_repos
            image.src = dados.avatar_url
            image.style.marginTop = '10px'


    } else {

        resultado.textContent = ""
        alert(`[ERRO]USER NAO ENCONTRADO`)


    }


}


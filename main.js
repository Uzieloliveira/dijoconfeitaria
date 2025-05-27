function carregar(){
    const divCard = document.querySelector(".cardBox")
    
    fetch("./dados.json").then((response) => {
        response.json().then((dados) => {
            dados.map((dado) => {
                        divCard.innerHTML += `<div class="card">
                        <img src="${dado.end_Img}" alt="">
                        <div class="conteudoCard">
                            <p>${dado.descricao}</p>
                            <button> ver mais detalhes></button>
                        </div>
                        </div>`
            })
        })
    })
}

function mostrarLoading(){
    document.querySelector(".loading-screen").style.display = "flex";
}

function esconderLoading(){
      document.querySelector(".loading-screen").style.display = "none";
       pesquisa();
}

function limpar(){
 
    document.querySelector(".cardBox").innerHTML = `<div class='loading-screen'>
                <div class='spinner'></div>
                <p>Carregando...</p>
            </div>`

    mostrarLoading();
    
    setTimeout(()=>{
        esconderLoading();
    }, 2000);

}

function pesquisa(){
    
    const divCard = document.querySelector(".cardBox")
    const pesquisa = document.querySelector("#search").value
    
    fetch("./dados.json").then((response) => {
        response.json().then((dados) => {
            dados.map((dado) => {
                  
                    if(dado.tipo == pesquisa){
                        divCard.innerHTML += `<div class="card">
                        <img src="${dado.end_Img}" alt="">
                        <div class="conteudoCard">
                            <p>${dado.descricao}</p>
                            <button> ver mais detalhes></button>
                        </div>
                        </div>`
                    }
            })
        })
    })
}

carregar();
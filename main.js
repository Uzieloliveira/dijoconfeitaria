

function getData(){
    
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
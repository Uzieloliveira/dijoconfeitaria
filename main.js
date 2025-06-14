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

function carregarMaisVendidos(){
    const divMaisVendas = document.querySelector(".boxVenda")

    fetch("./dados.json").then((response)=> {
        response.json().then((dados)=> {
            dados.map((dado) => {
                if(dado.vendas > 8){
                    divMaisVendas.innerHTML += `
                     <div class="cardMaisVendidos">
                <img src="${dado.end_Img}" alt="">
                <p>${dado.tipo}</p>
        </div>
                    `
                }
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

const input = document.getElementById('search');

input.addEventListener('input', () => {
  const valor = input.value;
  const palavras = valor.split(' ');
  palavras[0] = palavras[0].charAt(0).toUpperCase() + palavras[0].slice(1).toLowerCase();
  input.value = palavras.join(' ');
});

function pesquisa(){
  
    const pesquisa = document.querySelector("#search").value.toLowerCase();

    
    fetch("./dados.json").then((response) => {
        response.json().then((dados) => {
           const resultado = dados.filter((dado) => {
                return dado.tipo.toLowerCase().includes(pesquisa);
            })
                const divCard = document.querySelector(".cardBox")

                if (resultado.length > 0){
                    resultado.forEach((resultado) =>{
                        divCard.innerHTML += `<div class="card">
                            <img src="${resultado.end_Img}" alt="">
                                <div class="conteudoCard">
                                    <p>${resultado.descricao}</p>
                                    <button> ver mais detalhes></button>
                                </div>
                            </div>`
                    })
                } else {
                     divCard.innerHTML = `<p id="msgElse"><i class="fa-solid fa-circle-xmark"></i>Nenhum resultado encontrado</p>`;
                }
        })
    })
}

document.getElementById("search").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    limpar();
  }
});

carregar();
carregarMaisVendidos()

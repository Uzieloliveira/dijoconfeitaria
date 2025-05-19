

function print_Result(){
   const pesquisa = document.getElementById("search").value;

    fetch('dados.json')
  .then(response => response.json()) // Analisa o JSON
  .then(data => {
    // Extrai dados
    const titulo = data.titulo;
    const imagem = data.endereco_Img;
    const tipo = data.tipo
    // Imprime os dados
    console.log(data);
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));
};


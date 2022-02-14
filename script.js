let secaoVideosDestaque = document.querySelector(".secaoVideosDestaques_lista")
let secaoTodosVideos = document.querySelector(".secaoTodosVideos ul")
let listaReproducao = document.querySelector(".secaoAdicionarAFila_lista")

const listaVideos = [   

  { id: 0,
    titulo: "Conheça todo o universo da Kenzie Academy Brasil",
    visualizacoes: "2,7 mil",
    descricao: "descrição",
    thumbnail: "./img/thumb1.webp"
},

  {    
    id: 1,
    titulo: "Conheça todo o universo da Kenzie Academy Brasil",
    visualizacoes: "2,7 mil",
    descricao: "descrição",
    thumbnail: "./img/thumb2.webp"
  },

  {
    id: 2,
    titulo: "Conheça todo o universo da Kenzie Academy Brasil",
    visualizacoes: "2,7 mil",
    descricao: "descrição",
    thumbnail: "./img/thumb1.webp"
  },

  {
    id: 3,
    titulo: "Conheça todo o universo da Kenzie Academy Brasil",
    visualizacoes: "2,7 mil",
    descricao: "descrição",
    thumbnail: "./img/thumb2.webp"
  }

];


function listarVideos(secaoVideosDestaque){
  for(let i = 0; i < listaVideos.length; i = i + 1){
  
  let titulo        = listaVideos[i].titulo
  let visualizacoes = listaVideos[i].visualizacoes
  let descricao     = listaVideos[i].descricao
  let thumbnail     = listaVideos[i].thumbnail
    
    criarTemplate(secaoVideosDestaque, titulo, visualizacoes, descricao, thumbnail)
  }


}

listarVideos(secaoVideosDestaque)
listarVideos(secaoTodosVideos)

function criarTemplate(secaoVideosDestaque, titulo, visualizacoes, descricao, thumbnail){
    
    let li = document.createElement("li")
    li.innerHTML = `

    <figure>
        <img src="${thumbnail}" alt="{titulo}" />
    </figure>

    <div>
        <h3>${titulo}</h3>
        <span>${visualizacoes}</span>
        <p>${descricao}</p>
         <button class="buttonAdicionarAFila">ADICIONAR A FILA</button>
     </div>

 `
     
 secaoVideosDestaque.appendChild(li)
 
 

}

secaoVideosDestaque.addEventListener("click", adicionarAFila)

function adicionarAFila(event){
  const buttonName = event.target.tagName
  const button = event.target

  if(buttonName == "BUTTON"){
    const li = button.closest("li")

    const liCopy = li.cloneNode(true)
    listaReproducao.appendChild(liCopy)
    
    


  }
}

listaReproducao.addEventListener("click", removerdaFila)

function removerdaFila(event){
  
  const elemento = event.target
  const elementoName = event.target.tagName

  if(elementoName !== "LI"){ 
    elemento.closest("li").remove()



  }else{
    elemento.remove()
     }
  
}
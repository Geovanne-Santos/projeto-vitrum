// Criação de variáveis: 

var modal = document.getElementsByClassName('myModal');

var btn = document.getElementsByClassName('img-btn');

var span = document.getElementsByClassName('close');


// Essa função fará com que cada Elemento possua um atributo diferente

function setIndex(){

  for (i = 0; i < btn.length; i++){
    // Neste caso todos os Atributos terão um elemento data-index
    // Esse data-index é como um ID possui um valor diferente para cada um
    modal[i].setAttribute('data-index', i);
    btn[i].setAttribute('data-index', i);
    span[i].setAttribute('data-index', i);
  }

}

for (i = 0; i < btn.length; i++){

  btn[i].onclick = function() {

    // Essa função faz com que o quando clicar em cima da imagem, este criará uma variável 'elementIndex'
    // Essa variável pegará o atributo data-index
    // E mudará o display para block

    var elementIndex = this.getAttribute('data-index');
    modal[elementIndex].style.display = "block";

  }
  span[i].onclick = function() {

    // Caso ele clique no Spam, ele também pegará o atributo 'data-index' e o guardará na variável
    // Por fim mudará o display para none
    var elementIndex = this.getAttribute('data-index');
    modal[elementIndex].style.display = "none";
  }

}


window.onclick = function(event) {
  if (event.target == modal[i]) {
    var elementIndex = this.getAttribute('data-index');
    modal[elementIndex].style.display = "none";
  }
}

// Toda ve\ que for carregado a página, será executada a função setIndex
window.onload = function() {
    setIndex();
};

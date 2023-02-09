/*var alunos = ["Giovanni", "luiz", "Pedro", "Vanderlei", "joao victor", "joao","Maria Eduarda", "lucas"]
var idade = [20, 16, 18, 19, 24, 30 ,17]
*/



/*
var nome = "Giovanni"
var dia = "29"

var frase = (nome + " faltou no dia " + dia + " no curso de " +  cursoDePrograma.nome)

console.log(frase)


 var idade = prompt()

 if(idade >= 18){
    console.log(idade + ": maior de idade")
 }

 else{
    console.log(idade + ": menor de idade")
 }


 var nota = prompt()

 if(nota >= 60){
    console.log(nota + ": aprovado")
 }

 else{
    console.log(nota + ": reprovado")
 }


var peso = prompt("peso")
var altura = prompt("altura")
var imc = (peso / (altura*altura)).toFixed(1    )
 
  if (imc <= 18.5 ){
    console.log(imc + ": magreza")
  }

 else if (imc <= 24.9){
    console.log(imc + ": normal")
  }

  else if (imc <=29.9){
    console.log(imc + ": sobrepeso")
  }

  else if (imc <= 39.9){
    console.log(imc + ": obesidade")
  }

  else if (imc <=40){
    console.log(imc + ": obesidade grave")
}



const alunos = ["Giovanni", "luiz", "Pedro", "Vanderlei", "joao victor", "joao","Maria Eduarda", "lucas"]

alunos.forEach(nome => console.log(nome))
*/
/*
var cursos = [cursoDePrograma , cursoDeAdministracao , cursoEnfermagem ];

cursos.forEach(curso => console.log(curso.nome + ": " + curso.topicos));



console.log(cursos)



var titulo = document.getElementById("titulo");
titulo.style.backgroundColor = "green"
titulo.style.color = "black"
saibamais.style.backgroundColor = "green"
span.style.backgroundColor = "red"


var programacao = document.getElementById ("programacao")
programacao.innerHTML= "<h1>programacao</h1>"
*/


/*
var topicos = document.getElementById("topicos");
console.log(topicos)

var litopicos = document.createElement("li");
litopicos.innerText = "front-ednd" ;
console.log(litopicos)

topicos.appendChild(litopicos)

var listab = document.getElementById("listab");

var lilistab = document.createElement("li");
lilistab.innerHTML =  `<a href="https://www.mg.senac.br/Paginas/default.aspx">
<li >Site oficial</li>
</a>`

listab.appendChild(lilistab)


var fusca = {
  modelo: "Fuscao Preto",
  ano: 1978,
  motor: "motor da nasa",
}

var fiatUno ={
 modelo: "firma",
 ano: 2000,
 motor: "escada no teto"
}

var golQuadrado = {
  modelo: "Goleta quadrado",
  ano: "1000 anos antes de cristo",
  motor: "apezao bruto fuçado ate o talo quase ingatando voo"
}



var carros = [fiatUno, fusca, golQuadrado ]
*/


var cursoDePrograma = {
  nome: "Programador",
  descricao: "Para vocer quer esta interesado em fazer Programação",
  topicos: ["Tecnologia", "Design UI/UX", "Desenvolvimento Web"],
  imagem: "https://th.bing.com/th/id/OIP.5Sig-EnAv96MGJ29x0olPgHaE8?pid=ImgDet&rs=1"
}

var cursoDeAdministracao = {
  nome: "Administracao",
  descricao: "Para vocer que estar querendo apreder Marketing",
  topicos: ["Marketing", "Administracao", "Finanças e Contabilidade",],
  imagem: "img/administracao.jpg"
}

var cursoEnfermagem ={
  nome: "Enfermagem",
  descricao: "Para vocer entra na areia da medicina",
  topicos: ["Biosegurança", "Primeiros socorros", "Ministração de medicamentos"],
  imagem: "img/enfermagem.jpg"
}

var cursos = [ cursoDePrograma, cursoDeAdministracao, cursoEnfermagem ]

var ulCursos = document.getElementById("cursos-lista")


cursos.forEach(curso => {
  var licurso = document.createElement("li");
  var topicosElement = "";
  curso.topicos.forEach(topico => {
    topicosElement = topicosElement + `<li>${topico}</li>`
  })

  licurso.innerHTML = `<img src=${curso.imagem} alt="">
  <div class="cursos-descricao">
    <span></span>
     <h2 id="programacao">${curso.nome}</h2>
     <p>${curso.descricao} </p>
     <ul id="lista-topicos">
      ${topicosElement}
     </ul>
     <a href="#" class="saiba-mais">Saiba Mais</a>
  </div>`
  licurso.classList = "cursos-item"
  ulCursos.appendChild(licurso)
})
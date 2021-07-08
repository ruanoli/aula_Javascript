
//var frase ="Japão é o melhor time do mundo";

//console.log("Seu nome é: ", nome);

//.replace trocará Japão por Brasil 
//console.log(frase.replace("Japão", "Brasil"));

//.toUpperCase() deixa tudo em maúsculo.
//.toLowerCase() deixa tudo em minúsculo.

//ARRAY
//var lista = ["maçã", "banana", "laranja"];

//para selecionar alguma fruta especifica, basta colocar lista[indice da fruta].
//console.log(lista[1]); //exibirá banana, que é o índice 1.

//para adicionar um itém á lista.
//lista.push("uva");
//console.log(lista);
//console.log(lista[3]);

//mostra quantos elementos tenho na lista
//console.log(lista.length);

//inverte a ordem dos elementos na lista
//console.log(lista.reverse());

//transforma literalmente os elementos em string.
//console.log(lista.toString());

//Também transforma em string, porém separa elas da forma que queremos.
//pode ser separada com traço, vírgula, underline, espaço, etc.
//console.log(lista.join(" - "));

//Dicionário ou objeto Json

//var pessoa = {nome:"Ruan", nacionalidade:"brasileiro"};
//console.log(pessoa);
//Para acessar o que estiver dentro do objeto, ex: console.log(pessoa.nome);

//var frutas =[{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas[0].nome); //exibirá o índice zero que é o primeiro, e somente o nome que é maçã.

//Perguntar a idade do usuário, se for maior que 18 o comando será no console, se for menor, o comando será no alert.
/*
var idade = prompt("Qual a sua idade?");

if(idade >= 18){
    console.log("Você é maior de idade");
} else{
    alert("Você é menor de idade!");
}*/

//Estrutura de repetição while.
/*var count = 0;

while(count < 5){
    console.log(count);
    count = count +1 //ou count++;
}*/

//Estrutura de repetição for.
/*var count;

for(count =0; count <= 5; count ++){
    console.log(count);
}*/

//Datas
/*
var d = new Date();// mostra a data atual.
alert(d);
console.log(d.getHours()); //apenas horas.
console.log(d.getMonth()+1); //apenas o mês. add +1 pq se inicia do 0.
console.log(d.getDay()); //apenas o dia.*/

//Funções
//Função para somar números
/*function somar(n1, n2){
    return n1 + n2;
}
console.log(somar(5,10));

//função para dar um replace em uma frase.
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
console.log(setReplace("Eu gosto de gatos", "gatos", "cachorros"));// altera de gato para cachorro.*/

function clicou(){
    document.getElementById("agr").innerHTML = "Valeu por clicar."; //irá colocar a frase no id.
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/home")//redireciona pra outro site em uma nova guia.
    window.location.href ="https://web.digitalinnovation.one/home"; //redireciona para outro site na mesma guia.
}

function trocar(elemento){
    //document.getElementById("mouse").innerHTML = "Boa noite, rapaziada."; // muda de frase ao passar o mouse em cima.
    elemento.innerHTML = "Boa noite rapaziada"; // muda de frase ao passar o mouse em cima.
}

function voltar(elemento){
    elemento.innerHTML ="Olá, tudo bem?";
}

function coleta(elemento){
    console.log(elemento.value); //mostra o que o usuário escolheu.
}
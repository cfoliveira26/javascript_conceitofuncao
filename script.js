//1 - crie uma função que exiba uma mensagem no console
function Mensagem() {
    console.log("Exiba uma mensagem no console") }

    Mensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function MeuNome (nome) {
     console.log (`Meu nome é ${nome}`)
}

MeuNome (`Felipe`)

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function Infos (nome, idade, estilomusical) {
    console.log ( `Meu nome é ${nome}, tenho ${idade} anos de idade e gosto de escutar ${estilomusical} `)
}

Infos (`Felipe`,`31`,`pop` )

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function Gostos (filme, musica) { 
    console.log (`Meu filme favorito é ${filme} e minha música favorita é ${musica}`)
    
}

Gostos (`Kill Bill`, `Alive` )

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo (num) {
    return num*3
 }
 console.log (triplo (4) )

 //6 - crie uma função que  verifique se uma variável é true ou false

 let numero = 3
 function veracidadevalor ( ) {
    if (numero === 3) {
        return "verdadeiro"
        
    } else { return "falso"}
  }

console.log (veracidadevalor() )



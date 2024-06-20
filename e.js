// Ex. 01 - Variáveis
let nome = "João"
console.log (nome)

//Ex. 02 - Média
let a = 5, b = 10
soma = (a + b)/2
console.log (soma)

//Ex. 03 - Primeiro e segundo nome
let pnome = ("Josefa"), snome = (" Silva")
nome = pnome + snome
console.log (nome)

//Ex. 04 - Objeto
let pessoa = {nome: "Joanderson", idade: 67, endereço: "Rua 675", telefone: 40028922}
console.log (pessoa)

//Ex. 04 - Vetores
let frutas = ['maçã', 'banana', 'laranja']
frutas.push ("uva")
console.log (frutas)

//Ex. 05 - Acesso a vetor
let vetor = [1,2,3,4,5]
console.log (vetor[0])
console.log (vetor[4])

//Ex. 06 - Loop
let cores = ['vermelho','verde','azul']
for (let i = 0; i < cores.length; i++){
    console.log (cores[i])}

//Ex. 07 - Estrutura de condicional
let idade = 18 
if (idade >= 18) {
    console.log ("\nMaior de idade.")}
else {console.log ("\nMenor de idade.")}

//Ex. 08 - Estrutura com várias condições
let nota = 3
if (nota >= 7) {console.log ("\nAprovado")}
if (nota >= 5 && nota < 7) {console.log ("\nRecuperação")}
else {console.log("\nReprovado")}

//Ex. 09 - Switch
let dia = 3

switch (dia) {
    case 1:
        console.log ("\nDomingo")
        break
    case 2:
        console.log ("\nSegunda")
         break
    case 3:
         console.log ("\nTerça")
        break
    case 4:
         console.log ("\nQuarta")
         break
    case 5:
        console.log ("\nQuinta")
        break
    case 6:
        console.log ("\nSexta")
        break
    case 7:
        console.log ("\nSábado")
        break
    default:
}
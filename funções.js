function soma(n1, n2) {
    let soma = n1 + n2
    return soma
}

//console.log (soma(6,8))



let senhac = 'batatinhafrita123'

function compsenha(senhac, senha) {
    if (senha == senhac){
        console.log ('Senha correta, conectado')
    } else {
        console.log('Senha incorreta')
    }
}

//compsenha (senhac, 'batatinhafrita123')



function fatorial(n, fatorial) {
    for (i = 1; i <= n; i++) {
        fatorial *= i
} return (fatorial)
}

//console.log (fatorial(5,1))



function parimpar(n) {
    if (n%2 == 0) { console.log ('É par.')}
    else { console.log ('É ímpar.')}
}

parimpar (8)
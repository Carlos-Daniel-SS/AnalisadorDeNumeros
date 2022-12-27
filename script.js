let num = document.querySelector('#numero')
let lista_numeros = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function isnum(n) {

    if (Number(n) >= 1 && Number(n) <= 100){
        return true

    } else {
        return false

    }
}

function inLista(n,l) {

    if (l.indexOf(Number(n)) != -1){
        return true

    } else {
        return false

    }
}


function inserir() {
    if (isnum(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} inserido.`
        lista_numeros.append(item)
        res.innerHTML = ''

    } else {
        alert('[ERRO] valor inválido ou já encontrado.')

    }
    num.value = ''
    num.focus()
}

function relatorio() {
    if (valores.length == 0) {
        alert('Insira valores para gerar o relatório!')
    } else {
        let quantidade_numeros = valores.length
        let media_numeros = 0
        let maior_numero = valores[0]
        let menor_numero = valores[0]
        let soma = 0
        for (let i in valores) {
            soma += valores[i]

            if (valores[i] > maior_numero) {
                maior_numero = valores[i]
            }

            if (valores[i] < menor_numero) {
                menor_numero = valores[i]
            }
        }

        media_numeros = soma/quantidade_numeros
        res.innerHTML = `O total de números inseridos é ${quantidade_numeros}</br>
                         A média é ${media_numeros.toFixed(2)}</br>
                         A soma é ${soma}</br>
                         O maior número é o ${maior_numero}</br>
                         O menor número é o ${menor_numero}`
    }
}
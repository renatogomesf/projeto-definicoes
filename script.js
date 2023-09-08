
var num1 = document.getElementById('fnum1')
var num2 = document.getElementById('fnum2')
var res = document.getElementById('res')

var somatx = document.querySelector('.soma')
var subtrtx = document.querySelector('.subtracao')
var multtx = document.querySelector('.multiplicacao')
var divitx = document.querySelector('.divisao')

function somar() {
    if (num1.value.length == 0 || num2.value.length == 0){
        window.alert('Porfavor, preencha os campos.')

    } else {
        res.innerHTML = ''
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        let s = n1 + n2
    
        let p = document.createElement('p')
        p.innerText = `A soma entre ${n1} e ${n2} é igual a ${s}.`
        res.appendChild(p)
    
        somatx.style.display = 'block'
        subtrtx.style.display = 'none'
        multtx.style.display = 'none'
        divitx.style.display = 'none'
    }
}

function subtr() {
    if (num1.value.length == 0 || num2.value.length == 0){
        window.alert('Porfavor, preencha os campos.')

    } else {
        res.innerHTML = ''
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        let s = n1 - n2
        
        let p = document.createElement('p')
        p.innerText = `A subtração entre ${n1} e ${n2} é igual a ${s}.`
        res.appendChild(p)
    
        somatx.style.display = 'none'
        subtrtx.style.display = 'block'
        multtx.style.display = 'none'
        divitx.style.display = 'none'
    }
}

function mult() {
    if (num1.value.length == 0 || num2.value.length == 0){
        window.alert('Porfavor, preencha os campos.')

    } else {
        res.innerHTML = ''
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        let s = n1 * n2
    
        let p = document.createElement('p')
        p.innerText = `A multiplicação de ${n1} por ${n2} é igual a ${s}.`
        res.appendChild(p)
    
        somatx.style.display = 'none'
        subtrtx.style.display = 'none'
        multtx.style.display = 'block'
        divitx.style.display = 'none'
    }
}

function divi() {
    if (num1.value.length == 0 || num2.value.length == 0){
        window.alert('Porfavor, preencha os campos.')

    } else {
        res.innerHTML = ''
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        let s = n1 / n2
    
        let p = document.createElement('p')
        p.innerText = `A divisão de ${n1} por ${n2} é igual a ${s}.`
        res.appendChild(p)
        
        somatx.style.display = 'none'
        subtrtx.style.display = 'none'
        multtx.style.display = 'none'
        divitx.style.display = 'block'
    }
}

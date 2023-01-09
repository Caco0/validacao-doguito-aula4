import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {

    input.forEach(input => {
        if(input.dataset.tipo === 'preco'){
            SimpleMaskMoney.setMask(input, {
                afterFormat(e) { console.log('afterFormat', e); },
                allowNegative: false,
                beforeFormat(e) { console.log('beforeFormat', e); },
                negativeSignAfter: false,
                prefix: '',
                suffix: '',
                fixed: true,
                fractionDigits: 2,
                decimalSeparator: ',',
                thousandsSeparator: '.',
                cursor: 'move'
            })
        }
    })

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

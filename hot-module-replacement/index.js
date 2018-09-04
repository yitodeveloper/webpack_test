import './estilos.css'
import message from './message.js'

const $container = document.getElementById('container')

const element = document.createElement('p')

$container.appendChild(element)


const printMessage = () => {
    element.textContent = message()
}

if(module.hot){
    module.hot.accept('./message.js', () => {
        console.log('hemos cambiado')
        printMessage()
    })
}

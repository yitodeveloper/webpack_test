import '../css/estilos.css'
import prueba from './message'
import catJPG from '../images/cat.jpg'


let catImg = document.createElement("img")
catImg.setAttribute("src",catJPG)
catImg.setAttribute("width",200)
document.body.append(catImg)
document.write(prueba.prueba)
prueba.pruebaDelayed()

console.log("Hola a todo el mundo desde webpack")
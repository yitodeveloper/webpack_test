import '../css/estilos.css'
import prueba from './message'
import catJPG from '../images/cat.jpg'
import videoTest from '../videos/que-es-core.mp4'
import personas from './nombres.json'

console.log(personas)
let catImg = document.createElement("img")
catImg.setAttribute("src",catJPG)
catImg.setAttribute("width",200)
document.body.append(catImg)
document.write(prueba.prueba)
prueba.pruebaDelayed()

let videoRandom = document.createElement("video")
videoRandom.setAttribute("src",videoTest)
videoRandom.setAttribute("width",300)
videoRandom.setAttribute("autoplay",true)
videoRandom.setAttribute("muted",true)
videoRandom.setAttribute("controls",true)
document.body.append(videoRandom)


console.log("Hola a todo el mundo desde webpack")
import '../css/estilos.css'
import prueba from './message'
import catJPG from '../images/cat.jpg'
import videoTest from '../videos/que-es-core.mp4'
import webs from './webs.json'
import React from 'react'
import {render} from 'react-dom'
import Webs from './modules/webs'
import '../css/main.less'


const $button = document.getElementById('dynamic-import')

$button.addEventListener('click', async () => {
    const {default: alerta} = await import('./alerta.js')
    alerta()
})

console.log(webs)
render(<Webs data={webs} />, document.getElementById("container"))

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
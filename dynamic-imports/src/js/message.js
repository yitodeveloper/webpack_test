import renderToDOM from './render-to-dom'
import makeElement from './makeElement'

const litlePromesa = new Promise((resolve,reject) => {
    setTimeout(()=>{resolve("Muy bien hecho, las promesas de cumplen")},2000)
})


module.exports = {
    prueba: "Bienvenido a mi pagina web",
    pruebaDelayed: async () => {
        const m = await litlePromesa
        const element = makeElement(m)
        renderToDOM(element)
    }
}
let caja = document.getElementById("caja")

caja.innerHTML = "¡Hola mundo!"

let articulos = document.getElementsByTagName("article")

for (let i = 0; i < articulos.length; i++) {
    articulos[i].style.backgroundColor = "red"
    articulos[i].style.color = "white"
    articulos[i].style.padding = "10px"
    articulos[i].style.margin = "10px"
}
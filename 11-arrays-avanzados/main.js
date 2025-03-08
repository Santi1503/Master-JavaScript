let frameworks = ["Angular", "React", "Vue.js", "Astro"];

for (let i = 0; i < frameworks.length; i++) {
    console.log(frameworks[i]);
}

// Mostrar por pantalla
document.write("<ul>")
for (let i = 0; i < frameworks.length; i++) {
    document.write("<li>" +frameworks[i]+ "</li>")
}
document.write("</ul>")

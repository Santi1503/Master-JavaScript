let collapses = document.querySelectorAll(".accordion_collapse")

collapses.forEach(collapse => {
  let header = collapse.querySelector(".collapse_header")
  
  header.addEventListener("click", () => {
    collapse.classList.toggle("accordion_collapse--open")
  })
})
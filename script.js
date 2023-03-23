const Caixaa = document.querySelector(".caixa")

const Final = document.querySelector(".final")

const Enviar = document.getElementById("1")

const Avalia = document.getElementById("avali")

const avalias = document.querySelectorAll("li button")


Enviar.addEventListener("click", () => {
  Final.classList.remove("oculto")
  Caixaa.style.display = "none"
})


avalias.forEach((avaliaca) => {
  avaliaca.addEventListener("click", () => {
    Avalia.innerHTML = avaliaca.innerHTML
  })
})
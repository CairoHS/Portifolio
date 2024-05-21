let bloco = document.querySelector("#lado");
let item =document.querySelector("#lado__troca");

item.addEventListener("click", () => {
    bloco.classList.toggle("lado__mover");
})
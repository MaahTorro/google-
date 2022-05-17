const arr = [
    "batata",
    "cabeleleila",
    "fiap",
    "patinho",
    "café"
];

document.addEventListener("DOMContentLoaded", ()=> {
    const btn = document.querySelector("#btn");
    const txt = document.querySelector("#txt");
    const result = document.querySelector("#result");

    btn.addEventListener("click", ()=>{
        for (let i = 0; i < arr.length; i++) {
            if (txt.value === arr[i]) {
                result.innerHTML = "";
                result.innerHTML = "Acertou :)"
                return
            }
            else{
                result.innerHTML = "";
                result.innerHTML = "Errou :(";
            }
        }
    })
})
const botao = document.querySelector(".botao")
const input = document.getElementById("input")
const main = document.querySelector("main")

botao.addEventListener("click", () => {
    let valorDigitado = Number(input.value)
    main.innerHTML = inserirDoUsuarioNoHTML(valorDigitado)

})


function inserirDoUsuarioNoHTML(TabuadaDoUsuario) {
    if(TabuadaDoUsuario === 0) {
        alert(`Insira um valor`)
    }
    else {
        main.innerHTML = ''
        let tabuadaContent = `<div class="card">
                                <h3>Tabuada do ${TabuadaDoUsuario}</h3>`;

        
        for(let produto = 0; produto <= 10; produto++) {
            tabuadaContent += `<p>${TabuadaDoUsuario} x ${produto} = ${TabuadaDoUsuario * produto}</p>`
        }

        tabuadaContent += `</div>`;
        main.innerHTML = tabuadaContent;
    }
    return tabuadaContent
}
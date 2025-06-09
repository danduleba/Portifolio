document.addEventListener("DOMContentLoaded", () => {
    const botaoTema = document.getElementById("alternar-tema");

    if (!botaoTema) {
        console.error("Botão de alternância de tema não encontrado!");
        return;
    }

    const temaAtual = localStorage.getItem("tema");

    if (temaAtual === "escuro") {
        document.body.classList.add("tema-escuro");
    }

    botaoTema.addEventListener("click", () => {
        document.body.classList.toggle("tema-escuro");

        if (document.body.classList.contains("tema-escuro")) {
            localStorage.setItem("tema", "escuro");
        } else {
            localStorage.setItem("tema", "claro");
        }
    });
});

function avancarParaHorario() {
    const checkboxes = document.querySelectorAll('input[name="dias"]:checked');
    const diasSelecionados = [];
    checkboxes.forEach((checkboxes) => {
        diasSelecionados.push(checkboxes.value);
    });

    console.log("Dias Selecionados:", diasSelecionados);

    document.getElementById("diasForm").style.display = "none";
    document.getElementById("horarioContainer").style.display="block";
}

function adicionarTema() {
    const inputTema = document.getElementById("novoTema");
    const tema = inputTema.value.trim();

    if (tema === "") {
        alert("Por favor, digite um tema de estudo");
        return;
    }

    const lista = document.getElementById("listaTemas");

    const item = document.createElement("li");
    item.textContent = tema;

    lista.appendChild(item);

    inputTema.value = "";
}

function avancarParaTemas() {
    document.getElementById("horarioContainer").style.display = "none";

    document.getElementById("temasContainer").style.display = "block";
}

function finalizarConfiguracao() {
    document.getElementById("temasContainer").style.display = "none"
    document.getElementById("resumoContainer").style.display = "block";

    const checkboxes = document.querySelectorAll('input[name="dias"]:checked');
    const dias = Array.from(checkboxes).map(cb => cb.value);
    document.getElementById("resumoDias").textContent = dias.join(", ");

    const inicio = document.getElementById("inicio").value;
    const fim = document.getElementById("fim").value;
    document.getElementById("resumoHorario").textContent = `${inicio} - ${fim}`;

    const listaOriginal = document.querySelectorAll("#listaTemas li");
    const resumoLista = document.getElementById("resumoTemas");
    resumoLista.innerHTML = "";

    listaOriginal.forEach(item => {
        const novoItem = document.createElement("li");
        novoItem.textContent = item.textContent;
        resumoLista.appendChild(novoItem);
    });
}
const botaoAgendar = document.getElementById("botaoAgendar");
const botoesServico = document.querySelectorAll(".botao-servico");


function abrirAgendamento(servicoSelecionado = "") {

    const modal = document.createElement("div");

    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-conteudo">

            <button class="fechar">×</button>

            <h2>Agende seu serviço</h2>

            <p>
                Preencha os dados abaixo e entraremos em contato.
            </p>

            <form id="formAgendamento">

                <label for="nome">
                    Nome
                </label>

                <input
                    type="text"
                    id="nome"
                    placeholder="Digite seu nome"
                    required
                >

                <label for="servico">
                    Serviço
                </label>

                <select id="servico" required>

                    <option value="">
                        Selecione um serviço
                    </option>

                    <option value="Lavagem Premium">
                        Lavagem Premium
                    </option>

                    <option value="Polimento">
                        Polimento
                    </option>

                    <option value="Proteção">
                        Proteção
                    </option>

                </select>

                <label for="data">
                    Data
                </label>

                <input
                    type="date"
                    id="data"
                    required
                >

                <button
                    type="submit"
                    class="botao"
                >
                    Confirmar agendamento
                </button>

            </form>

        </div>
    `;

    document.body.appendChild(modal);


    // SE O SERVIÇO VEIO DE UM CARD

    if (servicoSelecionado !== "") {

        const selectServico =
            modal.querySelector("#servico");

        selectServico.value = servicoSelecionado;
    }


    // FECHAR NO X

    const botaoFechar =
        modal.querySelector(".fechar");

    botaoFechar.addEventListener("click", function () {

        modal.remove();

    });


    // FECHAR CLICANDO FORA

    modal.addEventListener("click", function (evento) {

        if (evento.target === modal) {

            modal.remove();

        }

    });


    // FORMULÁRIO

    const formulario =
        modal.querySelector("#formAgendamento");

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nome =
            modal.querySelector("#nome").value;

        const servico =
            modal.querySelector("#servico").value;

        const data =
            modal.querySelector("#data").value;


        alert(
            `Agendamento realizado com sucesso! 🚗\n\n` +
            `Nome: ${nome}\n` +
            `Serviço: ${servico}\n` +
            `Data: ${data}`
        );


        modal.remove();

    });

}


// BOTÃO PRINCIPAL "AGENDAR SERVIÇO"

botaoAgendar.addEventListener("click", function () {

    abrirAgendamento();

});


// BOTÕES "AGENDAR" DOS CARDS

botoesServico.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const card =
            botao.closest(".card-servico");

        const servico =
            card.dataset.servico;

        abrirAgendamento(servico);

    });

});
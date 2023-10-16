//dados temporários para a lista de vacinas.
const cadastro = [];

// função para salvar o cadastro de vacinas.
function salvarCadastro() {
    const cpf = document.getElementById("cpf").value;
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const nomeVacina = document.getElementById("nomeVacina").value;
    const dataVacinaStr = new Date(document.getElementById("dataVacina").value);

    // Adicione validações se necessário
    const dataVacina = new Date(dataVacinaStr);
    const dataReforco = new Date(dataVacina);
    dataReforco.setDate(dataReforco.getDate() + 30);

    // Adicione o novo cadastro à lista de vacinas
    cadastro.push({ cpf, nome, dataNascimento, nomeVacina, dataVacina, dataReforco});

    // Limpa o formulário
    document.getElementById("cadastro-vacina").reset();

    // Exibir uma mensagem de confirmação
    alert("Cadastro realizado com sucesso!");

    // Atualizar a lista de vagas na tela
    listarCadastros();
}

// Event listener para o formulário de cadastro
document.getElementById("cadastro-vacina").addEventListener("submit", function (e) {
    e.preventDefault(); // impedir de enviar o formulário limpo
    salvarCadastro();
});

// Inicialize a lista de vacinas na tela de listagem
listarCadastros();


// Função para exibir as vacinas na tela de listagem
function listarCadastros() {
    const cadastroList = document.getElementById("resultVacinas");
    cadastroList.innerHTML = "";

    cadastro.forEach(cadastro => {
        const listItem = document.createElement("li");
        listItem.textContent = `Nome completo: ${cadastro.nome} | CPF: ${cadastro.cpf} | Data Nascimento: ${cadastro.dataNascimento} | 
        Nome da Vacina: ${cadastro.nomeVacina} | Data de Vacinação: ${cadastro.dataVacina.toISOString().split('T')[0]} | 
        Data Reforco: ${cadastro.dataReforco.toISOString().split('T')[0]}`;
        cadastroList.appendChild(listItem);
    });

}
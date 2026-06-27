      const sidebar = document.getElementById("sidebar");
      const openBtn = document.getElementById("openSidebar");
      const closeBtn = document.getElementById("closeSidebar");

      const sidebare = document.getElementById("sidebare");
      const op1Btn = document.getElementById("op1Sidebare");
      const close1Btn = document.getElementById("close1Sidebare");

      // Abrir menu
      openBtn.addEventListener("click", () => {
        sidebar.classList.remove("closed");
        sidebar.classList.add("open");
      });

      // Fechar menu apenas com X
      closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("open");
        sidebar.classList.add("closed");
      });

      // Abrir perfil
      op1Btn.addEventListener("click", () => {
        sidebare.classList.remove("closed1");
        sidebare.classList.add("op1");
      });

      // Fechar perfil apenas com X
      close1Btn.addEventListener("click", () => {
        sidebare.classList.remove("op1");
        sidebare.classList.add("closed1");
      });




// Função para preencher o menu com os dados do formulário
function salvarDados(e) {
  e.preventDefault(); // impede envio do form padrão

  // pega valores do formulário
  document.getElementById("confNome").textContent = document.getElementById("nome").value;
  document.getElementById("confConferido").textContent = document.getElementById("conferido").value;
  document.getElementById("confOrdem").textContent = document.getElementById("ordem").value;
  document.getElementById("confProduto").textContent = document.getElementById("produto").value;
  document.getElementById("confCor").textContent = document.getElementById("cor").value;
  document.getElementById("confTamanho").textContent = document.getElementById("tamanho").value;
  document.getElementById("confQuantidade").textContent = document.getElementById("movimentacao").value;
  document.getElementById("confMaquina").textContent = document.getElementById("maquina").value;

  // abre o menu lateral (remove classe "closed")
  document.getElementById("sidebar").classList.remove("closed");
}

// Função para limpar o formulário e fechar o menu
function cancelar(e) {
  e.preventDefault();

  // limpa todos os campos do form
  document.querySelectorAll(".container input").forEach(input => input.value = "");

  // esconde o menu lateral (adiciona classe "closed")
  document.getElementById("sidebar").classList.add("closed");
}

// Ativa botões
document.querySelector(".btn-save").addEventListener("click", salvarDados);
document.querySelector(".btn-cancel").addEventListener("click", cancelar);




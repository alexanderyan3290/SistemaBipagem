document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // impede envio padrão
      const codigo = document.getElementById("icodigo_de_cofirmacao").value.trim();

      if (codigo === "111") {
        window.location.href = "movimentacao.html";
      } else if (codigo === "1") {
        window.location.href = "passadoria.html";
      } else {
        alert("Código inválido!");
      }
    });

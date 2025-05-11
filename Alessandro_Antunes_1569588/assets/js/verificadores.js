fetch('/db/db.json')
  .then(response => response.json())
  .then(data => {
    // Supondo que o array de usuários está em data.usuarios
    sessionStorage.setItem("usuario", JSON.stringify(data.usuario));
  })
  .catch(error => {
    console.error("Erro ao carregar usuários:", error);
  });


  function criarusuario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confSenha = document.getElementById("confSenha").value;

    if (nome === "" || email === "" || senha === "" || confSenha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if (senha !== confSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    let usuarios = JSON.parse(sessionStorage.getItem("usuario")) || [];
    usuario.push(usuario);
    sessionStorage.setItem("usuario", JSON.stringify(usuarios));

    windows.alert("Usuário criado com sucesso!");}
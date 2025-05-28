//fazer login
document.getElementById('loginButton').addEventListener('click', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  

  fetch(`http://localhost:3000/usuarios?email=${email}&password=${password}`)
    .then(response => response.json())
    .then(users => {
      if (users.length > 0) {
                // 1. Armazenar dados do usuário
                localStorage.setItem('usuarioLogado', JSON.stringify({
                    id: users[0].id,
                    nome: users[0].nome,
                    email: users[0].email
                }));

                // 2. Mostrar mensagem de sucesso
                document.getElementById('mensagem').innerHTML = `
                    <div class="alert alert-success">
                        Login realizado com sucesso! Redirecionando...
                    </div>
                `;

                // 3. Redirecionar após 2 segundos
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);

      } else {
        document.getElementById('mensagem').innerHTML = "<i class='bg-dark bg-gradient p-2 rounded-4 shadow-lg text-light'>Email ou senha incorretos.</i>";
      }
    })
    .catch(error => {
       Window.alert('Erro:', error);
      document.getElementById('mensagem').innerText = 'Erro ao conectar ao servidor.';
    });
});

// cadastrar
document.getElementById('cadastroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Primeira verificação: ver se o email já existe
  fetch(`http://localhost:3000/users?email=${email}`)
    .then(response => response.json())
    .then(users => {
      if (users.length > 0) {
        document.getElementById('mensagem').innerText = 'Email já cadastrado.';
      } else {
        // Se não existir, faz o cadastro
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password,tipo })
        })
        
        .then(response => response.json())
        .then(user => {
          document.getElementById('mensagem').innerText = 'Cadastro realizado com sucesso!';
          console.log('Usuário cadastrado:', user);
        })
        .catch(error => {
          console.error('Erro:', error);
          document.getElementById('mensagem').innerText = 'Erro ao cadastrar.';
        });
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      document.getElementById('mensagem').innerText = 'Erro ao verificar o email.';
    });
});


// cadastrar
// Variável para armazenar o tipo de usuário
let tipoUsuario = 'user'; // Padrão: usuário comum

// 1. Configurar os botões
document.getElementById('admButton').addEventListener('click', function(e) {
    e.preventDefault();
    tipoUsuario = 'admin';
    
    document.getElementById('cardadm').style.display = 'none';
});

document.getElementById('userButton').addEventListener('click', function(e) {
    e.preventDefault();
    tipoUsuario = 'user';
    document.getElementById('carduser').style.display = 'none';
    document.getElementById('cardadm').style.display = 'none';
});


        // Lógica de cadastro
        fetch(`http://localhost:3000/users?email=${email}`)
            .then(response => response.json())
            .then(users => {
                if (users.length > 0) {
                    alert('Email já cadastrado');
                } else {
                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password, tipo: tipoUsuario })
                    })
                    .then(response => response.json())
                    .then(user => {
                        alert(`Cadastro como ${tipoUsuario} realizado!`);
                        localStorage.setItem('user', JSON.stringify(user));
                        window.location.href = tipoUsuario === 'admin' ? 'admin.html' : 'index.html';
                    });
                }
            });
    

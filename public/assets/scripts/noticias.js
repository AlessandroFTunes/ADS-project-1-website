// Carrega as notícias quando a página é aberta
document.addEventListener('DOMContentLoaded', function() {
    carregarNoticias();
    
    // Configura o formulário
    document.getElementById('formNoticia').addEventListener('submit', function(e) {
        e.preventDefault();
        adicionarNoticia();
    });
});

// Função para carregar notícias da API
function carregarNoticias() {
    fetch('http://localhost:3000/noticias')
        .then(response => response.json())
        .then(noticias => {
            const corpoTabela = document.getElementById('corpoTabelaNoticias');
            corpoTabela.innerHTML = '';
            
            noticias.forEach(noticia => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${noticia.id}</td>
                    <td>${noticia.titulo}</td>
                    <td>${noticia.autor}</td>
                    <td>${noticia.fonte}</td>
                    <td>${formatarData(noticia.data)}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary me-1" onclick="editarNoticia(${noticia.id})">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="excluirNoticia(${noticia.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                `;
                corpoTabela.appendChild(linha);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar notícias:', error);
            alert('Erro ao carregar notícias. Verifique o console para detalhes.');
        });
}

// Função para adicionar nova notícia
function adicionarNoticia() {
    const titulo = document.getElementById('tituloNoticia').value;
    const conteudo = document.getElementById('conteudoNoticia').value;
    const data = document.getElementById('dataNoticia').value;
    
    fetch('http://localhost:3000/noticias', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo,
            conteudo,
            data
        })
    })
    .then(response => response.json())
    .then(() => {
        alert('Notícia adicionada com sucesso!');
        document.getElementById('formNoticia').reset();
        carregarNoticias(); // Atualiza a tabela
    })
    .catch(error => {
        console.error('Erro ao adicionar notícia:', error);
        alert('Erro ao adicionar notícia. Verifique o console para detalhes.');
    });
}

// Função para formatar data (auxiliar)
function formatarData(dataString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dataString).toLocaleDateString('pt-BR', options);
}

// Funções para editar e excluir (implementação básica)
function editarNoticia(id) {
    alert('Editar notícia ID: ' + id);
    // Implemente a lógica de edição conforme necessário
}

function excluirNoticia(id) {
    if (confirm('Tem certeza que deseja excluir esta notícia?')) {
        fetch(`http://localhost:3000/noticias/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert('Notícia excluída com sucesso!');
            carregarNoticias();
        })
        .catch(error => {
            console.error('Erro ao excluir notícia:', error);
            alert('Erro ao excluir notícia. Verifique o console para detalhes.');
        });
    }
}
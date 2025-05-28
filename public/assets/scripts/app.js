//barra de pesquisa
function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function buscarNoticias() {
  const termo = removerAcentos(document.getElementById('campoBusca').value.toLowerCase());
  const noticias = document.querySelectorAll('.noticia');

  noticias.forEach(noticia => {
    const titulo = removerAcentos(noticia.getAttribute('data-title').toLowerCase());
    const conteudo = removerAcentos(noticia.getAttribute('data-content').toLowerCase());

    if (titulo.includes(termo) || conteudo.includes(termo)) {
      noticia.style.display = 'block';
    } else {
      noticia.style.display = 'none';
    }
  });
}

import moment from 'moment';

fetch('/db/db.json')
  .then(response => response.json())
  .then(data => {
    // Supondo que o array de usuários está em data.usuarios
    sessionStorage.setItem("usuario", JSON.stringify(data.usuario));
  })
  .catch(error => {
    console.error("Erro ao carregar usuários:", error);
  });



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

    
    const noticias = [
      {
        id: "1",
        titulo: "Chuva de granizo surpreende moradores do Barreiro",
        conteudo: "Na noite de 15 de fevereiro de 2023, uma intensa chuva de granizo atingiu bairros da região do Barreiro, em Belo Horizonte. Moradores do bairro Tirol registraram vídeos impressionantes da precipitação, que foi precedida por um alerta da Defesa Civil. As autoridades recomendaram que a população evitasse se abrigar ou estacionar veículos debaixo de árvores e ficasse atenta a áreas de risco durante o temporal.",
        imagem: "assets/img/noticia.png",
        autor: "Barreiro Noticias",
        fonte: "Fonte: GGGRDECE e Defesa Civil "
      },
      {
        id: "2",
        titulo: "Temporal causa estragos no Barreiro, em Belo Horizonte",
        conteudo: "Na tarde de 24 de dezembro de 2024, um forte temporal provocou alagamentos, queda de muro e arrastou veículos na região do Barreiro. A Defesa Civil registrou 41,1 mm de chuva em menos de uma hora, equivalente a 12,1% da média esperada para dezembro. As avenidas Senador Levindo Coelho e Delfino Francisco Xavier ficaram alagadas, e o muro de um supermercado desabou, causando danos materiais significativos.",
        imagem: "assets/img/noticia2.png",
        autor: "Barreiro Noticias",
        fonte: "Fonte: GGGRDECE "
      },
      {
        id: "3",
        titulo: "Estácio inaugura unidade no Via Shopping Barreiro",
        conteudo: "A faculdade Estácio expandiu sua presença em Belo Horizonte com a inauguração de uma nova unidade no Via Shopping Barreiro. A iniciativa visa facilitar o acesso à educação superior para os moradores da região, oferecendo cursos de graduação e pós-graduação em diversas áreas do conhecimento.",
        imagem: "assets/img/noticia4.png",
        autor: "Barreiro Noticias",
        fonte: "Fonte: Estacio"
      },
      {
        id: "4",
        titulo: "UPA Barreiro amplia capacidade de atendimento",
        conteudo: "Para aprimorar o atendimento à população, a Prefeitura de Belo Horizonte instalou três consultórios em containers na UPA Barreiro, destinados exclusivamente a atendimentos pediátricos. Além disso, a recepção foi ampliada, e o número de leitos de observação aumentou de 7 para 16. A ala pediátrica também passou de 6 para 10 leitos, visando atender à crescente demanda por serviços de saúde na região.",
        imagem: "assets/img/noticia3.png",
        autor: "Barreiro Noticias",
        fonte: "Fonte: Prefeitura de Belo Horizonte"
      },
      {
        id: "5",
        titulo: "CEMIG reforça redes elétricas no Barreiro",
        conteudo: "Após diversas reclamações sobre quedas e oscilações de energia em bairros do Barreiro, a CEMIG iniciou obras para reforçar o fornecimento elétrico na região. As intervenções incluem a modernização da infraestrutura e a substituição de equipamentos antigos, visando garantir maior estabilidade e segurança no fornecimento de energia para os moradores.",
        imagem: "assets/img/noticia6.png",
        autor: "Barreiro Noticias",
        fonte: "Fonte: Prefeitura de Belo Horizonte"
      },
      {
        id: "6",
        titulo: "Ônibus elétrico começa a circular no Barreiro",
        conteudo: "A linha 6350, que atende a região do Barreiro, passou a contar com ônibus elétricos, marcando um avanço na mobilidade urbana sustentável em Belo Horizonte. Os novos veículos oferecem menor emissão de poluentes, redução de ruídos e maior conforto para os passageiros, alinhando-se às iniciativas da cidade em promover um transporte público mais ecológico.",
        imagem: "assets/img/noticia7.png",
        autor: "Barreiro Noticias",
        fonte: "BH Trans"
      }
    ];

    const login = [
          {
            id: "1",
            email: "escreva teu email",
            senha: "escreva tua senha"
          }             
    ]
    
    
  
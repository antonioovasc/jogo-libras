/* ===================================================== 
   CODE QUEST 
   LÓGICA DO JOGO 
===================================================== */

/* ===================================================== 
   VARIÁVEIS 
===================================================== */

let nomeJogador = "";
let pontuacao = 0;
let faseAtual = 0;
let comandos = [];
let palavraAtual = "";

/* ===================================================== 
   CONFIGURAÇÃO DAS FASES (25 Fases)
===================================================== */

const fases = [
  // FASES 1 A 10 (Nível Iniciante - Tamanhos 3x3 a 6x6)
  {
    numero: 1,
    titulo: "Primeiro Passo",
    descricao: "Apenas ande para a direita para chegar ao computador.",
    tamanho: 3,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 0, coluna: 2 },
    obstaculos: [],
    palavra: "INÍCIO",
    pontos: 50,
  },
  {
    numero: 2,
    titulo: "Descendo",
    descricao: "Agora tente ir para baixo.",
    tamanho: 3,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 2, coluna: 0 },
    obstaculos: [
      [0, 1],
      [0, 2],
    ],
    palavra: "FÁCIL",
    pontos: 50,
  },
  {
    numero: 3,
    titulo: "A Curva",
    descricao: "Você precisa virar para não bater.",
    tamanho: 3,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 2, coluna: 2 },
    obstaculos: [
      [0, 1],
      [1, 1],
    ],
    palavra: "ROBÔ",
    pontos: 100,
  },
  {
    numero: 4,
    titulo: "Passeio Largo",
    descricao: "O mapa cresceu um pouco. Siga pelo canto.",
    tamanho: 4,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 3, coluna: 3 },
    obstaculos: [
      [1, 1],
      [2, 2],
    ],
    palavra: "DADO",
    pontos: 100,
  },
  {
    numero: 5,
    titulo: "Desvio Simples",
    descricao: "Há uma parede na sua frente. Dê a volta.",
    tamanho: 4,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 0, coluna: 3 },
    obstaculos: [
      [0, 1],
      [0, 2],
    ],
    palavra: "TELA",
    pontos: 150,
  },
  {
    numero: 6,
    titulo: "O Muro",
    descricao: "Encontre a passagem livre.",
    tamanho: 4,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 3, coluna: 3 },
    obstaculos: [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    palavra: "MOUSE",
    pontos: 150,
  },
  {
    numero: 7,
    titulo: "A Escada",
    descricao: "Caminhe em zigue-zague ou pelos cantos.",
    tamanho: 5,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 4, coluna: 4 },
    obstaculos: [
      [1, 0],
      [2, 1],
      [3, 2],
      [4, 3],
    ],
    palavra: "AJUDA",
    pontos: 200,
  },
  {
    numero: 8,
    titulo: "Dois Caminhos",
    descricao: "Existem várias formas de chegar, escolha a mais fácil.",
    tamanho: 5,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 4, coluna: 0 },
    obstaculos: [
      [1, 0],
      [1, 1],
      [3, 0],
      [3, 1],
    ],
    palavra: "CÓDIGO",
    pontos: 200,
  },
  {
    numero: 9,
    titulo: "Quase Lá",
    descricao: "Um mapa maior, mas com bastante espaço livre.",
    tamanho: 6,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 5, coluna: 5 },
    obstaculos: [
      [2, 2],
      [2, 3],
      [3, 2],
      [3, 3],
    ],
    palavra: "LÓGICA",
    pontos: 250,
  },
  {
    numero: 10,
    titulo: "O Bloqueio",
    descricao: "Cuidado com os bloqueios no centro.",
    tamanho: 6,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 5, coluna: 5 },
    obstaculos: [
      [0, 3],
      [1, 3],
      [2, 0],
      [2, 1],
      [4, 4],
      [4, 5],
    ],
    palavra: "TESTE",
    pontos: 300,
  },

  // FASES 11 A 20 (Nível Intermediário - Tamanhos 6x6 a 7x7)
  {
    numero: 11,
    titulo: "A Ferradura",
    descricao: "Dê a volta na grande parede para chegar ao objetivo.",
    tamanho: 6,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 0, coluna: 5 },
    obstaculos: [
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
      [4, 3],
    ],
    palavra: "REDE",
    pontos: 350,
  },
  {
    numero: 12,
    titulo: "Zigue-Zague",
    descricao: "Navegue com cuidado pelos corredores estreitos.",
    tamanho: 6,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 5, coluna: 5 },
    obstaculos: [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
      [3, 5],
    ],
    palavra: "LOOP",
    pontos: 350,
  },
  {
    numero: 13,
    titulo: "O Centro",
    descricao: "O computador está bem protegido. Ache a entrada.",
    tamanho: 6,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 3, coluna: 3 },
    obstaculos: [
      [2, 2],
      [2, 3],
      [2, 4],
      [3, 2],
      [4, 2],
      [4, 3],
      [4, 4],
    ],
    palavra: "DADOS",
    pontos: 400,
  },
  {
    numero: 14,
    titulo: "Novo Horizonte",
    descricao: "O mapa cresceu para 7x7. Planeje bem a rota longa.",
    tamanho: 7,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 6, coluna: 6 },
    obstaculos: [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
    ],
    palavra: "TECLADO",
    pontos: 400,
  },
  {
    numero: 15,
    titulo: "Os Pilares",
    descricao: "Use os túneis entre as colunas para passar.",
    tamanho: 7,
    inicio: { linha: 3, coluna: 0 },
    objetivo: { linha: 3, coluna: 6 },
    obstaculos: [
      [1, 2],
      [2, 2],
      [4, 2],
      [5, 2],
      [1, 4],
      [2, 4],
      [4, 4],
      [5, 4],
    ],
    palavra: "SISTEMA",
    pontos: 450,
  },
  {
    numero: 16,
    titulo: "A Grande Muralha",
    descricao: "Essa parede não tem fim... ou será que tem?",
    tamanho: 7,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 0, coluna: 6 },
    obstaculos: [
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
      [4, 3],
      [5, 3],
    ],
    palavra: "BUG",
    pontos: 450,
  },
  {
    numero: 17,
    titulo: "Campo Minado",
    descricao: "Blocos espalhados por todo lado. Não se perca.",
    tamanho: 7,
    inicio: { linha: 6, coluna: 0 },
    objetivo: { linha: 0, coluna: 6 },
    obstaculos: [
      [5, 0],
      [5, 1],
      [5, 2],
      [5, 3],
      [3, 3],
      [3, 4],
      [3, 5],
      [3, 6],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ],
    palavra: "NUVEM",
    pontos: 500,
  },
  {
    numero: 18,
    titulo: "O Canto",
    descricao: "O caminho direto está fechado. Encontre a alternativa.",
    tamanho: 7,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 6, coluna: 6 },
    obstaculos: [
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
      [5, 1],
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
      [5, 6],
    ],
    palavra: "HTML",
    pontos: 500,
  },
  {
    numero: 19,
    titulo: "Dispersão",
    descricao: "Vários obstáculos pelo caminho. Vá com calma.",
    tamanho: 7,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 6, coluna: 6 },
    obstaculos: [
      [1, 2],
      [2, 5],
      [3, 1],
      [4, 4],
      [5, 2],
      [6, 3],
      [2, 1],
    ],
    palavra: "CSS",
    pontos: 550,
  },
  {
    numero: 20,
    titulo: "Duas Portas",
    descricao: "Existem buracos na parede. Passe por eles.",
    tamanho: 7,
    inicio: { linha: 3, coluna: 0 },
    objetivo: { linha: 3, coluna: 6 },
    obstaculos: [
      [0, 2],
      [1, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
      [0, 4],
      [1, 4],
      [2, 4],
      [3, 4],
      [5, 4],
      [6, 4],
    ],
    palavra: "PROGRAMA",
    pontos: 600,
  },

  // FASES 21 A 25 (Nível Avançado - Tamanhos 8x8)
  {
    numero: 21,
    titulo: "O Campo",
    descricao: "Um mapa 8x8 gigante! O caminho é livre, mas exige precisão.",
    tamanho: 8,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 7, coluna: 7 },
    obstaculos: [
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
    palavra: "FUNÇÃO",
    pontos: 650,
  },
  {
    numero: 22,
    titulo: "A Ponte",
    descricao: "Atravesse a ponte de dados sem cair para fora.",
    tamanho: 8,
    inicio: { linha: 4, coluna: 0 },
    objetivo: { linha: 4, coluna: 7 },
    obstaculos: [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
      [3, 5],
      [3, 6],
      [5, 0],
      [5, 1],
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
      [5, 6],
    ],
    palavra: "GABINETE",
    pontos: 700,
  },
  {
    numero: 23,
    titulo: "A Escadaria",
    descricao: "Obstáculos diagonais formarão o seu corredor.",
    tamanho: 8,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 7, coluna: 7 },
    obstaculos: [
      [1, 0],
      [2, 1],
      [3, 2],
      [4, 3],
      [5, 4],
      [6, 5],
      [7, 6],
    ],
    palavra: "MEMÓRIA",
    pontos: 750,
  },
  {
    numero: 24,
    titulo: "A Caixa Forte",
    descricao:
      "O computador está trancafiado, encontre a única porta de entrada.",
    tamanho: 8,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 4, coluna: 4 },
    obstaculos: [
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
      [6, 2],
      [6, 3],
      [6, 4],
      [6, 5],
      [6, 6],
      [3, 2],
      [4, 2],
      [5, 2],
      [3, 6],
      [5, 6],
    ],
    palavra: "HACKER",
    pontos: 850,
  },
  {
    numero: 25,
    titulo: "A Matriz Final",
    descricao: "O último desafio do Byte! Pense bem antes de executar.",
    tamanho: 8,
    inicio: { linha: 0, coluna: 0 },
    objetivo: { linha: 7, coluna: 7 },
    obstaculos: [
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
      [4, 3],
      [5, 3],
      [3, 0],
      [3, 1],
      [3, 5],
      [3, 6],
      [3, 7],
      [5, 5],
      [5, 6],
      [6, 5],
    ],
    palavra: "VITÓRIA",
    pontos: 1000,
  },
];

/* ===================================================== 
   TROCAR DE TELA 
===================================================== */

function irPara(idTela) {
  const telas = document.querySelectorAll(".tela");
  telas.forEach(function (tela) {
    tela.classList.remove("ativa");
  });

  const telaEscolhida = document.getElementById(idTela);
  telaEscolhida.classList.add("ativa");
}

/* ===================================================== 
   SALVAR NOME 
===================================================== */
function salvarNome() {
  const campo = document.getElementById("nome-jogador");
  if (!campo) return;

  const nome = campo.value.trim();
  const erroElemento = document.getElementById("erro-nome");

  if (nome === "") {
    if (erroElemento)
      erroElemento.textContent = "Digite seu nome para continuar.";
    return;
  }

  // Salva o nome na variável global
  nomeJogador = nome;

  if (erroElemento) erroElemento.textContent = "";

  // Atualiza o texto APENAS nos elementos que realmente existem na página
  const elHistoria = document.getElementById("nome-historia");
  if (elHistoria) elHistoria.textContent = nomeJogador;

  const elJogo = document.getElementById("nome-jogador-jogo");
  if (elJogo) elJogo.textContent = nomeJogador;

  // Redireciona e inicia a fase
  irPara("tela-jogo");
  iniciarFase(0);
}

/* ===================================================== 
   INICIAR FASE 
===================================================== */

function iniciarFase(numero) {
  faseAtual = numero;
  comandos = [];

  const fase = fases[faseAtual];

  document.getElementById("numero-fase").textContent = "FASE " + fase.numero;
  document.getElementById("titulo-fase").textContent = fase.titulo;
  document.getElementById("descricao-fase").textContent = fase.descricao;
  document.getElementById("pontuacao").textContent = pontuacao;
  document.getElementById("mensagem-jogo").textContent = "";
  document.getElementById("mensagem-jogo").className = "mensagem-jogo";

  atualizarSequencia();
  desenharTabuleiro();
  irPara("tela-jogo");
}

/* ===================================================== 
   DESENHAR TABULEIRO 
===================================================== */

function desenharTabuleiro(posicao = null) {
  const fase = fases[faseAtual];
  const tabuleiro = document.getElementById("tabuleiro");

  tabuleiro.innerHTML = "";
  tabuleiro.style.gridTemplateColumns = `repeat(${fase.tamanho}, 1fr)`;

  const robo = posicao || fase.inicio;

  for (let linha = 0; linha < fase.tamanho; linha++) {
    for (let coluna = 0; coluna < fase.tamanho; coluna++) {
      const celula = document.createElement("div");
      celula.classList.add("celula");

      const obstaculo = fase.obstaculos.some(function (item) {
        return item[0] === linha && item[1] === coluna;
      });

      const objetivo =
        fase.objetivo.linha === linha && fase.objetivo.coluna === coluna;
      const roboEstaAqui = robo.linha === linha && robo.coluna === coluna;

      if (obstaculo) {
        celula.classList.add("obstaculo");
        celula.textContent = "⬛";
      } else if (roboEstaAqui) {
        celula.classList.add("robo");
        celula.textContent = "🤖";
      } else if (objetivo) {
        celula.classList.add("objetivo");
        celula.textContent = "💻";
      }

      tabuleiro.appendChild(celula);
    }
  }
}

/* ===================================================== 
   ADICIONAR COMANDO 
===================================================== */

function adicionarComando(comando) {
  // Aumentamos o limite para 50 devido aos mapas maiores (8x8)
  if (comandos.length >= 50) {
    return;
  }

  comandos.push(comando);
  atualizarSequencia();
}

/* ===================================================== 
   MOSTRAR SEQUÊNCIA 
===================================================== */

function atualizarSequencia() {
  const area = document.getElementById("sequencia");
  area.innerHTML = "";

  const icones = {
    up: "⬆️",
    down: "⬇️",
    left: "⬅️",
    right: "➡️",
  };

  comandos.forEach(function (comando) {
    const item = document.createElement("div");
    item.classList.add("comando-sequencia");
    item.textContent = icones[comando];
    area.appendChild(item);
  });
}

/* ===================================================== 
   LIMPAR COMANDOS 
===================================================== */

function limparComandos() {
  if (comandos.length > 0) {
    comandos.pop();
    atualizarSequencia();
    document.getElementById("mensagem-jogo").textContent = "";
    desenharTabuleiro();
  }
}
/* ===================================================== 
   EXECUTAR COMANDOS 
===================================================== */

async function executarComandos() {
  if (comandos.length === 0) {
    mostrarMensagem("Escolha alguns comandos primeiro!", "erro");
    return;
  }

  const fase = fases[faseAtual];
  let posicao = {
    linha: fase.inicio.linha,
    coluna: fase.inicio.coluna,
  };

  for (const comando of comandos) {
    const proximaPosicao = {
      linha: posicao.linha,
      coluna: posicao.coluna,
    };

    if (comando === "up") {
      proximaPosicao.linha--;
    }
    if (comando === "down") {
      proximaPosicao.linha++;
    }
    if (comando === "left") {
      proximaPosicao.coluna--;
    }
    if (comando === "right") {
      proximaPosicao.coluna++;
    }

    const saiuDoMapa =
      proximaPosicao.linha < 0 ||
      proximaPosicao.linha >= fase.tamanho ||
      proximaPosicao.coluna < 0 ||
      proximaPosicao.coluna >= fase.tamanho;

    const bateuNoObstaculo = fase.obstaculos.some(function (item) {
      return (
        item[0] === proximaPosicao.linha && item[1] === proximaPosicao.coluna
      );
    });

    if (saiuDoMapa || bateuNoObstaculo) {
      desenharTabuleiro(posicao);
      await esperar(300);
      irPara("tela-erro");
      return;
    }

    posicao = proximaPosicao;
    desenharTabuleiro(posicao);
    await esperar(300);

    const chegou =
      posicao.linha === fase.objetivo.linha &&
      posicao.coluna === fase.objetivo.coluna;

    if (chegou) {
      mostrarVitoria();
      return;
    }
  }

  mostrarMensagem("O Byte ainda não chegou ao computador.", "erro");
}

/* ===================================================== 
   VITÓRIA 
===================================================== */

function mostrarVitoria() {
  const fase = fases[faseAtual];

  pontuacao += fase.pontos;
  document.getElementById("pontuacao").textContent = pontuacao;
  document.getElementById("nome-vitoria").textContent = nomeJogador;
  document.getElementById("pontos-ganhos").textContent = fase.pontos;
  document.getElementById("palavra-vitoria").textContent = fase.palavra;
  palavraAtual = fase.palavra;

  const botao = document.getElementById("botao-proxima-fase");

  if (faseAtual === fases.length - 1) {
    botao.textContent = "VER RESULTADO 🏆";
  } else {
    botao.textContent = "PRÓXIMA FASE";
  }

  irPara("tela-vitoria");
}

/* ===================================================== 
   PRÓXIMA FASE 
===================================================== */

function proximaFase() {
  if (faseAtual === fases.length - 1) {
    document.getElementById("nome-final").textContent = nomeJogador;
    document.getElementById("pontuacao-final").textContent = pontuacao + " ⭐";
    irPara("tela-final");
    return;
  }

  iniciarFase(faseAtual + 1);
}

/* ===================================================== 
   VOLTAR PARA FASE 
===================================================== */

function voltarParaFase() {
  iniciarFase(faseAtual);
}

/* ===================================================== 
   MENSAGEM 
===================================================== */

function mostrarMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem-jogo");
  mensagem.textContent = texto;
  mensagem.className = "mensagem-jogo " + tipo;
}

/* ===================================================== 
   LIBRAS 
===================================================== */

function abrirLibras(palavra) {
  palavraAtual = palavra;
  document.getElementById("titulo-libras").textContent = palavra;
  document.getElementById("modal-libras").classList.add("aberto");
}

function fecharLibras() {
  document.getElementById("modal-libras").classList.remove("aberto");
}

function abrirVLibrasWidget() {
  fecharLibras();

  const botaoWidget = window.VLibrasWidget && window.VLibrasWidget.initBtn;

  if (botaoWidget) {
    botaoWidget.click();
  } else {
    alert(
      "O Widget do VLibras ainda está carregando. Aguarde alguns instantes e tente novamente.",
    );
  }
}

/* ===================================================== 
   COMO JOGAR 
===================================================== */

function abrirComoJogar() {
  alert(
    "🎮 COMO JOGAR\n\n" +
      "1. Digite seu nome.\n\n" +
      "2. Escolha os comandos do Byte.\n\n" +
      "3. Monte uma sequência.\n\n" +
      "4. Clique em EXECUTAR.\n\n" +
      "5. Leve o Byte até o computador.\n\n" +
      "🤟 Durante o jogo você encontrará algumas palavras acompanhadas de Libras.",
  );
}

/* ===================================================== 
   REINICIAR 
===================================================== */

function reiniciarJogo() {
  nomeJogador = "";
  pontuacao = 0;
  faseAtual = 0;
  comandos = [];

  document.getElementById("nome-jogador").value = "";
  irPara("tela-inicio");
}

/* ===================================================== 
   ESPERA 
===================================================== */

function esperar(tempo) {
  return new Promise(function (resolve) {
    setTimeout(resolve, tempo);
  });
}

/* ===================================================== 
   ENTER NO CAMPO DE NOME 
===================================================== */

document
  .getElementById("nome-jogador")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      salvarNome();
    }
  });

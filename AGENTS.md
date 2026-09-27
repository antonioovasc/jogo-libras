# Code Quest - Regras de Desenvolvimento

Estas regras orientam qualquer agente de IA que trabalhar neste projeto.

## Contexto do projeto

- O projeto se chama **Code Quest**.
- É um jogo educativo de lógica de programação.
- O jogador controla o robô **Byte** em um tabuleiro e precisa criar uma sequência de comandos para chegar ao computador.
- O projeto utiliza HTML, CSS e JavaScript puro (Vanilla JavaScript).
- Não utilizar frameworks ou bibliotecas adicionais sem necessidade.
- O projeto possui integração com o **VLibras** para acessibilidade em Libras.
- O VLibras é integrado diretamente no HTML por meio do Widget oficial.
- O projeto possui várias fases, cada uma com título, descrição, tamanho do tabuleiro, posição inicial, objetivo, obstáculos, palavra relacionada a Libras e pontuação.

## Regras gerais

1. Antes de modificar qualquer arquivo, analisar a estrutura existente do projeto.
2. Preservar a arquitetura atual sempre que possível.
3. Não reescrever arquivos inteiros quando uma alteração pontual for suficiente.
4. Não remover funcionalidades existentes sem uma justificativa clara.
5. Não alterar a lógica das fases, pontuação ou movimentação sem que isso seja solicitado.
6. Manter o código simples, legível e adequado para estudantes iniciantes.
7. Utilizar JavaScript puro e evitar frameworks como React, Vue ou Angular.
8. Não adicionar dependências npm ou bibliotecas externas sem necessidade.
9. Manter HTML semântico e organizado.
10. Manter CSS separado do HTML quando a alteração puder ser feita no arquivo CSS.
11. Utilizar nomes de variáveis e funções em português quando isso seguir o padrão já existente no projeto.
12. Não modificar nomes de IDs, classes, funções ou variáveis existentes sem verificar todas as referências no projeto.
13. Antes de criar uma nova função, verificar se já existe uma função com a mesma finalidade.
14. Evitar código duplicado.
15. Não criar funcionalidades fictícias ou APIs que não existam.

## Regras para JavaScript

1. Manter a estrutura existente de variáveis globais, fases e funções.
2. A variável `palavraAtual` deve continuar representando a palavra relacionada à fase atual.
3. As informações das fases devem continuar armazenadas no array `fases`.
4. Funções como `iniciarFase()`, `executarComandos()`, `mostrarVitoria()`, `proximaFase()`, `voltarParaFase()` e `reiniciarJogo()` devem continuar funcionando.
5. Ao alterar uma função existente, preservar seu comportamento original sempre que possível.
6. Evitar transformar funções simples em estruturas excessivamente complexas.
7. Utilizar `const` e `let` corretamente.
8. Evitar variáveis globais desnecessárias.
9. Validar elementos com `document.getElementById()` antes de utilizá-los quando houver possibilidade de o elemento não existir.
10. Sempre considerar que o código será executado diretamente pelo navegador.

## Regras para VLibras

1. O VLibras deve continuar sendo utilizado através do Widget oficial.
2. A integração deve permanecer no HTML.
3. Utilizar a configuração oficial do Widget, por exemplo:

```html
<script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>

<script>
    new window.VLibras.Widget({
        rootPath: 'https://vlibras.gov.br/app'
    });
</script>
```

4. Não inventar métodos como `VLibras.traduzir()` caso eles não façam parte da API disponível.
5. Não implementar uma API própria fingindo ser uma funcionalidade oficial do VLibras.
6. O sistema deve continuar permitindo que o usuário visualize a palavra da fase e utilize o Widget do VLibras para realizar a tradução.
7. Sempre que a palavra da fase for utilizada na funcionalidade de Libras, utilizar a propriedade `palavra` do objeto da fase ou a variável `palavraAtual`.
8. Não substituir a integração do VLibras por outra biblioteca sem solicitação explícita.
9. Se for necessário utilizar uma funcionalidade avançada do VLibras que não esteja disponível no Widget atual, pesquisar a documentação oficial antes de implementar.
10. Não afirmar que o VLibras consegue executar automaticamente uma tradução por JavaScript se a documentação oficial não fornecer essa funcionalidade.

## Regras para interface

1. Preservar o estilo visual atual do Code Quest.
2. Não remover elementos visuais existentes sem necessidade.
3. Manter a interface responsiva.
4. Manter os botões e telas existentes funcionando.
5. Utilizar os IDs e classes existentes sempre que possível.
6. Novos elementos devem seguir o padrão visual já utilizado no projeto.
7. Mensagens apresentadas ao jogador devem estar em português.
8. Evitar textos técnicos desnecessários na interface do usuário.

## Regras de alterações

1. Antes de editar, identificar exatamente quais arquivos precisam ser alterados.
2. Alterar somente os arquivos necessários.
3. Explicar brevemente o que foi alterado.
4. Se houver risco de quebrar uma funcionalidade existente, informar antes de realizar uma alteração estrutural.
5. Depois da alteração, verificar:
   - erros de sintaxe JavaScript;
   - IDs inexistentes;
   - funções chamadas mas não definidas;
   - elementos HTML utilizados pelo JavaScript;
   - possíveis referências quebradas;
   - carregamento correto dos scripts.
6. Não considerar uma implementação concluída apenas porque o código foi escrito. Verificar se a integração faz sentido com a estrutura existente.

## Regras de estilo de código

1. Utilizar indentação consistente.
2. Manter comentários quando eles ajudam a entender a estrutura.
3. Utilizar comentários em português.
4. Não adicionar comentários óbvios ou excessivos.
5. Preferir funções pequenas e com uma responsabilidade clara.
6. Evitar soluções excessivamente complexas para problemas simples.
7. Não introduzir padrões arquiteturais desnecessários para este projeto.

## Regra de segurança das alterações

- Nunca apagar ou substituir grandes partes do projeto sem necessidade.
- Nunca remover as fases existentes.
- Nunca remover a lógica de movimentação do Byte sem solicitação.
- Nunca remover a integração com VLibras sem solicitação.
- Nunca substituir Vanilla JavaScript por framework.
- Nunca criar dependências externas apenas para resolver um problema que pode ser resolvido com HTML, CSS ou JavaScript puro.

## Fluxo ao receber uma solicitação

1. Entenda primeiro o objetivo.
2. Analise os arquivos relacionados.
3. Identifique a menor alteração necessária.
4. Faça a alteração.
5. Verifique possíveis impactos nas outras partes do projeto.
6. Explique de forma objetiva o que foi feito.
7. Se houver alguma limitação técnica, informe claramente em vez de inventar uma solução.

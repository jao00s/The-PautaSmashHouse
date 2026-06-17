# Pauta Smash House

Site estático de uma hamburgueria fictícia, criado com HTML, CSS e JavaScript puro. O projeto simula uma experiência de pedido online, incluindo cadastro, login, seleção de produtos, escolha de forma de pagamento e exibição do valor total do pedido.

## Sobre o projeto

O objetivo do projeto é apresentar um fluxo de navegação completo para um restaurante, com páginas de menu, pagamento e contato. Ele foca em usabilidade visual e em demonstrar a troca de informações entre páginas usando `localStorage`.

## Visão geral das páginas

### `index.html`

- Página inicial do site.
- Exibe slogan, descrição da hamburgueria, botão para acessar o cardápio e navegação para outras seções.
- Possui menu com links para `inicio`, `sobre nós`, `cardápio` e `contato`.
- Oferece troca de tema para a versão clara do site por meio de botão que redireciona para `HtmlLight/inicioLight.html`.

### `HtmlBlack/Cardapio.html`

- Página de cardápio com opções de smash burgers.
- Permite selecionar um lanche e armazenar o nome e preço em `localStorage`.
- Após a escolha, redireciona para `cardapioBebidas.html`.
- Exibe cards de produtos, fotos e descrição dos ingredientes.

### `HtmlBlack/cardapioBebidas.html`

- Página de bebidas do cardápio.
- Usuário escolhe uma bebida e os dados são salvos em `localStorage`.
- Após a seleção, redireciona para `cardapioAcompanhamentos.html`.
- Apresenta opções de bebidas com preço e imagem.

### `HtmlBlack/cardapioAcompanhamentos.html`

- Página de acompanhamentos.
- O usuário seleciona um acompanhamento e o valor total do pedido é calculado somando lanche + bebida + acompanhamento.
- O total é salvo em `localStorage` como `totalPedido`.
- Depois da escolha, redireciona para `cartao.html`.

### `HtmlBlack/cartao.html`

- Página de pagamento por cartão.
- Exibe o valor total do pedido capturado de `localStorage`.
- Contém formulário de dados do cartão (número, validade, CVV e parcelamento).
- O botão de pagamento está configurado para redirecionar à página inicial após a ação.

### `HtmlBlack/pix.html`

- Página de pagamento por PIX.
- Exibe o valor do pedido em PIX usando `localStorage`.
- Inclui QR code, código PIX para copiar e indicação de segurança.
- Botão de pagamento está disponível mas o fluxo segue como demonstrativo.

### `HtmlBlack/cadastro.html`

- Página de cadastro de usuário.
- Formulário com campos: nome, e-mail, telefone, senha e confirmação de senha.
- Validação em JavaScript verifica campos preenchidos e se as senhas coincidem.
- Ao cadastrar com sucesso, redireciona para `login.html`.

### `HtmlBlack/login.html`

- Página de login.
- Formulário com campos: e-mail, telefone e localização.
- Validação simples exige preenchimento de todos os campos.
- Após login, redireciona para a página inicial (`index.html`).

### `HtmlBlack/contato.html`

- Página de contato com informações da hamburgueria.
- Contém mapa integrado via `iframe`, endereço, telefone, e-mail e horário de funcionamento.
- Inclui rodapé com links para redes sociais.

### `HtmlLight/` (versão clara)

- Contém páginas equivalentes em tema claro para navegação alternativa.
- Inclui versões de: `inicioLight.html`, `CardapioLight.html`, `cardapioBebidasLight.html`, `cardapioAcompanhamentosLight.html`, `cartaoLight.html`, `pixLight.html`, `cadastroLight.html`, `loginLight.html`, `contatoLight.html`.
- Proporciona experiência visual diferente usando layout claro.

## Estrutura de arquivos

- `index.html` - homepage principal.
- `HtmlBlack/` - versão escura do site, com o fluxo principal das páginas de cardápio, pagamento, cadastro, login e contato.
- `HtmlLight/` - versão clara do site, disponível para alternar temas.
- `css/` - arquivos de estilo para cada página e temas.
- `cssLight/` - estilos da versão clara do site.
- `js/` - scripts JavaScript que controlam a interação entre páginas.
- `img/` - imagens usadas nas páginas.

## Scripts JavaScript principais

### `js/cadastro.js`

- Valida campos obrigatórios do formulário.
- Confirma se a senha e a confirmação da senha são iguais.
- Exibe alerta de sucesso e redireciona para `login.html`.

### `js/login.js`

- Verifica se os campos de e-mail, telefone e localização estão preenchidos.
- Se a validação passar, redireciona para `index.html`.
- Não valida credenciais reais; o fluxo é demonstrativo.

### `js/cartao.js`

- Lê `totalPedido` do `localStorage`.
- Exibe o valor total na página de pagamento por cartão.

### `js/pix.js`

- Lê `totalPedido` do `localStorage`.
- Mostra o valor total na área de pagamento PIX.

### `js/cardapio.js`

- Contém função simples que exibe alerta de produto adicionado.
- O fluxo principal de compras é realizado pelos scripts embutidos nas páginas de cardápio e acompanhamento.

## Fluxo de pedido

1. `index.html`
2. `HtmlBlack/Cardapio.html` → seleciona um smash burger
3. `HtmlBlack/cardapioBebidas.html` → seleciona uma bebida
4. `HtmlBlack/cardapioAcompanhamentos.html` → escolhe um acompanhamento e calcula o total
5. `HtmlBlack/cartao.html` ou `HtmlBlack/pix.html` → revisa o valor e finaliza

## Funcionalidades destacadas

- Fluxo de seleção de produtos por etapas.
- Persistência das opções escolhidas entre páginas usando `localStorage`.
- Exibição dinâmica do valor total do pedido.
- Validação de formulário simples para cadastro e login.
- Layout responsivo para dispositivos menores.
- Navegação lateral e top menu para facilitar o acesso às seções.

## Melhorias sugeridas

- Implementar armazenamento real de cadastro e autenticação segura.
- Validar dados do cartão de forma mais robusta e mascarar campos sensíveis.
- Criar um fluxo de confirmação final com resumo completo do pedido.
- Integrar o botão de pagamento PIX com a função de copiar o código ou gerar QR code dinamicamente.
- Sincronizar o tema claro/escuro usando JavaScript em vez de redirecionar para páginas separadas.

## Como executar

1. Abra `index.html` no navegador.
2. Navegue pelo menu ou use os links de navegação das páginas.
3. Escolha produtos no cardápio e siga para o pagamento.

## Observações finais

- O projeto é um site estático; não utiliza backend.
- O fluxo de pedido é demonstrativo e ideal para prototipagem de front-end.
- As versões `HtmlLight` oferecem tema claro como opção visual.

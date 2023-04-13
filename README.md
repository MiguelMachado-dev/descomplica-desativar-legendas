# descomplica-desativar-legendas

descomplica-desativar-legendas é uma extensão para navegadores baseados em Chromium e Firefox que verifica a presença do botão de legendas nos players da Descomplica. Se o botão não estiver clicado, a extensão clicará nele, desativando as legendas automáticas. Caso contrário, nada acontece. A extensão pode ser ativada ou desativada por meio do popup da extensão.

## Funcionalidades

- Verifica automaticamente se botão de legendas nos players da Descomplica está ativo ou não
- Clica no botão caso não esteja com as legendas desativadas
- Possibilidade de ativar ou desativar a extensão por meio do popup

## Como usar

### Instalação no Firefox

1. Acesse a página da extensão na loja de addons do Firefox: https://addons.mozilla.org/pt-BR/firefox/addon/desativar-legenda/
2. Clique no botão "Adicionar ao Firefox" para iniciar o processo de instalação.
3. Na janela que aparecerá, clique em "Adicionar" para confirmar a instalação da extensão.
4. Aguarde até que a instalação seja concluída e a mensagem de confirmação apareça.
5. A extensão "Desativar legenda" agora está pronta para ser usada.

### Instalação no Chromium (Google Chrome, Microsoft Edge, etc.)

1. Faça o download do arquivo ZIP da extensão clicando em "Code" e selecionando "Download ZIP" no repositório do GitHub.
2. Extraia o conteúdo do arquivo ZIP em uma pasta no seu computador.
3. No navegador, vá para `chrome://extensions`.
4. Ative o "Modo desenvolvedor" no canto superior direito da página.
5. Clique em "Carregar sem compactação" e selecione a pasta onde você extraiu os arquivos da extensão.
6. A extensão Desativar Legendas agora deve estar instalada e ativa.

## Como personalizar

Você pode personalizar a extensão editando os arquivos do projeto. Por exemplo, você pode ajustar o seletor do botão no arquivo `content.js` para selecionar o botão desejado com base no atributo `aria-label`. Altere o valor no seletor `querySelector`:

```javascript
const button = document.querySelector('[aria-label="valor-do-aria-label"]');
```

Lembre-se de substituir `"valor-do-aria-label"` pelo valor do atributo `aria-label` do botão que você deseja clicar.

## Licença
Este projeto é licenciado sob a [Licença MIT](./LICENSE).

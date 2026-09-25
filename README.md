# markdown-a4-renderer

Componente React que renderiza Markdown como uma folha A4: largura fixa
(`210mm`), altura livre — cresce conforme o conteúdo, sem paginação.

- Código publicável do componente: `src/lib/`
- App de demonstração (só para desenvolvimento local, `npm run dev`): `src/App.jsx`, `src/demo/`

## Desenvolver / testar localmente

```bash
npm install
npm run dev      # abre a demo em http://localhost:5173
npm run build    # gera src/lib/* → dist/ (ESM + CJS + CSS)
```

## Importar em outro projeto

### Opção A — dependência local (monorepo / projetos lado a lado)

No projeto consumidor:

```bash
npm install ../modulo-renderizador-de-md
```

Isso instala via `file:` link, usando o build gerado em `dist/` (rode `npm run build`
aqui antes). Qualquer novo `npm run build` aqui reflete no consumidor após um
`npm install` (ou `npm dedupe`) lá.

### Opção B — `npm link` (iteração rápida, sem reinstalar a cada build)

```bash
# aqui
npm run build
npm link

# no projeto consumidor
npm link markdown-a4-renderer
```

### Opção C — publicar em um registry (npm público ou privado)

```bash
npm run build
npm publish   # ajuste "name"/"version" em package.json antes, se necessário
```

## Uso

```jsx
import { MarkdownA4Renderer } from 'markdown-a4-renderer'
import 'markdown-a4-renderer/style.css'

function Documento({ markdown }) {
  return <MarkdownA4Renderer content={markdown} />
}
```

### Props

| Prop               | Tipo      | Padrão                      | Descrição                                                                |
| ------------------ | --------- | ---------------------------- | ------------------------------------------------------------------------ |
| `content`          | `string`  | `''`                         | Markdown a renderizar (suporta GFM: tabelas, `~~riscado~~`, task list).  |
| `pageWidth`        | `string`  | `'210mm'`                    | Largura da folha (unidade CSS livre: `mm`, `px`, etc).                   |
| `pageMinHeight`    | `string`  | `'297mm'`                    | Altura mínima da folha (ela cresce além disso conforme o conteúdo).      |
| `padding`          | `string`  | `'20mm'`                     | Margem interna da folha.                                                 |
| `showPrintButton`  | `boolean` | `true`                       | Mostra um botão flutuante que chama `window.print()`.                    |
| `printButtonLabel` | `string`  | `'Imprimir / Salvar PDF'`    | Texto do botão de impressão.                                             |
| `className`        | `string`  | `''`                         | Classe extra no wrapper externo (`.mdA4-viewport`).                      |
| `components`       | `object`  | —                             | Overrides de componentes do `react-markdown` (ex.: customizar `a`, `img`).|

A altura da folha **não é limitada** — cresce continuamente do topo ao fim do
conteúdo, sem paginação nem quebras.

### Imprimir / gerar PDF

O botão de imprimir chama `window.print()`. O CSS do componente já inclui as
regras de impressão necessárias para que **só a folha renderizada apareça no
PDF**, mesmo que o resto da página (menu, sidebar, botões, etc. do app que
está importando o componente) continue visível na tela — isso é feito
escondendo todo o `<body>` no modo impressão e revelando de volta apenas o
conteúdo dentro de `.mdA4-viewport`. Também é definido `@page { size: A4;
margin: 0 }`, para que a margem visual seja exatamente a `padding` da folha,
sem a margem padrão que o navegador adiciona.

No diálogo de impressão do navegador, basta escolher o destino **"Salvar como
PDF"** em vez de uma impressora física. Não é necessário nenhuma biblioteca de
geração de PDF — o próprio navegador faz a conversão usando o layout que já
está na tela.

Se preferir seu próprio botão/gatilho em vez do incluso, defina
`showPrintButton={false}` e chame `window.print()` de onde quiser — o CSS de
impressão continua funcionando normalmente.

### Customizando a aparência

As variáveis de fonte/cor podem ser sobrescritas via CSS (definidas em
`.mdA4-page`): `--mdA4-font-family`, `--mdA4-font-size`, `--mdA4-line-height`,
`--mdA4-text-color`, `--mdA4-mono-font`.

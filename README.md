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
  return <MarkdownA4Renderer content={markdown} showPageGuides />
}
```

### Props

| Prop             | Tipo      | Padrão    | Descrição                                                                 |
| ---------------- | --------- | --------- | -------------------------------------------------------------------------- |
| `content`        | `string`  | `''`      | Markdown a renderizar (suporta GFM: tabelas, `~~riscado~~`, task list).    |
| `pageWidth`      | `string`  | `'210mm'` | Largura da folha (unidade CSS livre: `mm`, `px`, etc).                     |
| `pageMinHeight`  | `string`  | `'297mm'` | Altura mínima e também o espaçamento das guias de quebra de página.        |
| `padding`        | `string`  | `'20mm'`  | Margem interna da folha.                                                   |
| `showPageGuides` | `boolean` | `false`   | Mostra linhas tracejadas a cada `pageMinHeight`, simulando onde cada folha A4 terminaria na impressão. |
| `className`      | `string`  | `''`      | Classe extra no wrapper externo (`.mdA4-viewport`).                        |
| `components`     | `object`  | —         | Overrides de componentes do `react-markdown` (ex.: customizar `a`, `img`). |

A altura da folha **não é limitada** — ela cresce com o conteúdo. `pageMinHeight`
só define a altura mínima de uma folha vazia e o intervalo das guias visuais;
não trunca nem pagina o conteúdo.

### Customizando a aparência

As variáveis de fonte/cor podem ser sobrescritas via CSS (definidas em
`.mdA4-page`): `--mdA4-font-family`, `--mdA4-font-size`, `--mdA4-line-height`,
`--mdA4-text-color`, `--mdA4-mono-font`.

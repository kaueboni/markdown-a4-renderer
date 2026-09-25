# Relatório de Exemplo

Este documento demonstra o **Markdown A4 Renderer**: a folha mantém a largura de uma
página A4 (`210mm`), mas a altura cresce livremente conforme o conteúdo — sem paginação,
como uma rolagem contínua.

## 1. Texto e ênfase

Markdown padrão funciona normalmente: **negrito**, *itálico*, ~~riscado~~ e `código inline`.

> "A simplicidade é o último grau de sofisticação." — citação em bloco para destacar trechos importantes.

## 2. Listas

- Item simples
- Segundo item
  - Sub-item aninhado
  - Outro sub-item
- [x] Tarefa concluída
- [ ] Tarefa pendente

1. Primeiro passo
2. Segundo passo
3. Terceiro passo

## 3. Código

```js
function ola(nome) {
  return `Olá, ${nome}!`
}

console.log(ola('mundo'))
```

## 4. Tabela

| Recurso            | Suportado |
| ------------------ | --------- |
| Tabelas (GFM)       | ✅        |
| Listas de tarefas   | ✅        |
| Riscado             | ✅        |
| HTML bruto          | ⚠️ opcional |

## 5. Conteúdo longo

Os parágrafos abaixo existem só para empurrar o conteúdo além de uma única folha A4 e
mostrar que a página realmente cresce sem limite.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
possimus, omnis voluptas assumenda est, omnis dolor repellendus.

Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.

## 6. Final

Se você está lendo isto e ainda vê a folha branca continuando (com o fundo cinza ao redor),
o comportamento de "altura infinita" está funcionando como esperado.

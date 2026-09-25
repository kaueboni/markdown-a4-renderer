import { useState } from 'react'
import { MarkdownA4Renderer } from './lib'
import sampleMarkdown from './demo/sample.md?raw'
import './demo/demo.css'

function App() {
  const [content, setContent] = useState(sampleMarkdown)

  return (
    <div className="demo-layout">
      <aside className="demo-sidebar">
        <h1>Markdown A4 Renderer</h1>
        <p>
          Este é um app de demonstração local para o módulo. O componente
          publicável fica em <code>src/lib</code>.
        </p>
        <textarea
          className="demo-textarea"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          spellCheck={false}
        />
      </aside>
      <main className="demo-preview">
        <MarkdownA4Renderer content={content} />
      </main>
    </div>
  )
}

export default App

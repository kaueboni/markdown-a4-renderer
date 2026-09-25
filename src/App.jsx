import { useState } from 'react'
import { MarkdownA4Renderer } from './lib'
import sampleMarkdown from './demo/sample.md?raw'
import './demo/demo.css'

function App() {
  const [content, setContent] = useState(sampleMarkdown)
  const [showGuides, setShowGuides] = useState(true)

  return (
    <div className="demo-layout">
      <aside className="demo-sidebar">
        <h1>Markdown A4 Renderer</h1>
        <p>
          Este é um app de demonstração local para o módulo. O componente
          publicável fica em <code>src/lib</code>.
        </p>
        <label className="demo-toggle">
          <input
            type="checkbox"
            checked={showGuides}
            onChange={(event) => setShowGuides(event.target.checked)}
          />
          Mostrar guias de quebra de página (297mm)
        </label>
        <textarea
          className="demo-textarea"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          spellCheck={false}
        />
      </aside>
      <main className="demo-preview">
        <MarkdownA4Renderer content={content} showPageGuides={showGuides} />
      </main>
    </div>
  )
}

export default App

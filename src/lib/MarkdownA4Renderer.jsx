import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './MarkdownA4Renderer.css'

/**
 * Renders Markdown content as a single paper-like A4 sheet: fixed width,
 * height grows without limit to fit the content (no pagination, no breaks).
 *
 * @param {object} props
 * @param {string} props.content - Raw markdown source.
 * @param {string} [props.className] - Extra class on the outer viewport wrapper.
 * @param {string} [props.pageWidth] - CSS length for the page width (default '210mm').
 * @param {string} [props.pageMinHeight] - CSS length for the page's minimum height
 *   (default '297mm'). The page grows taller than this to fit longer content.
 * @param {string} [props.padding] - CSS length for the page's inner padding (default '20mm').
 * @param {object} [props.components] - Custom react-markdown component overrides.
 */
export function MarkdownA4Renderer({
  content = '',
  className = '',
  pageWidth = '210mm',
  pageMinHeight = '297mm',
  padding = '20mm',
  components,
}) {
  const pageStyle = {
    '--mdA4-page-width': pageWidth,
    '--mdA4-page-min-height': pageMinHeight,
    '--mdA4-page-padding': padding,
  }

  return (
    <div className={['mdA4-viewport', className].filter(Boolean).join(' ')}>
      <div className="mdA4-page" style={pageStyle}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownA4Renderer

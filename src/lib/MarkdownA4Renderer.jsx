import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './MarkdownA4Renderer.css'

/**
 * Renders Markdown content as a paper-like A4 sheet whose width is fixed
 * but whose height grows without limit to fit the content (no pagination).
 *
 * @param {object} props
 * @param {string} props.content - Raw markdown source.
 * @param {string} [props.className] - Extra class on the outer viewport wrapper.
 * @param {string} [props.pageWidth] - CSS length for the page width (default '210mm').
 * @param {string} [props.pageMinHeight] - CSS length used as the minimum height and as
 *   the spacing between the optional page-break guide lines (default '297mm').
 * @param {string} [props.padding] - CSS length for the page's inner padding (default '20mm').
 * @param {boolean} [props.showPageGuides] - Draw faint horizontal lines every
 *   `pageMinHeight` to preview where physical page breaks would fall when printed.
 * @param {object} [props.components] - Custom react-markdown component overrides.
 */
export function MarkdownA4Renderer({
  content = '',
  className = '',
  pageWidth = '210mm',
  pageMinHeight = '297mm',
  padding = '20mm',
  showPageGuides = false,
  components,
}) {
  const pageStyle = {
    '--mdA4-page-width': pageWidth,
    '--mdA4-page-min-height': pageMinHeight,
    '--mdA4-page-padding': padding,
  }

  const pageClassName = [
    'mdA4-page',
    showPageGuides ? 'mdA4-page--guides' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={['mdA4-viewport', className].filter(Boolean).join(' ')}>
      <div className={pageClassName} style={pageStyle}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownA4Renderer

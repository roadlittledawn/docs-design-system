import { visit } from 'unist-util-visit'

export default function remarkHeadingFromFrontmatter() {
  return (tree) => {
    let title = null

    visit(tree, 'yaml', (node) => {
      const match = node.value?.match(/^title:\s*(.+)$/m)
      if (match) {
        title = match[1].trim().replace(/^['"]|['"]$/g, '')
      }
    })

    if (title) {
      tree.children.unshift({
        type: 'heading',
        depth: 1,
        children: [{ type: 'text', value: title }],
      })
    }
  }
}

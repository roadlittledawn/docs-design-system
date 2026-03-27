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
      const headingNode = {
        type: 'heading',
        depth: 1,
        children: [{ type: 'text', value: title }],
      }

      // Insert the heading after any leading YAML frontmatter nodes
      let insertIndex = 0
      while (
        insertIndex < tree.children.length &&
        tree.children[insertIndex] &&
        tree.children[insertIndex].type === 'yaml'
      ) {
        insertIndex++
      }

      tree.children.splice(insertIndex, 0, headingNode)
    }
  }
}

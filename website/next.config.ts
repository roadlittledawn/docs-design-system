import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import { fileURLToPath } from 'url'

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['@roadlittledawn/docs-design-system'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-frontmatter', fileURLToPath(new URL('./plugins/remark-heading-from-frontmatter.mjs', import.meta.url)), 'remark-mdx-frontmatter'],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig);

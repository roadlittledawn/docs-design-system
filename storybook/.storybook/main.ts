import type { StorybookConfig } from "@storybook/react-vite";
import { join } from "path";

const config: StorybookConfig = {
  stories: [
    "../../packages/react/src/**/*.mdx",
    "../../packages/react/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // process.cwd() is the storybook directory when storybook runs
    const storybookDir = process.cwd();
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@roadlittledawn/docs-design-system-react/styles.css": join(
        storybookDir,
        "../packages/react/dist/styles.css",
      ),
      "@roadlittledawn/docs-design-system-react": join(
        storybookDir,
        "../packages/react/src",
      ),
    };
    return config;
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes("node_modules");
        }
        return true;
      },
    },
  },
};

export default config;

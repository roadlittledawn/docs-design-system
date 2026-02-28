import type { StorybookConfig } from "@storybook/react-vite";
import { join } from "path";
import { fileURLToPath } from "url";

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
    const dir = fileURLToPath(new URL(".", import.meta.url));
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@roadlittledawn/docs-design-system-react/styles.css": join(
        dir,
        "../../packages/react/dist/styles.css",
      ),
      "@roadlittledawn/docs-design-system-react": join(
        dir,
        "../../packages/react/src",
      ),
    };
    return config;
  },
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

import type { Preview } from "@storybook/react";
import "@roadlittledawn/docs-design-system-react/dist/styles.css";
import "./global.css";

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        type: "dynamic",
        language: "tsx",
      },
      toc: {
        contentsSelector: ".sbdocs-content",
        headingSelector: "h2, h3",
        title: "Table of Contents",
      },
      theme: "dark",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1a1a" },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "dark",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "dark";
      return (
        <div data-dds-theme={theme}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;

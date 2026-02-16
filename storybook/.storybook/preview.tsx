import React from "react";
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
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    backgrounds: { disable: true },
  },
  initialGlobals: {
    theme: "dark",
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "dark";

      // Apply theme to document root
      React.useEffect(() => {
        document.documentElement.setAttribute("data-dds-theme", theme);
      }, [theme]);

      return <Story />;
    },
  ],
};

export default preview;

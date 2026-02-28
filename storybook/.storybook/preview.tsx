import React from "react";
import type { Preview } from "@storybook/react";
import "@roadlittledawn/docs-design-system-react/styles.css";
import "./global.css";

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        language: "tsx",
        type: "dynamic",
        transform: (code: string, storyContext: any) => {
          // For args-based stories, generate clean JSX
          const { component, args, parameters } = storyContext;
          
          // If story has custom render, use the extracted code
          if (parameters?.docs?.source?.code || !args || Object.keys(args).length === 0) {
            return code;
          }
          
          if (!component) return code;
          
          const componentName = component.displayName || component.name;
          if (!componentName) return code;
          
          const props = Object.entries(args)
            .map(([key, value]) => {
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'boolean') return value ? key : '';
              if (typeof value === 'number') return `${key}={${value}}`;
              return `${key}={${JSON.stringify(value)}}`;
            })
            .filter(Boolean);
          
          if (props.length === 0) return `<${componentName} />`;
          if (props.length === 1) return `<${componentName} ${props[0]} />`;
          
          return `<${componentName}\n  ${props.join('\n  ')}\n/>`;
        },
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

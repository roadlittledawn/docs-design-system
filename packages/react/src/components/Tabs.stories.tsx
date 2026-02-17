import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabList, Tab, TabPanel } from "./Tabs";
import { CodeBlock } from "./CodeBlock";

/**
 * Tabs organize and segment related content, reducing cognitive load by allowing users
 * to toggle between views without navigating to new pages.
 */
const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Tabs are best used to organize, segment, and reduce cognitive load when presenting large amounts of related but distinct content.

## When to Use

- **Segmenting Related Alternatives**: Show different solutions for the same task (e.g., code examples in Python, Java, JavaScript)
- **Managing Complex/Long Documents**: Break down extensive documentation into smaller, more manageable sections
- **Context-Switching**: Allow users to switch between different views (e.g., "Overview," "Usage," "API Reference") while staying in the same context
- **Organizing Workflows**: Separate complex workflows, such as student work from instructions, or setup steps from troubleshooting
- **Reducing Clutter**: Hide non-essential or less frequently used information, showing only relevant details at one time

## When Not to Use

- When content is short and can be easily scrolled
- When users need to compare all content simultaneously
- If the information in the tabs is not related
- For navigation between pages (use Link component instead)

## Best Practices

- **Default View**: Always set a logical default tab (e.g., the most commonly used language or platform)
- **Clear Labels**: Ensure tab labels are concise, descriptive, and clearly distinguish between options
- **Limit Number**: Avoid using too many tabs (more than 5-6 can clutter the interface)
- **Avoid Nested Tabs**: Too many levels of navigation can confuse users

## Tabs vs Collapsers

Use **tabs** for a small number of distinct, parallel content sections where users rarely need to compare them simultaneously. Use **collapsers** (accordions) for long, vertical content, mobile-first layouts, or FAQs to minimize scrolling and allow users to see all options at once.

## Accessibility

- Uses proper ARIA attributes (\`role="tab"\`, \`role="tabpanel"\`, \`aria-selected\`)
- Tab buttons are keyboard accessible
- Active tab is clearly indicated visually and to screen readers
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/**
 * Basic tabs with three sections of content.
 */
export const Basic: Story = {
  args: {
    defaultActiveTab: "overview",
  },
  parameters: {
    docs: {
      source: {
        code: `<Tabs defaultActiveTab="overview">
  <TabList>
    <Tab id="overview">Overview</Tab>
    <Tab id="usage">Usage</Tab>
    <Tab id="api">API Reference</Tab>
  </TabList>
  <TabPanel id="overview">
    <p>
      This is the overview section. It provides a high-level introduction
      to the topic.
    </p>
  </TabPanel>
  <TabPanel id="usage">
    <p>
      This is the usage section. It contains practical examples and
      instructions.
    </p>
  </TabPanel>
  <TabPanel id="api">
    <p>
      This is the API reference section. It documents the technical
      interface.
    </p>
  </TabPanel>
</Tabs>`,
      },
    },
  },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab id="overview">Overview</Tab>
        <Tab id="usage">Usage</Tab>
        <Tab id="api">API Reference</Tab>
      </TabList>
      <TabPanel id="overview">
        <p>
          This is the overview section. It provides a high-level introduction to
          the topic.
        </p>
      </TabPanel>
      <TabPanel id="usage">
        <p>
          This is the usage section. It contains practical examples and
          instructions.
        </p>
      </TabPanel>
      <TabPanel id="api">
        <p>
          This is the API reference section. It documents the technical
          interface.
        </p>
      </TabPanel>
    </Tabs>
  ),
};

/**
 * Tabs showing code examples in different programming languages.
 */
export const CodeExamples: Story = {
  args: {
    defaultActiveTab: "javascript",
  },
  parameters: {
    docs: {
      source: {
        code: `<Tabs defaultActiveTab="javascript">
  <TabList>
    <Tab id="javascript">JavaScript</Tab>
    <Tab id="python">Python</Tab>
    <Tab id="java">Java</Tab>
  </TabList>
  <TabPanel id="javascript">
    <CodeBlock 
      language="javascript" 
      code={\`const greeting = "Hello, world!";
console.log(greeting);\`} 
    />
  </TabPanel>
  <TabPanel id="python">
    <CodeBlock 
      language="python" 
      code={\`greeting = "Hello, world!"
print(greeting)\`} 
    />
  </TabPanel>
  <TabPanel id="java">
    <CodeBlock 
      language="java" 
      code={\`String greeting = "Hello, world!";
System.out.println(greeting);\`} 
    />
  </TabPanel>
</Tabs>`,
      },
    },
  },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab id="javascript">JavaScript</Tab>
        <Tab id="python">Python</Tab>
        <Tab id="java">Java</Tab>
      </TabList>
      <TabPanel id="javascript">
        <CodeBlock
          language="javascript"
          code={`const greeting = "Hello, world!";
console.log(greeting);`}
        />
      </TabPanel>
      <TabPanel id="python">
        <CodeBlock
          language="python"
          code={`greeting = "Hello, world!"
print(greeting)`}
        />
      </TabPanel>
      <TabPanel id="java">
        <CodeBlock
          language="java"
          code={`String greeting = "Hello, world!";
System.out.println(greeting);`}
        />
      </TabPanel>
    </Tabs>
  ),
};

/**
 * Tabs with longer content demonstrating scrollable tab list.
 */
export const ManyTabs: Story = {
  args: {
    defaultActiveTab: "tab1",
  },
  parameters: {
    docs: {
      source: {
        code: `<Tabs defaultActiveTab="tab1">
  <TabList>
    <Tab id="tab1">Introduction</Tab>
    <Tab id="tab2">Getting Started</Tab>
    <Tab id="tab3">Configuration</Tab>
    <Tab id="tab4">Advanced Usage</Tab>
    <Tab id="tab5">Troubleshooting</Tab>
    <Tab id="tab6">FAQ</Tab>
  </TabList>
  <TabPanel id="tab1">
    <p>Introduction content goes here.</p>
  </TabPanel>
  <TabPanel id="tab2">
    <p>Getting started content goes here.</p>
  </TabPanel>
  <TabPanel id="tab3">
    <p>Configuration content goes here.</p>
  </TabPanel>
  <TabPanel id="tab4">
    <p>Advanced usage content goes here.</p>
  </TabPanel>
  <TabPanel id="tab5">
    <p>Troubleshooting content goes here.</p>
  </TabPanel>
  <TabPanel id="tab6">
    <p>FAQ content goes here.</p>
  </TabPanel>
</Tabs>`,
      },
    },
  },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab id="tab1">Introduction</Tab>
        <Tab id="tab2">Getting Started</Tab>
        <Tab id="tab3">Configuration</Tab>
        <Tab id="tab4">Advanced Usage</Tab>
        <Tab id="tab5">Troubleshooting</Tab>
        <Tab id="tab6">FAQ</Tab>
      </TabList>
      <TabPanel id="tab1">
        <p>Introduction content goes here.</p>
      </TabPanel>
      <TabPanel id="tab2">
        <p>Getting started content goes here.</p>
      </TabPanel>
      <TabPanel id="tab3">
        <p>Configuration content goes here.</p>
      </TabPanel>
      <TabPanel id="tab4">
        <p>Advanced usage content goes here.</p>
      </TabPanel>
      <TabPanel id="tab5">
        <p>Troubleshooting content goes here.</p>
      </TabPanel>
      <TabPanel id="tab6">
        <p>FAQ content goes here.</p>
      </TabPanel>
    </Tabs>
  ),
};

/**
 * Controlled tabs where the active tab is managed by parent component state.
 */
export const Controlled: Story = {
  render: function ControlledExample() {
    const [activeTab, setActiveTab] = React.useState("tab1");

    return (
      <div>
        <p style={{ marginBottom: "1rem", color: "var(--dds-tabs-panel-text)" }}>
          Active tab: <strong>{activeTab}</strong>
        </p>
        <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
          <TabList>
            <Tab id="tab1">Tab 1</Tab>
            <Tab id="tab2">Tab 2</Tab>
            <Tab id="tab3">Tab 3</Tab>
          </TabList>
          <TabPanel id="tab1">
            <p>Content for tab 1</p>
          </TabPanel>
          <TabPanel id="tab2">
            <p>Content for tab 2</p>
          </TabPanel>
          <TabPanel id="tab3">
            <p>Content for tab 3</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  },
};

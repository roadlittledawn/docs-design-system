import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A hover/tap-activated popover for enriching inline content in documentation.
Built on the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) for reliable top-layer rendering — no z-index wars, no overflow clipping.

Common use cases include glossary term definitions and Wikipedia-style content previews.

## Content modes

The \`Popover\` supports three mutually exclusive content modes, checked in this order:

1. **\`content\`** — arbitrary \`ReactNode\`; you control everything
2. **\`glossary\`** — structured \`{ term, title, definition }\` template
3. **\`preview\`** — structured \`{ title, excerpt, imageUrl, href }\` template

## When to Use

- Inline term definitions that would interrupt reading flow if expanded in-place
- Link previews that let users get context without navigating away
- Any contextual content that benefits from being on-demand rather than always visible

## When Not to Use

- For critical information users must read — use a \`Callout\` instead
- As a primary navigation mechanism
- For content that needs persistent visibility

## Mobile behavior

On screens ≤ 640 px the popover renders as a bottom sheet instead of a floating panel.
Hover events don't apply; the popover toggles on tap.

## Accessibility

- Trigger has \`tabIndex={0}\` and shows the popover on focus (keyboard accessible)
- Popover panel has \`role="tooltip"\` and is linked via \`aria-describedby\`
- The native Popover API handles Escape-key dismissal automatically
- Light-dismiss (click outside) is provided by \`popover="auto"\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

/**
 * The glossary template renders a structured definition popover.
 * The `definition` field accepts `ReactNode` — pre-render any markdown
 * using your preferred renderer before passing it in.
 */
export const GlossaryDefinition: Story = {
  args: {
    glossary: {
      term: "observability",
      title: "Observability",
      definition: (
        <>
          The ability to understand the internal state of a system by examining
          its external outputs — primarily{" "}
          <a href="https://example.com/metrics">metrics</a>, logs, and traces.
        </>
      ),
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<Popover
  glossary={{
    term: "observability",
    title: "Observability",
    definition: (
      <>
        The ability to understand the internal state of a system by examining
        its external outputs — primarily{" "}
        <a href="https://example.com/metrics">metrics</a>, logs, and traces.
      </>
    ),
  }}
>
  observability
</Popover>`,
      },
    },
  },
  render: (args) => (
    <p style={{ fontFamily: "sans-serif", fontSize: "1rem", color: "var(--dds-tabs-panel-text)" }}>
      Modern software reliability depends on{" "}
      <Popover {...args}>observability</Popover> to diagnose production issues
      quickly.
    </p>
  ),
};

/**
 * The preview template renders a Wikipedia-style content preview with an
 * optional featured image, excerpt, and "Read more" link.
 */
export const ContentPreview: Story = {
  args: {
    preview: {
      title: "New Relic",
      excerpt:
        "New Relic is an observability platform that helps engineers plan, build, deploy, and run software. Over 17,000 customers use New Relic to improve uptime, performance, and operational efficiency.",
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&q=80",
      href: "https://newrelic.com",
      linkText: "Read more",
    },
    size: "lg",
  },
  parameters: {
    docs: {
      source: {
        code: `<Popover
  size="lg"
  preview={{
    title: "New Relic",
    excerpt: "New Relic is an observability platform that helps engineers plan, build, deploy, and run software.",
    imageUrl: "/images/newrelic.jpg",
    href: "https://newrelic.com",
    linkText: "Read more",
  }}
>
  New Relic
</Popover>`,
      },
    },
  },
  render: (args) => (
    <p style={{ fontFamily: "sans-serif", fontSize: "1rem", color: "var(--dds-tabs-panel-text)" }}>
      The monitoring data is sent to <Popover {...args}>New Relic</Popover>{" "}
      where you can build dashboards and alerts.
    </p>
  ),
};

/**
 * Pass any React element as the `content` prop when the built-in templates
 * don't fit your use case.
 */
export const CustomContent: Story = {
  args: {
    content: (
      <div style={{ padding: "1rem" }}>
        <strong style={{ display: "block", marginBottom: "0.5rem" }}>
          API Rate Limits
        </strong>
        <table style={{ fontSize: "0.8125rem", borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", paddingBottom: "0.25rem", borderBottom: "1px solid #e5e7eb" }}>Plan</th>
              <th style={{ textAlign: "right", paddingBottom: "0.25rem", borderBottom: "1px solid #e5e7eb" }}>Req/min</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Free</td><td style={{ textAlign: "right" }}>60</td></tr>
            <tr><td>Pro</td><td style={{ textAlign: "right" }}>1,000</td></tr>
            <tr><td>Enterprise</td><td style={{ textAlign: "right" }}>Unlimited</td></tr>
          </tbody>
        </table>
      </div>
    ),
    size: "md",
  },
  parameters: {
    docs: {
      source: {
        code: `<Popover
  content={
    <div style={{ padding: "1rem" }}>
      <strong>API Rate Limits</strong>
      {/* custom table or any JSX */}
    </div>
  }
>
  rate limits
</Popover>`,
      },
    },
  },
  render: (args) => (
    <p style={{ fontFamily: "sans-serif", fontSize: "1rem", color: "var(--dds-tabs-panel-text)" }}>
      Each API key is subject to <Popover {...args}>rate limits</Popover> based
      on your subscription plan.
    </p>
  ),
};

/**
 * Size variants — sm (240px), md (320px), lg (480px).
 */
export const Sizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Popover size="sm" glossary={{ term: "sm", title: "Small (240px)", definition: "A compact popover for brief definitions." }}>
  small
</Popover>

<Popover size="md" glossary={{ term: "md", title: "Medium (320px)", definition: "The default size, suitable for most glossary and preview use cases." }}>
  medium
</Popover>

<Popover size="lg" glossary={{ term: "lg", title: "Large (480px)", definition: "A wider panel for rich content previews with images or tables." }}>
  large
</Popover>`,
      },
    },
  },
  render: () => (
    <div
      style={{
        fontFamily: "sans-serif",
        fontSize: "1rem",
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        color: "var(--dds-tabs-panel-text)",
      }}
    >
      <Popover
        size="sm"
        glossary={{
          term: "sm",
          title: "Small (240px)",
          definition: "A compact popover for brief definitions.",
        }}
      >
        small
      </Popover>
      <Popover
        size="md"
        glossary={{
          term: "md",
          title: "Medium (320px)",
          definition:
            "The default size, suitable for most glossary and preview use cases.",
        }}
      >
        medium
      </Popover>
      <Popover
        size="lg"
        glossary={{
          term: "lg",
          title: "Large (480px)",
          definition:
            "A wider panel for rich content previews with images or tables.",
        }}
      >
        large
      </Popover>
    </div>
  ),
};

/**
 * Placement variants control which side of the trigger the popover appears on.
 * "auto" (default) detects available viewport space.
 */
export const Placement: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Popover placement="top" glossary={...}>shows above</Popover>
<Popover placement="bottom" glossary={...}>shows below</Popover>
<Popover placement="top-start" glossary={...}>top-start</Popover>
<Popover placement="bottom-end" glossary={...}>bottom-end</Popover>`,
      },
    },
  },
  render: () => (
    <div
      style={{
        fontFamily: "sans-serif",
        fontSize: "1rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        padding: "6rem 2rem",
        color: "var(--dds-tabs-panel-text)",
      }}
    >
      {(
        [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
        ] as const
      ).map((p) => (
        <Popover
          key={p}
          placement={p}
          glossary={{
            term: p,
            title: `placement="${p}"`,
            definition: `The popover opens ${p.replace("-", " ")} relative to its trigger.`,
          }}
        >
          {p}
        </Popover>
      ))}
    </div>
  ),
};

/**
 * Multiple popovers in a paragraph — only one can be open at a time
 * (native Popover API `popover="auto"` behaviour).
 */
export const InlineParagraph: Story = {
  parameters: {
    docs: {
      source: {
        code: `<p>
  <Popover glossary={{ term: "apm", title: "APM", definition: "Application Performance Monitoring..." }}>APM</Popover>
  {" "}data flows into{" "}
  <Popover preview={{ title: "New Relic", excerpt: "...", href: "https://newrelic.com" }}>New Relic</Popover>
  {" "}where you can configure{" "}
  <Popover glossary={{ term: "alert", title: "Alert", definition: "A notification triggered when a signal crosses a threshold." }}>alerts</Popover>.
</p>`,
      },
    },
  },
  render: () => (
    <p style={{ fontFamily: "sans-serif", fontSize: "1rem", maxWidth: "480px", lineHeight: 1.7, color: "var(--dds-tabs-panel-text)", margin: 0 }}>
      <Popover
        glossary={{
          term: "apm",
          title: "APM",
          definition:
            "Application Performance Monitoring — tracks the performance of software applications and their underlying infrastructure.",
        }}
      >
        APM
      </Popover>{" "}
      data flows into{" "}
      <Popover
        preview={{
          title: "New Relic",
          excerpt:
            "New Relic is an observability platform used by over 17,000 customers.",
          href: "https://newrelic.com",
        }}
      >
        New Relic
      </Popover>{" "}
      where you can configure{" "}
      <Popover
        glossary={{
          term: "alert",
          title: "Alert",
          definition:
            "A notification triggered when a metric or signal crosses a defined threshold.",
        }}
      >
        alerts
      </Popover>{" "}
      to notify your on-call team.
    </p>
  ),
};

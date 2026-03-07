import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from "./Table";

/**
 * Table displays structured data in rows and columns. It supports sortable
 * columns, a sticky header, a borderless variant, and responsive horizontal
 * scrolling for mobile viewports.
 */
const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "borderless"],
      description:
        '`"default"` renders all borders; `"borderless"` shows only row top/bottom borders.',
      table: { defaultValue: { summary: '"default"' } },
    },
    stickyHeader: {
      control: "boolean",
      description: "When true the thead sticks to the top of the viewport while scrolling.",
      table: { defaultValue: { summary: "false" } },
    },
    headerBg: {
      control: "color",
      description:
        "Background color applied to the header row. Accepts any valid CSS color value.",
    },
    onSort: {
      control: false,
      description:
        "Callback fired when a sortable column header is clicked. Useful for server-side sorting.",
    },
    children: {
      control: false,
      description: "Table content — typically `TableHead` and `TableBody`.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes applied to the outer wrapper.",
      table: { defaultValue: { summary: '""' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Table displays structured, relational data in rows and columns for technical documentation pages.

## When to Use

- Displaying configuration options, API parameters, or reference data
- Comparing multiple items across the same set of attributes
- Presenting tabular data that users may want to sort or scan quickly

## When Not to Use

- For layout purposes — use CSS Grid or Flexbox instead
- When data has fewer than two columns (use a list instead)
- When rows have vastly different data shapes

## Accessibility

- \`<th>\` elements have \`scope="col"\` for screen readers
- Sortable headers expose \`aria-sort\` (\`ascending\`, \`descending\`, or \`none\`)
- Sortable headers are focusable via keyboard and respond to Enter/Space
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// -----------------------------------------------------------------------
// Shared sample data
// -----------------------------------------------------------------------

interface Employee {
  name: string;
  role: string;
  department: string;
  status: string;
}

const employees: Employee[] = [
  { name: "Alice Johnson", role: "Engineer", department: "Platform", status: "Active" },
  { name: "Bob Smith", role: "Designer", department: "UX", status: "Active" },
  { name: "Carol White", role: "Manager", department: "Platform", status: "On Leave" },
  { name: "Dan Brown", role: "Engineer", department: "Frontend", status: "Active" },
  { name: "Eve Davis", role: "Analyst", department: "Data", status: "Inactive" },
];

// -----------------------------------------------------------------------
// Default
// -----------------------------------------------------------------------

/**
 * A basic table with all borders (the default variant).
 */
export const Default: Story = {
  args: {
    variant: "default",
    stickyHeader: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
      <TableHeaderCell>Department</TableHeaderCell>
      <TableHeaderCell>Status</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Alice Johnson</TableCell>
      <TableCell>Engineer</TableCell>
      <TableCell>Platform</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.map((e) => (
          <TableRow key={e.name}>
            <TableCell>{e.name}</TableCell>
            <TableCell>{e.role}</TableCell>
            <TableCell>{e.department}</TableCell>
            <TableCell>{e.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// -----------------------------------------------------------------------
// Borderless
// -----------------------------------------------------------------------

/**
 * Borderless variant — only row dividers are shown; no outer or column borders.
 * Common in modern documentation sites.
 */
export const Borderless: Story = {
  args: {
    variant: "borderless",
  },
  parameters: {
    docs: {
      source: {
        code: `<Table variant="borderless">
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
      <TableHeaderCell>Department</TableHeaderCell>
      <TableHeaderCell>Status</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {/* rows */}
  </TableBody>
</Table>`,
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.map((e) => (
          <TableRow key={e.name}>
            <TableCell>{e.name}</TableCell>
            <TableCell>{e.role}</TableCell>
            <TableCell>{e.department}</TableCell>
            <TableCell>{e.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// -----------------------------------------------------------------------
// Sortable (client-side)
// -----------------------------------------------------------------------

/**
 * Sortable columns — clicking a column header sorts the table ascending then
 * descending, and a third click resets sort order.
 */
export const Sortable: Story = {
  parameters: {
    docs: {
      source: {
        code: `function SortableExample() {
  const [rows, setRows] = React.useState(data);

  const handleSort = (key, direction) => {
    if (!direction) {
      setRows(data);
      return;
    }
    const sorted = [...rows].sort((a, b) => {
      const cmp = a[key].localeCompare(b[key]);
      return direction === 'asc' ? cmp : -cmp;
    });
    setRows(sorted);
  };

  return (
    <Table onSort={handleSort}>
      <TableHead>
        <TableRow>
          <TableHeaderCell sortKey="name">Name</TableHeaderCell>
          <TableHeaderCell sortKey="role">Role</TableHeaderCell>
          <TableHeaderCell sortKey="department">Department</TableHeaderCell>
          <TableHeaderCell sortKey="status">Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((e) => (
          <TableRow key={e.name}>
            <TableCell>{e.name}</TableCell>
            <TableCell>{e.role}</TableCell>
            <TableCell>{e.department}</TableCell>
            <TableCell>{e.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`,
      },
    },
  },
  render: function SortableExample() {
    const [rows, setRows] = useState<Employee[]>(employees);

    const handleSort = (key: string, direction: "asc" | "desc" | null) => {
      if (!direction) {
        setRows(employees);
        return;
      }
      const sorted = [...rows].sort((a, b) => {
        const aVal = a[key as keyof Employee];
        const bVal = b[key as keyof Employee];
        const cmp = aVal.localeCompare(bVal);
        return direction === "asc" ? cmp : -cmp;
      });
      setRows(sorted);
    };

    return (
      <Table onSort={handleSort}>
        <TableHead>
          <TableRow>
            <TableHeaderCell sortKey="name">Name</TableHeaderCell>
            <TableHeaderCell sortKey="role">Role</TableHeaderCell>
            <TableHeaderCell sortKey="department">Department</TableHeaderCell>
            <TableHeaderCell sortKey="status">Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((e) => (
            <TableRow key={e.name}>
              <TableCell>{e.name}</TableCell>
              <TableCell>{e.role}</TableCell>
              <TableCell>{e.department}</TableCell>
              <TableCell>{e.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// -----------------------------------------------------------------------
// Sticky Header
// -----------------------------------------------------------------------

/**
 * Sticky header — the thead stays fixed at the top of the viewport as the
 * user scrolls through a long table.
 */
export const StickyHeader: Story = {
  args: {
    stickyHeader: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Table stickyHeader>
  <TableHead>
    <TableRow>
      <TableHeaderCell>#</TableHeaderCell>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {/* many rows */}
  </TableBody>
</Table>`,
      },
    },
  },
  render: (args) => {
    const manyRows = Array.from({ length: 20 }, (_, i) => ({
      ...employees[i % employees.length],
      name: `${employees[i % employees.length].name} ${i + 1}`,
    }));

    return (
      <div style={{ maxHeight: "300px", overflow: "auto", border: "1px solid #e5e7eb", borderRadius: "0.5rem" }}>
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeaderCell>#</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
              <TableHeaderCell>Department</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {manyRows.map((e, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.role}</TableCell>
                <TableCell>{e.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// -----------------------------------------------------------------------
// Custom Header Background
// -----------------------------------------------------------------------

/**
 * A custom header background color applied via the `headerBg` prop.
 */
export const CustomHeaderBg: Story = {
  args: {
    headerBg: "#dbeafe",
  },
  parameters: {
    docs: {
      source: {
        code: `<Table headerBg="#dbeafe">
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
      <TableHeaderCell>Department</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {/* rows */}
  </TableBody>
</Table>`,
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.map((e) => (
          <TableRow key={e.name}>
            <TableCell>{e.name}</TableCell>
            <TableCell>{e.role}</TableCell>
            <TableCell>{e.department}</TableCell>
            <TableCell>{e.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// -----------------------------------------------------------------------
// Column Alignment
// -----------------------------------------------------------------------

/**
 * Column cells can be aligned left (default), center, or right using the
 * `align` prop on `TableHeaderCell` and `TableCell`.
 */
export const ColumnAlignment: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell align="left">Name</TableHeaderCell>
      <TableHeaderCell align="center">Version</TableHeaderCell>
      <TableHeaderCell align="right">Downloads</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell align="left">react</TableCell>
      <TableCell align="center">18.3.0</TableCell>
      <TableCell align="right">24,000,000</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
    },
  },
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell align="left">Package</TableHeaderCell>
          <TableHeaderCell align="center">Version</TableHeaderCell>
          <TableHeaderCell align="right">Weekly Downloads</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {[
          { name: "react", version: "18.3.0", downloads: "24,000,000" },
          { name: "typescript", version: "5.4.5", downloads: "58,000,000" },
          { name: "vite", version: "5.2.11", downloads: "9,800,000" },
          { name: "tailwindcss", version: "3.4.4", downloads: "11,200,000" },
        ].map((pkg) => (
          <TableRow key={pkg.name}>
            <TableCell align="left">{pkg.name}</TableCell>
            <TableCell align="center">{pkg.version}</TableCell>
            <TableCell align="right">{pkg.downloads}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// -----------------------------------------------------------------------
// API Reference (documentation use-case)
// -----------------------------------------------------------------------

/**
 * A typical API-reference table for documenting component props or
 * configuration options.
 */
export const ApiReference: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Table variant="borderless">
  <TableHead>
    <TableRow>
      <TableHeaderCell>Prop</TableHeaderCell>
      <TableHeaderCell>Type</TableHeaderCell>
      <TableHeaderCell>Default</TableHeaderCell>
      <TableHeaderCell>Description</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {/* prop rows */}
  </TableBody>
</Table>`,
      },
    },
  },
  render: () => (
    <Table variant="borderless">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Prop</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Default</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {[
          {
            prop: "variant",
            type: '"default" | "borderless"',
            defaultVal: '"default"',
            desc: "Visual style of the table.",
          },
          {
            prop: "stickyHeader",
            type: "boolean",
            defaultVal: "false",
            desc: "Pins the header row to the top of the viewport while scrolling.",
          },
          {
            prop: "headerBg",
            type: "string",
            defaultVal: "—",
            desc: "CSS color applied to the header background.",
          },
          {
            prop: "onSort",
            type: "(key, direction) => void",
            defaultVal: "—",
            desc: "Callback for server-side sorting.",
          },
        ].map((row) => (
          <TableRow key={row.prop}>
            <TableCell>
              <code>{row.prop}</code>
            </TableCell>
            <TableCell>
              <code>{row.type}</code>
            </TableCell>
            <TableCell>
              <code>{row.defaultVal}</code>
            </TableCell>
            <TableCell>{row.desc}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

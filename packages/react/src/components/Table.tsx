'use client';

import React, { useState, createContext, useContext } from 'react';

type SortDirection = 'asc' | 'desc' | null;

interface TableContextValue {
  sortKey: string | null;
  sortDirection: SortDirection;
  onSort: (key: string) => void;
  stickyHeader: boolean;
  variant: 'default' | 'borderless';
  headerBg?: string;
}

const TableContext = createContext<TableContextValue | null>(null);

function useTableContext(): TableContextValue {
  const ctx = useContext(TableContext);
  if (!ctx) {
    throw new Error('Table sub-components must be used within a Table component');
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Table
// ---------------------------------------------------------------------------

export interface TableProps {
  /** Children — typically TableHead and TableBody */
  children: React.ReactNode;
  /**
   * Visual variant of the table.
   * `"default"` renders all borders; `"borderless"` shows only row top/bottom borders.
   */
  variant?: 'default' | 'borderless';
  /**
   * When true the thead sticks to the top of the scroll container while scrolling.
   * Pair with the `style` prop (e.g. `style={{ maxHeight: '400px' }}`) to constrain
   * the table height so that the header can stick.
   */
  stickyHeader?: boolean;
  /**
   * Background color applied to the header row.
   * Accepts any valid CSS color value (e.g. `"#f0f4ff"`, `"var(--my-color)"`).
   * Overrides the default token value.
   */
  headerBg?: string;
  /**
   * Callback fired when a sortable column header is clicked.
   * Useful for server-side sorting. Receives the column key and new direction.
   */
  onSort?: (key: string, direction: SortDirection) => void;
  /** Additional CSS classes applied to the outer wrapper */
  className?: string;
  /**
   * Inline styles applied to the outer wrapper.
   * Use `maxHeight` here to constrain the table height when `stickyHeader` is true.
   */
  style?: React.CSSProperties;
}

export function Table({
  children,
  variant = 'default',
  stickyHeader = false,
  headerBg,
  onSort,
  className = '',
  style,
}: TableProps) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (key: string) => {
    let nextDirection: SortDirection;
    if (sortKey === key) {
      nextDirection = sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? null : 'asc';
    } else {
      nextDirection = 'asc';
    }
    setSortKey(nextDirection === null ? null : key);
    setSortDirection(nextDirection);
    onSort?.(key, nextDirection);
  };

  const wrapperClasses = [
    'dds-table-wrapper',
    stickyHeader ? 'dds-table-scrollable' : '',
    variant === 'borderless' ? 'dds-table-borderless' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <TableContext.Provider
      value={{ sortKey, sortDirection, onSort: handleSort, stickyHeader, variant, headerBg }}
    >
      <div className={wrapperClasses} style={style}>
        <table className="dds-table">{children}</table>
      </div>
    </TableContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// TableHead
// ---------------------------------------------------------------------------

export interface TableHeadProps {
  /** Header rows — typically one TableRow containing TableHeaderCells */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function TableHead({ children, className = '' }: TableHeadProps) {
  const { stickyHeader, headerBg } = useTableContext();

  const classes = ['dds-table-head', stickyHeader ? 'dds-table-head-sticky' : '', className]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = headerBg ? { backgroundColor: headerBg } : {};

  return (
    <thead className={classes} style={style}>
      {children}
    </thead>
  );
}

// ---------------------------------------------------------------------------
// TableBody
// ---------------------------------------------------------------------------

export interface TableBodyProps {
  /** Table body rows */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function TableBody({ children, className = '' }: TableBodyProps) {
  return <tbody className={['dds-table-body', className].filter(Boolean).join(' ')}>{children}</tbody>;
}

// ---------------------------------------------------------------------------
// TableRow
// ---------------------------------------------------------------------------

export interface TableRowProps {
  /** Cells in this row */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function TableRow({ children, className = '' }: TableRowProps) {
  return <tr className={['dds-table-row', className].filter(Boolean).join(' ')}>{children}</tr>;
}

// ---------------------------------------------------------------------------
// TableHeaderCell
// ---------------------------------------------------------------------------

export interface TableHeaderCellProps {
  /** Cell content / column label */
  children: React.ReactNode;
  /**
   * Unique key used to identify this column when sorting.
   * When provided the column becomes sortable.
   */
  sortKey?: string;
  /** Text alignment of the column */
  align?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
}

export function TableHeaderCell({
  children,
  sortKey,
  align = 'left',
  className = '',
}: TableHeaderCellProps) {
  const { sortKey: activeSortKey, sortDirection, onSort } = useTableContext();

  const isSortable = Boolean(sortKey);
  const isActive = isSortable && activeSortKey === sortKey;

  const classes = [
    'dds-table-th',
    isSortable ? 'dds-table-th-sortable' : '',
    isActive ? 'dds-table-th-active' : '',
    `dds-table-align-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (sortKey) {
      onSort(sortKey);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isSortable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleClick();
    }
  };

  const ariaSort: React.AriaAttributes['aria-sort'] = isActive
    ? sortDirection === 'asc'
      ? 'ascending'
      : sortDirection === 'desc'
        ? 'descending'
        : 'none'
    : 'none';

  return (
    <th
      className={classes}
      scope="col"
      aria-sort={isSortable ? ariaSort : undefined}
      onClick={isSortable ? handleClick : undefined}
      onKeyDown={isSortable ? handleKeyDown : undefined}
      tabIndex={isSortable ? 0 : undefined}
    >
      <span className="dds-table-th-content">
        {children}
        {isSortable && (
          <span className="dds-table-sort-icon" aria-hidden="true">
            {isActive && sortDirection === 'asc' ? '↑' : isActive && sortDirection === 'desc' ? '↓' : '↕'}
          </span>
        )}
      </span>
    </th>
  );
}

// ---------------------------------------------------------------------------
// TableCell
// ---------------------------------------------------------------------------

export interface TableCellProps {
  /** Cell content */
  children?: React.ReactNode;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
}

export function TableCell({ children, align = 'left', className = '' }: TableCellProps) {
  const classes = ['dds-table-td', `dds-table-align-${align}`, className].filter(Boolean).join(' ');

  return <td className={classes}>{children}</td>;
}

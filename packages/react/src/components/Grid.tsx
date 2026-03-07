import { ReactNode, CSSProperties } from 'react';

/** Gap size token alias */
type GapSize = 'sm' | 'md' | 'lg';

/** Breakpoint at which columns stack vertically */
type StackAt = 'sm' | 'md' | 'lg' | 'never';

/** Vertical alignment of column content */
type AlignItems = 'start' | 'center' | 'end' | 'stretch';

/** Configuration for a border or divider line */
export interface BorderConfig {
  /**
   * Line thickness in pixels
   * @default 1
   */
  thickness?: number;
  /** Line color (defaults to the `--dds-grid-divider-color` token) */
  color?: string;
}

export interface GridProps {
  /**
   * Number of equal columns, or an array of fractional widths
   * (e.g. `[1, 2]` for a 1/3 + 2/3 split).
   * @default 2
   */
  columns?: number | number[];

  /**
   * Space between columns. Use `'sm'`, `'md'`, or `'lg'` for design-token sizes,
   * or any valid CSS length string (e.g. `'16px'`, `'1.5rem'`, `'2em'`).
   * @default 'md'
   */
  gap?: string;

  /**
   * Viewport breakpoint at which columns collapse to a single vertical stack.
   * @default 'md'
   */
  stackAt?: StackAt;

  /**
   * Vertical dividing line drawn between columns.
   * Converts to a horizontal rule when the layout stacks.
   */
  columnDivider?: BorderConfig;

  /** Horizontal rule rendered above the grid. */
  topBorder?: BorderConfig;

  /** Horizontal rule rendered below the grid. */
  bottomBorder?: BorderConfig;

  /**
   * Vertical alignment of content within each column.
   * @default 'stretch'
   */
  align?: AlignItems;

  /** Background color applied to the grid container. */
  backgroundColor?: string;

  /** Additional CSS classes applied to the grid wrapper. */
  className?: string;

  children: ReactNode;
}

export interface ColumnProps {
  /**
   * How many grid columns this item should span.
   * @default 1
   */
  span?: number;

  /**
   * Makes the column content sticky (`position: sticky; top: …`) while adjacent columns scroll.
   * Useful for tutorial-style layouts with a persistent code panel.
   * Automatically disabled when the grid stacks on mobile.
   * @default false
   */
  sticky?: boolean;

  /** Background color applied to the column. */
  backgroundColor?: string;

  /** Additional CSS classes applied to the column wrapper. */
  className?: string;

  children: ReactNode;
}

const GAP_TOKEN_MAP: Record<GapSize, string> = {
  sm: 'var(--dds-grid-gap-sm)',
  md: 'var(--dds-grid-gap-md)',
  lg: 'var(--dds-grid-gap-lg)',
};

const ALIGN_MAP: Record<AlignItems, string> = {
  start: 'start',
  center: 'center',
  end: 'end',
  stretch: 'stretch',
};

function resolveGap(gap: string): string {
  if (gap in GAP_TOKEN_MAP) return GAP_TOKEN_MAP[gap as GapSize];
  return gap; // custom CSS length string, e.g. '16px', '1.5rem', '2em'
}

/**
 * Multi-column layout container for documentation pages.
 * Supports equal and fractional column splits, configurable responsive stacking,
 * optional column dividers, top/bottom borders, and background colours.
 *
 * Pair with `<Column>` children to control individual column behaviour.
 */
export function Grid({
  columns = 2,
  gap = 'md',
  stackAt = 'md',
  columnDivider,
  topBorder,
  bottomBorder,
  align = 'stretch',
  backgroundColor,
  className = '',
  children,
}: GridProps) {
  const columnTemplate = Array.isArray(columns)
    ? columns.map((n) => `${n}fr`).join(' ')
    : `repeat(${columns}, 1fr)`;

  const style = {
    '--dds-grid-template-columns': columnTemplate,
    '--dds-grid-gap': resolveGap(gap),
    '--dds-grid-align': ALIGN_MAP[align],
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(topBorder
      ? {
          '--dds-grid-top-border-thickness': `${topBorder.thickness ?? 1}px`,
          '--dds-grid-top-border-color':
            topBorder.color ?? 'var(--dds-grid-divider-color)',
        }
      : {}),
    ...(bottomBorder
      ? {
          '--dds-grid-bottom-border-thickness': `${bottomBorder.thickness ?? 1}px`,
          '--dds-grid-bottom-border-color':
            bottomBorder.color ?? 'var(--dds-grid-divider-color)',
        }
      : {}),
    ...(columnDivider
      ? {
          '--dds-grid-column-divider-thickness': `${columnDivider.thickness ?? 1}px`,
          '--dds-grid-column-divider-color':
            columnDivider.color ?? 'var(--dds-grid-divider-color)',
        }
      : {}),
  } as CSSProperties;

  const classNames = [
    'dds-grid',
    `dds-grid-stack-${stackAt}`,
    topBorder ? 'dds-grid-has-top-border' : '',
    bottomBorder ? 'dds-grid-has-bottom-border' : '',
    columnDivider ? 'dds-grid-has-column-divider' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
}

/**
 * An individual column within a `<Grid>`.
 *
 * Use the `span` prop to make a column occupy more than one grid track, and
 * `sticky` to keep the column content pinned while adjacent content scrolls.
 * The column element itself always stretches to the full row height so that
 * column dividers cover the entire row regardless of which column is taller.
 */
export function Column({
  span,
  sticky = false,
  backgroundColor,
  className = '',
  children,
}: ColumnProps) {
  const style: CSSProperties = {};
  if (span && span > 1) {
    style.gridColumn = `span ${span}`;
  }
  if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  }

  const classNames = [
    'dds-grid-column',
    sticky ? 'dds-grid-column-sticky' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} style={style}>
      {sticky ? (
        <div className="dds-grid-column-sticky-inner">{children}</div>
      ) : (
        children
      )}
    </div>
  );
}

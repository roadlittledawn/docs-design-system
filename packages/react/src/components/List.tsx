import React, { ReactNode, FC } from "react";

export interface ListProps {
  /** List items */
  children: ReactNode;

  /** Additional CSS classes */
  className?: string;

  /** Whether the list is ordered (numbered) or unordered (bullets). Default: true */
  ordered?: boolean;

  /** Custom bullet character for unordered lists (emoji or text). Only applies when ordered=false */
  bullet?: string;

  /** Custom bullet icon (React node, e.g., SVG) for unordered lists. Takes precedence over bullet prop */
  bulletIcon?: ReactNode;
}

interface ListItemProps {
  /** List item content */
  children: ReactNode;

  /** Additional CSS classes */
  className?: string;

  /** Internal: bullet icon injected by List parent for unordered lists */
  bulletIcon?: ReactNode;
}

function ListImpl({ children, className = "", ordered = true, bullet, bulletIcon }: ListProps) {
  const listClasses = ["dds-list", className].filter(Boolean).join(" ");
  const Element = ordered ? "ol" : "ul";

  return (
    <Element
      className={listClasses}
      data-ordered={ordered}
      data-has-icon={!!bulletIcon && !ordered}
      style={
        bullet && !bulletIcon
          ? ({ "--dds-list-bullet": JSON.stringify(bullet) } as React.CSSProperties)
          : undefined
      }
    >
      {bulletIcon && !ordered
        ? React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === ListItem) {
              return React.cloneElement(child as React.ReactElement<ListItemProps>, {
                ...child.props,
                bulletIcon,
              });
            }
            return child;
          })
        : children}
    </Element>
  );
}

export function ListItem({ children, className = "", bulletIcon }: ListItemProps) {
  const itemClasses = ["dds-list-item", className].filter(Boolean).join(" ");

  return (
    <li className={itemClasses}>
      {bulletIcon && (
        <span className="dds-list-item-icon" aria-hidden="true">
          {bulletIcon}
        </span>
      )}
      {children}
    </li>
  );
}

export const List: FC<ListProps> & { Item: typeof ListItem } = Object.assign(ListImpl, {
  Item: ListItem,
});
